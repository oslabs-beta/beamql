const { singular } = require('pluralize');

function capFirstLet(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const isNullable = (obj) => {
  const types = {};
  for (const tbl in obj) {
    types[tbl] = {};
    for (const arr of obj[tbl]) {
      //console.log(arr)
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






























const typeCreator = (nonJoinTables, fktObj, nullable) => {
  const typeObj = {};
  
  //initial type creator
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
          typeObj[key][temp] = '['+capFirstLet(singular(temp))+']';
        }
      }
    }
  }
  
  //Add Foreign Types to Type obj
  for(let key in typeObj) { // key is people
    // look through values OF values OF fktasObj
    for(let fktObjKey in fktObj) {
      const arrFK = Object.values(fktObj[fktObjKey]) //values of objects in fktasobject as an array
      if (arrFK.includes(key)) {
        const valsToInput = arrFK.filter(elem => elem !== key)
        valsToInput.forEach(val => {
          // console.log(val)
          typeObj[key][val] = '['+capFirstLet(singular(val))+']'
        })
      }
    }
  }
  // is currently adding join tables, but we don't like that
  //Add Missing Foreign Keys/Types
  for (const njtCol in nonJoinTables) { //type object name i.e. planets, species, films
    for (const fktCol in fktObj) { //iterate through fktObj fktCol i.e. people, peope_in_films
      // console.log(`1082`)
      for (const col in fktObj[fktCol]) { //iterate through nested obj
        // console.log(`1083`)
        if (fktObj[fktCol][col] === njtCol) {
          if (Object.keys(typeObj[njtCol]).includes(fktCol)) {
              typeObj[njtCol][fktCol] = '['+capFirstLet(singular(fktCol))+']'
            }
      }
      }
    }
  }

  //convert typeObj values to GraphQL values 
  for (const table in typeObj) {
    for (const column in typeObj[table]) {
      switch (typeObj[table][column]) {
        case 'bigint':
          typeObj[table][column] = 'ID'
          break;
        case 'integer':
          typeObj[table][column] = 'Int'
          break;
        case 'character varying':
          typeObj[table][column] = 'String'
          break;
        case 'date':
          typeObj[table][column] = 'ID'
          break;
      }
      if (column === '_id') {
        typeObj[table][column] = 'ID'
      }
    }
  }

  //Signifies which fields are nullable
  for (const tbl in typeObj) {
    for (const column in nullable[tbl]) {
      let temp = typeObj[tbl][column]
      if(temp) typeObj[tbl][column] = temp + '!'
      }
  }



  
  return typeObj
  
}

console.log('terrified!!', typeCreator(nonJoinTable, fKeysObj, nullableObj));


