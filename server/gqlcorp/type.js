const { singular } = require('pluralize');

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

//get table names
//get column names for each table
//get data type for each column

//Nested array of Objects with first element as table name and second el is an obj of column name and data type
// Takes allTables, returns array, elements are tuples, 1st val 
//tColTypes // grab ordinal position ?
const typeData = () => {
  const types = []; // holds everything
  for (const [key, value] of Object.entries(data.allTables)) { // key is col name, val is array holding objs of column data
    const tempArr = [key, {}]; // sets up tuple
    value.forEach((val) => {
      tempArr[1][val.column_name] = val.data_type; // puts column & type into 2nd val of tuple
    });
    types.push(tempArr); // places tuple into types
  }
  //value is an array of objs
  return types;
};
// console.log('GO',typeData())
const typeDataRe = (object) => {
  const types = []; // holds everything
  for (const [key, value] of Object.entries(object)) { // key is col name, val is array holding objs of column data
    const typesTuple = [key, {}]; // sets up tuple
    value.forEach((val) => {
      typesTuple[1][val.column_name] = val.data_type; // puts column & type into 2nd val of tuple
    });
    types.push(typesTuple); // places tuple into types
  }
  //value is an array of objs
  return types;
};
const typeDataResult = typeDataRe(data.allTables) 
// console.log(typeDataResult)
//create arr of objects with first el as table name and second el is an obj of fk colums and the table it references
const foreignKeyData = () => {
  const fks = [];
  data.foreignKeys.forEach((obj) => {
    if (!fks.length || fks[fks.length - 1][0] !== obj.foreign_table) {
      //console.log(`made it here`);
      const tempArr = [obj.foreign_table, {}];
      tempArr[1][obj.fk_columns] = obj.primary_table;
      fks.push(tempArr);
    } else {
      //console.log(`here yee`)
      fks[fks.length - 1][1][obj.fk_columns] = obj.primary_table;
    }
  });
  return fks;
};

// [ [ 'people', { homeworld_id: 'planets' } ],
//   [ 'people', { species_id: 'species' } ],
//   [ 'people_in_films', { film_id: 'films' } ],
// const foreignKeyData = () => {
//   const fks = [];
//   data.foreignKeys.forEach(obj => {
//     const tempArr = [obj.foreign_table, {}];
//     tempArr[1][obj.fk_columns] = obj.primary_table;
//     fks.push(tempArr);
//   })
//   return fks;
// }

// console.log(foreignKeyData());

//logic to determine join tables -> solely has foreign keys as values
//wont' use join tables as types and input foreign keys as columns on corresponding type object

//add fk vals to

//add to Type

// Foreign Keys of Each Table
const fkt = [
  ["people", { homeworld_id: "planets", species_id: "species" }],
  ["people_in_films", { film_id: "films", person_id: "people" }],
  ["pilots", { person_id: "people", vessel_id: "vessels" }],
  ["planets_in_films", { film_id: "films", planet_id: "planets" }],
  ["species", { homeworld_id: "planets" }],
  ["species_in_films", { film_id: "films", species_id: "species" }],
  ["starship_specs", { vessel_id: "vessels" }],
  ["vessels_in_films", { film_id: "films", vessel_id: "vessels" }],
];

  // All of the Table Data
  const atd = [ [ 'planets',
  { _id: 'integer',
  name: 'character varying',
  rotation_period: 'integer',
  orbital_period: 'integer',
  diameter: 'integer',
  climate: 'character varying',
  gravity: 'character varying',
  terrain: 'character varying',
  surface_water: 'character varying',
  population: 'bigint' } ],
  [ 'pilots',
  { _id: 'integer', person_id: 'bigint', vessel_id: 'bigint' } ],
  [ 'people_in_films',
  { _id: 'integer', person_id: 'bigint', film_id: 'bigint' } ],
  [ 'films',
  { _id: 'integer',
  title: 'character varying',
  episode_id: 'integer',
  opening_crawl: 'character varying',
  director: 'character varying',
  producer: 'character varying',
  release_date: 'date' } ],
  [ 'species',
  { _id: 'integer',
  name: 'character varying',
  classification: 'character varying',
  average_height: 'character varying',
  average_lifespan: 'character varying',
  hair_colors: 'character varying',
  skin_colors: 'character varying',
  eye_colors: 'character varying',
  language: 'character varying',
  homeworld_id: 'bigint' } ],
  [ 'species_in_films',
  { _id: 'integer', film_id: 'bigint', species_id: 'bigint' } ],
  [ 'vessels',
  { _id: 'integer',
  name: 'character varying',
  manufacturer: 'character varying',
  model: 'character varying',
  vessel_type: 'character varying',
  vessel_class: 'character varying',
  cost_in_credits: 'bigint',
  length: 'character varying',
  max_atmosphering_speed: 'character varying',
  crew: 'integer',
  passengers: 'integer',
  cargo_capacity: 'character varying',
  consumables: 'character varying' } ],
  [ 'vessels_in_films',
  { _id: 'integer', vessel_id: 'bigint', film_id: 'bigint' } ],
  [ 'people',
  { _id: 'integer',
  name: 'character varying',
  mass: 'character varying',
  hair_color: 'character varying',
  skin_color: 'character varying',
  eye_color: 'character varying',
  birth_year: 'character varying',
  gender: 'character varying',
  species_id: 'bigint',
  homeworld_id: 'bigint',
  height: 'integer' } ],
  [ 'planets_in_films',
  { _id: 'integer', film_id: 'bigint', planet_id: 'bigint' } ],
  [ 'starship_specs',
  { _id: 'integer',
  hyperdrive_rating: 'character varying',
    MGLT: 'character varying',
    vessel_id: 'bigint'
}]
]

//convert tupils into objs
// console.log(`atd as Obj`, atdAsObj);
// numberofkeysObj 
const numForeignKeys = {} // stores foreign key count from foreign key table (arr of arr)
const countForeignKeys = (foreignKeys) => {
  foreignKeys.forEach((purpleArray) => {
    //purple arr for each table
    const count = Object.keys(purpleArray[1]).length; //counts foreign keys
    numForeignKeys[purpleArray[0]] = count;
  })
}
countForeignKeys(fkt)
// console.log(`foreign key obj`, numForeignKeys)
//number of total keys // tableObjectForNumKeys {planets: 17}
const numTotalKeys = {}; // stores num keys for each table from all table data
const countTotalKeys = (allTables) => {
  allTables.forEach((table) => {
    //table is an array
    const count = Object.keys(table[1]).length;
    numTotalKeys[table[0]] = count;
  });
};

countTotalKeys(atd);
// console.log(`total keys obj`, numTotalKeys);

const fktAsObj = Object.fromEntries(fkt);

const atdAsObj = Object.fromEntries(atd);

const atdAsObj2 = atdAsObj
// console.log('HIHIHI',atdAsObj2)
const required = object => {
  atdAsObj
}

const nonJoinTables = {}
const joinTables = {}


// numForeignKeys, numTotalKeys, fkt, atd
const isJoinTable = (fKeyCount, pKeyCount, fktObject, atdObject) => { //filling non & joinTables
  for(const key in pKeyCount) {
    if(fKeyCount[key] + 1 === pKeyCount[key]) { // loop through fkey table & find if key is in pKey table AND # corresponds to # in pKey => IS A JOIN TABLE // never > but is === always going to be true? test later shit to do rn
      joinTables[key] = atdObject[key]
    } else { // NOT JOIN TABLE
      nonJoinTables[key] = atdObject[key]
    }
  }
}
isJoinTable(numForeignKeys, numTotalKeys, fktAsObj, atdAsObj);
// console.log('NONJOINTABLESHERE', nonJoinTables);
// console.log(`isJoinTable`, joinTables);
// function typesGenerator(foreignKeys, allTables) {
// // [nonjoin tables]
// //find join tables
//   //loop through all tables

//   for(let i = 0; i < allTables.length; i++) {
//     //ifjointable (determined by if # of keys of table data <=  foreignkeys + 1 || fkArr does not include table name i.e. planets)
//     if()

//   }
//     //ifnotjointable add to [nonjointables]

// };

// in order to get Type
// typesGenerator(fkt, atd)

//console.log(typeData())

// type Person {
//   _id: ID!
//   gender: String
//   height: Int
//   mass: String
//   hair_color: String
//   skin_color: String
//   eye_color: String
//   name: String!
//   birth_year: String
//   species: [Species]
//   planets: [Planet]
//   films: [Film]
//   vessels: [Vessel]
// }


function capFirstLet(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// planets: [Planet]
// npm i pluralize  --save
// const pluralize = require('pluralize')
// go into {nonJoinTables}, loop, w/ each key find corresponding in {fktAsObject}, change FK(key) on nonJoinTables to value of fktAsObj and value to singular of fk
//create new obj with key as singular and keyvalues of all non FKs
//add foreign keys
//add join table keys
const typeObj = {}
//populate type object
//first function will loop through non join tables and compare to see if it has foreign keys, taken from fktObject. if it does, we'll set an empty object to fill in later. if it doesn't, we'll take all column names&types and copy them over.
const typeCreator = (nonJoinTables, joinTables, fktObj) => {
  for (const key in nonJoinTables) { // key: people / starship spec
    if (!fktObj[key]) { //
      typeObj[key] = nonJoinTables[key]; //notouch after this step
    } else {
      typeObj[key] = {};

      ///////////////
//fill foreign key type objects
//second function must loop through each table for column data and add all of them. but if it's in the foreign key object, it adds the type as a connection to a different table.
      for (const prop in nonJoinTables[key]) {//prop: key within the people obj / hyperdrive
        if (prop in fktObj[key] === false) {
          typeObj[key][prop] = nonJoinTables[key][prop];
        } else {
          const temp = fktObj[key][prop]
          typeObj[key][temp] = '['+capFirstLet(singular(temp))+']';
        }
      }
    }
  }
}

// [Planet]
typeCreator(nonJoinTables, joinTables, fktAsObj);
// console.log(`HERE`, typeObj);


// add join table keys to typeObjects
const otherKeyFinder = (typeObject, fKTAO) => { //fkTAO = foreign key table object
  // take type obj keys
  for(let key in typeObject) { // key is people
    // look through values OF values OF fktasObj
    for(let fktObjKey in fKTAO) {
      const arrFK = Object.values(fKTAO[fktObjKey]) //values of objects in fktasobject as an array
      if (arrFK.includes(key)) {
        const valsToInput = arrFK.filter(elem => elem !== key)
        valsToInput.forEach(val => {
          // console.log(val)
          typeObject[key][val] = '['+capFirstLet(singular(val))+']'
        })
      }
    }

  }
  // if matches, take any OTHER value and set as key in typeObj, value as singular[]
}
// 
otherKeyFinder(typeObj, fktAsObj)
// console.log('HERE', typeObj)

const fktNoJoins = (fktAsObj, nonJT) => {
  const fktNoJoinsObj = {}
  for (const key in fktAsObj) {
    if (nonJT[key]) {
      fktNoJoinsObj[key] = fktAsObj[key];
    }
  }
  return fktNoJoinsObj;
  }
// console.log(`fktNoJoins`, fktNoJoins(fktAsObj, nonJoinTables));
const fktNoJoin =  {
  people: { homeworld_id: 'planets', species_id: 'species' },
  species: { homeworld_id: 'planets' },
  starship_specs: { vessel_id: 'vessels' }
}

const addMissingFks = (typeObject, fktObj, nonJt) => {
  for (const njtCol in nonJt) { //type object name i.e. planets, species, films
    for (const fktCol in fktObj) { //iterate through fktObj fktCol i.e. people, peope_in_films
      // console.log(`1082`)
      for (const col in fktObj[fktCol]) { //iterate through nested obj
        // console.log(`1083`)
        if (fktObj[fktCol][col] === njtCol) {
          if (Object.keys(typeObject[njtCol]).includes(fktCol) === false) {
              typeObj[njtCol][fktCol] = '['+capFirstLet(singular(fktCol))+']'
            }
      }
      }
    }
  }
}

// const addMissingFks = (typeObject, fktObjNj) => {
//   for (const typeCol in typeObject) { //type object name i.e. planets, species, films
//     console.log('1095')
//     for (const fktCol in fktObjNj) { //iterate through fktObj fktCol i.e. people, peope_in_films
//       console.log(`1097`) // NEVER ENTERING THIS FOR LOOP
//       for (const col in fktObjNj[fktCol]) { //iterate through nested obj
//         console.log(`1099`)
//         if (fktObjNj[fktCol][typeCol] === typeCol) {
//           console.log(`1101`)
//           //console.log(`debuggin`, Object.keys(typeObject[typeCol]).includes(fktCol))
//           if (Object.keys(typeObject[typeCol]).includes(fktCol) === false) {
//               typeObj[typeCol][fktCol] = '['+capFirstLet(singular(fktCol))+']'
//             }
//       }
//       }
//     }
//   }
// }
//not hitting 1097
//
 

    
    //addMissingFks(tablesWTypes,fktNoJoins)
//addMissingFks(tablesWTypes, fktAsObj, nonJoinTables);
// planets: {
  //   _id: 'integer',
//   name: 'character varying',
//   rotation_period: 'integer',
//   orbital_period: 'integer',
//   diameter: 'integer',
//   climate: 'character varying',
//   gravity: 'character varying',
//   terrain: 'character varying',
//   surface_water: 'character varying',
//   population: 'bigint',
//   species: '[Species]',
//   films: '[Film]',
//   people: '[Person]',
//   planets_in_films: '[Planets_in_film]'
// },




//At end, when exporting as GQL formatting, need to regex and remove all quotation marks
//throw type defs completely into backtick and ship it off to Alaska

// PLANETS missing person 
// species missing person
// vessels msising starship spec
//change data types on schema types -> need to make a switch case
//adjust query to retrieve required fields


// readyForTypeAndMutation
// before will be tableWTypes
const tablesWTypes = {
  planets: {
    _id: 'integer',
    name: 'character varying',
    rotation_period: 'integer',
    orbital_period: 'integer',
    diameter: 'integer',
    climate: 'character varying',
    gravity: 'character varying',
    terrain: 'character varying',
    surface_water: 'character varying',
    population: 'bigint',
    species: '[Species]',
    films: '[Film]'
  },
  films: {
    _id: 'integer',
    title: 'character varying',
    episode_id: 'integer',
    opening_crawl: 'character varying',
    director: 'character varying',
    producer: 'character varying',
    release_date: 'date',
    people: '[Person]',
    planets: '[Planet]',
    species: '[Species]',
    vessels: '[Vessel]'
  },
  species: {
    _id: 'integer',
    name: 'character varying',
    classification: 'character varying',
    average_height: 'character varying',
    average_lifespan: 'character varying',
    hair_colors: 'character varying',
    skin_colors: 'character varying',
    eye_colors: 'character varying',
    language: 'character varying',
    planets: '[Planet]',
    films: '[Film]'
  },
  vessels: {
    _id: 'integer',
    name: 'character varying',
    manufacturer: 'character varying',
    model: 'character varying',
    vessel_type: 'character varying',
    vessel_class: 'character varying',
    cost_in_credits: 'bigint',
    length: 'character varying',
    max_atmosphering_speed: 'character varying',
    crew: 'integer',
    passengers: 'integer',
    cargo_capacity: 'character varying',
    consumables: 'character varying',
    people: '[Person]',
    films: '[Film]'
  },
  people: {
    _id: 'integer',
    name: 'character varying',
    mass: 'character varying',
    hair_color: 'character varying',
    skin_color: 'character varying',
    eye_color: 'character varying',
    birth_year: 'character varying',
    gender: 'character varying',
    species: '[Species]',
    planets: '[Planet]',
    height: 'integer',
    films: '[Film]',
    vessels: '[Vessel]'
  },
  starship_specs: {
    _id: 'integer',
    hyperdrive_rating: 'character varying',
    MGLT: 'character varying',
    vessels: '[Vessel]'
  }
}

addMissingFks(tablesWTypes, fktNoJoin, nonJoinTables);
// console.log('FINAL', typeObj)

const convertToGql = () => {
  for (const table in tablesWTypes) {
    for (const column in tablesWTypes[table]) {
      switch (tablesWTypes[table][column]) {
        case 'bigint':
          tablesWTypes[table][column] = 'ID'
          break;
        case 'integer':
          tablesWTypes[table][column] = 'Int'
          break;
        case 'character varying':
          tablesWTypes[table][column] = 'String'
          break;
        case 'date':
          tablesWTypes[table][column] = 'ID'
          break;
      }
      if (column === '_id') {
        tablesWTypes[table][column] = 'ID'
      }
    }
  }
};
// after will be GQL types without needed keys
convertToGql()
// console.log('HERE', tablesWTypes)

// now grab required or not

// const isRequired = (object) => { //allTables
//   const types = {}; // holds everything

//   for (const tableName in object) { // table is array
//     types[tableName] = {}

//     for(let column of object[tableName]) { // looking at each element obj of array
//       for(let descriptor in column) {
//         if(column[descriptor] === 'YES') types[tableName][column] = /////////
//       }
//     }
//   };
//   return types;
//   // if(object[tableName][column] === 'YES') types[tableName].required = true
// };


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

const tttest = isNullable(data.allTables) 
// console.log('////////////////////////////////////////////', tttest)


const outputOfIsNullable = {
  planets: { _id: true },
  pilots: { _id: true, person_id: true, vessel_id: true },
  people_in_films: { _id: true, person_id: true, film_id: true },
  films: {
    _id: true,
    title: true,
    episode_id: true,
    opening_crawl: true,
    director: true,
    producer: true,
    release_date: true
  },
  species: { _id: true, name: true },
  species_in_films: { _id: true, film_id: true, species_id: true },
  vessels: { _id: true, name: true, vessel_type: true, vessel_class: true },
  vessels_in_films: { _id: true, vessel_id: true, film_id: true },
  people: { _id: true, name: true },
  planets_in_films: { _id: true, film_id: true, planet_id: true },
  starship_specs: { _id: true, vessel_id: true }
}

const addNullableFields = (dataWTypes, Nullable) => {
  for (const tbl in dataWTypes) {
    for (const column in Nullable[tbl]) {
      let temp = dataWTypes[tbl][column]
      if(temp) dataWTypes[tbl][column] = temp + '!'
      }
    }
    return dataWTypes;
}

// console.log(tablesWTypes)
console.log('addNullFIelds', addNullableFields(tablesWTypes, outputOfIsNullable));

const outputOfaddNullableFields =  {
  planets: {
    _id: 'ID!',
    name: 'String',
    rotation_period: 'Int',
    orbital_period: 'Int',
    diameter: 'Int',
    climate: 'String',
    gravity: 'String',
    terrain: 'String',
    surface_water: 'String',
    population: 'ID',
    species: '[Species]',
    films: '[Film]'
  },
  films: {
    _id: 'ID!',
    title: 'String!',
    episode_id: 'Int!',
    opening_crawl: 'String!',
    director: 'String!',
    producer: 'String!',
    release_date: 'ID!',
    people: '[Person]',
    planets: '[Planet]',
    species: '[Species]',
    vessels: '[Vessel]'
  },
  species: {
    _id: 'ID!',
    name: 'String!',
    classification: 'String',
    average_height: 'String',
    average_lifespan: 'String',
    hair_colors: 'String',
    skin_colors: 'String',
    eye_colors: 'String',
    language: 'String',
    planets: '[Planet]',
    films: '[Film]'
  },
  vessels: {
    _id: 'ID!',
    name: 'String!',
    manufacturer: 'String',
    model: 'String',
    vessel_type: 'String!',
    vessel_class: 'String!',
    cost_in_credits: 'ID',
    length: 'String',
    max_atmosphering_speed: 'String',
    crew: 'Int',
    passengers: 'Int',
    cargo_capacity: 'String',
    consumables: 'String',
    people: '[Person]',
    films: '[Film]'
  },
  people: {
    _id: 'ID!',
    name: 'String!',
    mass: 'String',
    hair_color: 'String',
    skin_color: 'String',
    eye_color: 'String',
    birth_year: 'String',
    gender: 'String',
    species: '[Species]',
    planets: '[Planet]',
    height: 'Int',
    films: '[Film]',
    vessels: '[Vessel]'
  },
  starship_specs: {
    _id: 'ID!',
    hyperdrive_rating: 'String',
    MGLT: 'String',
    vessels: '[Vessel]'
  }
}