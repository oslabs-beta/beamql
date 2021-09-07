const { singular } = require('pluralize');
const jspc = require('json-stringify-pretty-compact')
const camelCase = require('camelcase');
//Capitalizes first letter of any string
function capFirstLet(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Converts to PascalCaseFrom snake_case
function snakeToTitle(str) {
    return str.split("_").map(capFirstLet).join("");
}

const camelCaseIt = (string) =>
  string
    .toLowerCase()
    .trim()
    .split(/[.\-_\s]/g)
    .reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));

//Easy mapper for the two tuple items
const tuplesToObjects = (a,b) => [a,b].map(x=>Object.fromEntries(x))


//Determines if each column in the table is nullable, if no add to nullable obj
//pass in all table data as argument
const isNullable = (obj) => {
  const types = {};
  
  for (const tbl in obj) {
    types[tbl] = {};
  
    for (const arr of obj[tbl]) {
  
      for (const column in arr) {
        let temp = arr.column_name
        if (arr.required === 'NO') {
          types[tbl][temp] = true;
        }
      }
    }
  }
  return types
}

// Takes allTables, returns array, elements are tuples, 1st val 
const dataTupleMaker = (object) => {
  const types = []; // holds everything
  tupColNames = Object.entries(object)

  for (const [tableName, colData] of tupColNames) { // key is col name, val is array holding multiple objs of column data // reducing array of objs to obj of col names and types
    const tupTypes = [tableName, {}]; // sets up tuple
    colData.forEach(val => {
      tupTypes[1][val.column_name] = val.data_type; // puts column:type into object
    });
    types.push(tupTypes); // places tuple into types
  }
  //value is an array of objs
  return types;
};

//takes array of obj, spits out array of tuples [foreign keys, {foreign keys: primary tables}]
const fkTupleMaker = array => { // array of Foreign Keys, elem is object
  const tupArr = [];
  array.forEach(fkObj => {
    if (!tupArr.length || tupArr[tupArr.length - 1][0] !== fkObj.foreign_table) { //array not empty, last tuple in array's name is not yet made:
      const tuple = [fkObj.foreign_table, {}]; //make tuple => fTableName, { columnName: primaryTable}
      tuple[1][fkObj.fk_columns] = fkObj.primary_table; // add to foreign table obj w/ all column names to its primary table
      tupArr.push(tuple);
    } else { // fTable already exists in fkArray
      tupArr[tupArr.length - 1][1][fkObj.fk_columns] = fkObj.primary_table; // add in more primary tables
    }
  });
  return tupArr;
}; 

//Takes tuple array and returns object of each tableName as key and value as number of foreign keys
const countTupleKeys = (tuples) => {
  const keyCount = {}
  tuples.forEach(tuple => {
    //purple arr for each table
    const tableName = tuple[0]
    const count = Object.keys(tuple[1]).length; //counts foreign keys
    keyCount[tableName] = count;
  })
  return keyCount
}

// Compares all tables & their # of keys to foreign key tables and gives join and nonJoin tables
const nonAndJoinTables = (numFKeys, numAllKeys, fKeysObject, tablesObj) => {
  const jTable = {}
  const nJTable = {}

  for (const tableName in numAllKeys) {
    //if number of foreign keys + 1 equals all keys, it's a join table
    if(numFKeys[tableName] + 1 === numAllKeys[tableName]) jTable[tableName] = tablesObj[tableName]
    //if not, throw in non join table
    else nJTable[tableName] = tablesObj[tableName]
    }
  return [jTable, nJTable]
}

//Creates obj of all the foreign keys in non join tables
const fktNoJoins = (fktAsObj, nonJT) => {
    const fktNoJoinsObj = {}

    for (const key in fktAsObj) {
      if (nonJT[key]) {
        fktNoJoinsObj[key] = fktAsObj[key];
      }
    }
    return fktNoJoinsObj;
    }

//From non join tables, creating GQL formatted string with all types
const typeCreator = (nonJoinTables, fktObj, fktObjNoJoins, nullable) => {
  const typeObj = {};
  
  //creates schema types for nonJoinTables with foreign keys and without foreign keys.
    //NJT's w/o FK's are added directly as key/value pairs
    //NJT w/ FK's are added with the foreign key singularized and capitalized 
  for (const key in nonJoinTables) { // key: people / starship spec
    //add non foreign key value pairs to type obj
    if (!fktObj[key]) { //
      typeObj[key] = nonJoinTables[key]; //no touch after this step
    } else {
      // if foreign key, create an object, to be filled with its column names
      typeObj[key] = {};
      
      for (const prop in nonJoinTables[key]) {//prop: key within the people obj / hyperdrive
        // loop through each table for column data and add column info
        if (prop in fktObj[key] === false) {
          typeObj[key][prop] = nonJoinTables[key][prop];
        } else { 
          // but if it's in the foreign key object, it adds the type as a connection to a different table.
          const temp = fktObj[key][prop]
          // const temp = camelCase(fktObj[key][prop]);
          typeObj[key][temp] = '['+capFirstLet(singular(temp))+']';
        }
      }
    }
  }
  
  //Add corresponding foreign keys from join tables & non join tables to their appropriate type in GraphQL. This enables us to properly connect our types with relational data
  for(let table in typeObj) { // key is people
    // look through values OF values OF fktasObj
    for(let fktObjKey in fktObj) {
      const arrFK = Object.values(fktObj[fktObjKey]) //values of objects in fktasobject as an array
      if (arrFK.includes(table)) {
        const valsToInput = arrFK.filter(elem => elem !== table) //filter for all other tables
        valsToInput.forEach(val => { //Add to final table 
          typeObj[table][val] = '['+capFirstLet(singular(val))+']'
        })
      }
    }
  }

  
  //Add Foreign Types to Type obj
  //Due to no join tables, adding corresponding foreign keys to each non join table so each table can be relationally linked
  // for (const njtCol in nonJoinTables) { //type object name i.e. planets, species, films

  //   for (const fktCol in fktObjNoJoins) { //iterate through fktObj fktCol i.e. people, peope_in_films

  //     for (const col in fktObjNoJoins[fktCol]) { //iterate through nested obj
  //       if (fktObjNoJoins[fktCol][col] === njtCol) {
  //           if (!(Object.keys(typeObj[njtCol]).includes(fktCol))) {
  //             //console.log('missing fks', typeObj[njtCol],fktCol)
  //             typeObj[njtCol][fktCol] = '['+snakeToTitle(singular(fktCol))+']'
  //           }
  //     }
  //     }
  //   }
  // }
////////////////////////////////////////////////////////////////TEST//////////////////////////////////
for (const njtCol in nonJoinTables) { //type object name i.e. planets, species, films

  for (const fktCol in fktObjNoJoins) { //iterate through fktObj fktCol i.e. people, peope_in_films

    for (const col in fktObjNoJoins[fktCol]) { //iterate through nested obj
      if (fktObjNoJoins[fktCol][col] === njtCol) {
          if (!(Object.keys(typeObj[njtCol]).includes(fktCol))) {
            //console.log('missing fks', typeObj[njtCol],fktCol)
            let temp = camelCaseIt(fktCol);
            typeObj[njtCol][temp] = '['+snakeToTitle(singular(fktCol))+']'
          }
    }
    }
  }
}
  
////////////////////////////////////////////////////////////////TEST//////////////////////////////////


  //convert SQL types to GQL type
  for (const table in typeObj) {

    for (const column in typeObj[table]) {
      switch (typeObj[table][column]) {
        case 'bigint':
          typeObj[table][column] = 'Int'
          break;
        case 'integer':
          typeObj[table][column] = 'Int'
          break;
        case 'character varying':
          typeObj[table][column] = 'String'
          break;
        case 'date':
          typeObj[table][column] = 'String'
          break;
      }
      if (column === '_id') {
        typeObj[table][column] = 'ID'
      }
    }
  }

  //Signifies which fields are nullable and adds them to the final object with ! for GQL format
  for (const tbl in typeObj) {

    for (const column in nullable[tbl]) {
      let temp = typeObj[tbl][column]
      if(temp) typeObj[tbl][column] = temp + '!'
      }
  }
  
  // const toDisplay = \t \n .replace
  // const directToCopy straighup string
  return typeObj
}
// jspc takes object, jsons it, then prettifies it
// within object, take out commas and quotation marks
// for each object, add "type " singular(key) plus object with above stuff done

// evening work
// in type, we need a new line before each type ____ MUST BE DONE WITHIN TYPE
// all of type is indented when it should not be MUST BE DONE WITHIN TYPE ?

function brianFunction(object) {
  const brianObj = {}
  //loop through properties of object
  for(const table in object) {
    //for the current property
    const value = object[table]
    const newKey = `type ${snakeToTitle(singular(table))}`
    brianObj[newKey] = value;
  }
  let closeToDone = jspc(brianObj);
  closeToDone = closeToDone.replace(/"/g, '').replace(/: {/g,' {').replace(/,/g,'').replace(/type /g, '\ntype ')
  return closeToDone
      //store val in temp variable
      //insert new property, key of which is "type singular(oldkeyname)" with temp as value
      //delete original property
  //return modified object




  //   let frontEndString = '';


// jspc()
//   for(const table in object) {
//     frontEndString += 'type ' + snakeToTitle(table) + JSON.stringify(object[table]).replace(/"/g,'').replace(/,/g,'')
//   }
//   return frontEndString
}

// console.log('aefhoiwhfoiqwehfalsdvnasdlkghalkdvhasldkghasdlkghsadlkfhakldvhaoidvhaoidgha',brianFunction(text))



const postjspc = "{\n  \"planets\": {\n    \"_id\": \"ID!\",\n    \"name\": \"String\",\n    \"rotation_period\": \"Int\",\n    \"orbital_period\": \"Int\",\n    \"diameter\": \"Int\",\n    \"climate\": \"String\",\n    \"gravity\": \"String\",\n    \"terrain\": \"String\",\n    \"surface_water\": \"String\",\n    \"population\": \"Int\",\n    \"species\": \"[Species]\",\n    \"films\": \"[Film]\",\n    \"people\": \"[Person]\",\n    \"planets_in_films\": \"[PlanetsInFilm]\"\n  },\n  \"films\": {\n    \"_id\": \"ID!\",\n    \"title\": \"String!\",\n    \"episode_id\": \"Int!\",\n    \"opening_crawl\": \"String!\",\n    \"director\": \"String!\",\n    \"producer\": \"String!\",\n    \"release_date\": \"String!\",\n    \"people\": \"[Person]\",\n    \"planets\": \"[Planet]\",\n    \"species\": \"[Species]\",\n    \"vessels\": \"[Vessel]\",\n    \"people_in_films\": \"[PeopleInFilm]\",\n    \"planets_in_films\": \"[PlanetsInFilm]\",\n    \"species_in_films\": \"[SpeciesInFilm]\",\n    \"vessels_in_films\": \"[VesselsInFilm]\"\n  },\n  \"species\": {\n    \"_id\": \"ID!\",\n    \"name\": \"String!\",\n    \"classification\": \"String\",\n    \"average_height\": \"String\",\n    \"average_lifespan\": \"String\",\n    \"hair_colors\": \"String\",\n    \"skin_colors\": \"String\",\n    \"eye_colors\": \"String\",\n    \"language\": \"String\",\n    \"planets\": \"[Planet]\",\n    \"films\": \"[Film]\",\n    \"people\": \"[Person]\",\n    \"species_in_films\": \"[SpeciesInFilm]\"\n  },\n  \"vessels\": {\n    \"_id\": \"ID!\",\n    \"name\": \"String!\",\n    \"manufacturer\": \"String\",\n    \"model\": \"String\",\n    \"vessel_type\": \"String!\",\n    \"vessel_class\": \"String!\",\n    \"cost_in_credits\": \"Int\",\n    \"length\": \"String\",\n    \"max_atmosphering_speed\": \"String\",\n    \"crew\": \"Int\",\n    \"passengers\": \"Int\",\n    \"cargo_capacity\": \"String\",\n    \"consumables\": \"String\",\n    \"people\": \"[Person]\",\n    \"films\": \"[Film]\",\n    \"pilots\": \"[Pilot]\",\n    \"starship_specs\": \"[StarshipSpec]\",\n    \"vessels_in_films\": \"[VesselsInFilm]\"\n  },\n  \"people\": {\n    \"_id\": \"ID!\",\n    \"name\": \"String!\",\n    \"mass\": \"String\",\n    \"hair_color\": \"String\",\n    \"skin_color\": \"String\",\n    \"eye_color\": \"String\",\n    \"birth_year\": \"String\",\n    \"gender\": \"String\",\n    \"species\": \"[Species]\",\n    \"planets\": \"[Planet]\",\n    \"height\": \"Int\",\n    \"films\": \"[Film]\",\n    \"vessels\": \"[Vessel]\",\n    \"people_in_films\": \"[PeopleInFilm]\",\n    \"pilots\": \"[Pilot]\"\n  },\n  \"starship_specs\": {\n    \"_id\": \"ID!\",\n    \"hyperdrive_rating\": \"String\",\n    \"MGLT\": \"String\",\n    \"vessels\": \"[Vessel]\"\n  }\n}"

// const {allTables, foreignKeys} = data

// const nullableObj = isNullable(allTables)
// const tablesTuples = dataTupleMaker(allTables)
// const fKeyTuples = fkTupleMaker(foreignKeys)

// const fKeyCounts = countTupleKeys(fKeyTuples)
// const allKeyCounts = countTupleKeys(tablesTuples)

// const [fKeysObj, tablesObj] = tuplesToObjects(fKeyTuples, tablesTuples)


// const [joinTable, nonJoinTable] = nonAndJoinTables(fKeyCounts, allKeyCounts, fKeysObj, tablesObj)

// const fktObjNoJoins = fktNoJoins(fKeysObj, nonJoinTable)

// const finalResult = typeCreator(nonJoinTable, fKeysObj, nullableObj) 



module.exports = {  capFirstLet, 
          snakeToTitle, 
          isNullable, 
          dataTupleMaker, 
          fkTupleMaker, 
          countTupleKeys, 
          tuplesToObjects, 
          nonAndJoinTables, 
          fktNoJoins, 
          typeCreator,
          brianFunction }