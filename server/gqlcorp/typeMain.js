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


const data = {
  "allTables": {
      "planets": [
          {
              "table_name": "planets",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('planets__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "planets",
              "column_name": "name",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "rotation_period",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "integer",
              "udt_name": "int4",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "orbital_period",
              "ordinal_position": 4,
              "column_default": null,
              "data_type": "integer",
              "udt_name": "int4",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "diameter",
              "ordinal_position": 5,
              "column_default": null,
              "data_type": "integer",
              "udt_name": "int4",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "climate",
              "ordinal_position": 6,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "gravity",
              "ordinal_position": 7,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "terrain",
              "ordinal_position": 8,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "surface_water",
              "ordinal_position": 9,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "planets",
              "column_name": "population",
              "ordinal_position": 10,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "YES"
          }
      ],
      "pilots": [
          {
              "table_name": "pilots",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('pilots__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "pilots",
              "column_name": "person_id",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          },
          {
              "table_name": "pilots",
              "column_name": "vessel_id",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          }
      ],
      "people_in_films": [
          {
              "table_name": "people_in_films",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('people_in_films__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "people_in_films",
              "column_name": "person_id",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          },
          {
              "table_name": "people_in_films",
              "column_name": "film_id",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          }
      ],
      "films": [
          {
              "table_name": "films",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('films__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "films",
              "column_name": "title",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "films",
              "column_name": "episode_id",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "films",
              "column_name": "opening_crawl",
              "ordinal_position": 4,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "films",
              "column_name": "director",
              "ordinal_position": 5,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "films",
              "column_name": "producer",
              "ordinal_position": 6,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "films",
              "column_name": "release_date",
              "ordinal_position": 7,
              "column_default": null,
              "data_type": "date",
              "udt_name": "date",
              "required": "NO"
          }
      ],
      "species": [
          {
              "table_name": "species",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('species__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "species",
              "column_name": "name",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "species",
              "column_name": "classification",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "species",
              "column_name": "average_height",
              "ordinal_position": 4,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "species",
              "column_name": "average_lifespan",
              "ordinal_position": 5,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "species",
              "column_name": "hair_colors",
              "ordinal_position": 6,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "species",
              "column_name": "skin_colors",
              "ordinal_position": 7,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "species",
              "column_name": "eye_colors",
              "ordinal_position": 8,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "species",
              "column_name": "language",
              "ordinal_position": 9,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "species",
              "column_name": "homeworld_id",
              "ordinal_position": 10,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "YES"
          }
      ],
      "species_in_films": [
          {
              "table_name": "species_in_films",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('species_in_films__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "species_in_films",
              "column_name": "film_id",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          },
          {
              "table_name": "species_in_films",
              "column_name": "species_id",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          }
      ],
      "vessels": [
          {
              "table_name": "vessels",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('vessels__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "vessels",
              "column_name": "name",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "vessels",
              "column_name": "manufacturer",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "model",
              "ordinal_position": 4,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "vessel_type",
              "ordinal_position": 5,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "vessels",
              "column_name": "vessel_class",
              "ordinal_position": 6,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "vessels",
              "column_name": "cost_in_credits",
              "ordinal_position": 7,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "length",
              "ordinal_position": 8,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "max_atmosphering_speed",
              "ordinal_position": 9,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "crew",
              "ordinal_position": 10,
              "column_default": null,
              "data_type": "integer",
              "udt_name": "int4",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "passengers",
              "ordinal_position": 11,
              "column_default": null,
              "data_type": "integer",
              "udt_name": "int4",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "cargo_capacity",
              "ordinal_position": 12,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "vessels",
              "column_name": "consumables",
              "ordinal_position": 13,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          }
      ],
      "vessels_in_films": [
          {
              "table_name": "vessels_in_films",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('vessels_in_films__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "vessels_in_films",
              "column_name": "vessel_id",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          },
          {
              "table_name": "vessels_in_films",
              "column_name": "film_id",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          }
      ],
      "people": [
          {
              "table_name": "people",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('people__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "people",
              "column_name": "name",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "NO"
          },
          {
              "table_name": "people",
              "column_name": "mass",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "hair_color",
              "ordinal_position": 4,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "skin_color",
              "ordinal_position": 5,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "eye_color",
              "ordinal_position": 6,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "birth_year",
              "ordinal_position": 7,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "gender",
              "ordinal_position": 8,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "species_id",
              "ordinal_position": 9,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "homeworld_id",
              "ordinal_position": 10,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "YES"
          },
          {
              "table_name": "people",
              "column_name": "height",
              "ordinal_position": 11,
              "column_default": null,
              "data_type": "integer",
              "udt_name": "int4",
              "required": "YES"
          }
      ],
      "planets_in_films": [
          {
              "table_name": "planets_in_films",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('planets_in_films__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "planets_in_films",
              "column_name": "film_id",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          },
          {
              "table_name": "planets_in_films",
              "column_name": "planet_id",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          }
      ],
      "starship_specs": [
          {
              "table_name": "starship_specs",
              "column_name": "_id",
              "ordinal_position": 1,
              "column_default": "nextval('starship_specs__id_seq'::regclass)",
              "data_type": "integer",
              "udt_name": "int4",
              "required": "NO"
          },
          {
              "table_name": "starship_specs",
              "column_name": "hyperdrive_rating",
              "ordinal_position": 2,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "starship_specs",
              "column_name": "MGLT",
              "ordinal_position": 3,
              "column_default": null,
              "data_type": "character varying",
              "udt_name": "varchar",
              "required": "YES"
          },
          {
              "table_name": "starship_specs",
              "column_name": "vessel_id",
              "ordinal_position": 4,
              "column_default": null,
              "data_type": "bigint",
              "udt_name": "int8",
              "required": "NO"
          }
      ]
  },
  "foreignKeys": [
      {
          "foreign_table": "people",
          "rel": ">-",
          "primary_table": "planets",
          "fk_columns": "homeworld_id",
          "constraint_name": "people_fk1",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "people",
          "rel": ">-",
          "primary_table": "species",
          "fk_columns": "species_id",
          "constraint_name": "people_fk0",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "people_in_films",
          "rel": ">-",
          "primary_table": "films",
          "fk_columns": "film_id",
          "constraint_name": "people_in_films_fk1",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "people_in_films",
          "rel": ">-",
          "primary_table": "people",
          "fk_columns": "person_id",
          "constraint_name": "people_in_films_fk0",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "pilots",
          "rel": ">-",
          "primary_table": "people",
          "fk_columns": "person_id",
          "constraint_name": "pilots_fk0",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "pilots",
          "rel": ">-",
          "primary_table": "vessels",
          "fk_columns": "vessel_id",
          "constraint_name": "pilots_fk1",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "planets_in_films",
          "rel": ">-",
          "primary_table": "films",
          "fk_columns": "film_id",
          "constraint_name": "planets_in_films_fk0",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "planets_in_films",
          "rel": ">-",
          "primary_table": "planets",
          "fk_columns": "planet_id",
          "constraint_name": "planets_in_films_fk1",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "species",
          "rel": ">-",
          "primary_table": "planets",
          "fk_columns": "homeworld_id",
          "constraint_name": "species_fk0",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "species_in_films",
          "rel": ">-",
          "primary_table": "films",
          "fk_columns": "film_id",
          "constraint_name": "species_in_films_fk0",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "species_in_films",
          "rel": ">-",
          "primary_table": "species",
          "fk_columns": "species_id",
          "constraint_name": "species_in_films_fk1",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "starship_specs",
          "rel": ">-",
          "primary_table": "vessels",
          "fk_columns": "vessel_id",
          "constraint_name": "starship_specs_fk0",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "vessels_in_films",
          "rel": ">-",
          "primary_table": "films",
          "fk_columns": "film_id",
          "constraint_name": "vessels_in_films_fk1",
          "constraint_type": "FOREIGN KEY"
      },
      {
          "foreign_table": "vessels_in_films",
          "rel": ">-",
          "primary_table": "vessels",
          "fk_columns": "vessel_id",
          "constraint_name": "vessels_in_films_fk0",
          "constraint_type": "FOREIGN KEY"
      }
  ],
  "primaryKeys": [
      {
          "table_name": "films",
          "constraint_name": "films_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "people",
          "constraint_name": "people_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "people_in_films",
          "constraint_name": "people_in_films_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "pilots",
          "constraint_name": "pilots_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "planets",
          "constraint_name": "planets_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "planets_in_films",
          "constraint_name": "planets_in_films_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "species",
          "constraint_name": "species_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "species_in_films",
          "constraint_name": "species_in_films_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "starship_specs",
          "constraint_name": "starship_specs_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "vessels",
          "constraint_name": "vessels_pk",
          "primary_key_columns": "_id"
      },
      {
          "table_name": "vessels_in_films",
          "constraint_name": "vessels_in_films_pk",
          "primary_key_columns": "_id"
      }
  ]
};

const {allTables, foreignKeys} = data

const nullableObj = isNullable(allTables)
const tablesTuples = dataTupleMaker(allTables)
const fKeyTuples = fkTupleMaker(foreignKeys)

const fKeyCounts = countTupleKeys(fKeyTuples)
const allKeyCounts = countTupleKeys(tablesTuples)
const fKeysObj = Object.fromEntries(fKeyTuples)
const tablesObj = Object.fromEntries(tablesTuples)

const [joinTable, nonJoinTable] = nonAndJoinTables(fKeyCounts, allKeyCounts, fKeysObj, tablesObj)

const finalResult = typeCreator(nonJoinTable, fKeysObj, nullableObj) 

console.log(finalResult)
// console.log('terrified!!', typeCreator(nonJoinTable, fKeysObj, nullableObj));


// we never use primaryKeys data ? seem to compare fKeyCount to totalKeyCount to determine join tables
// we never use joinTable? def use nonJoinTable but not join
// will we use joinTable or primaryKeys in mutations, queries, resolvers?

