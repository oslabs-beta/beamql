//const { singular } = require('pluralize');

const data = {
  allTables: {
    planets: [
      {
        table_name: "planets",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('planets__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "planets",
        column_name: "name",
        ordinal_position: 2,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "planets",
        column_name: "rotation_period",
        ordinal_position: 3,
        column_default: null,
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "planets",
        column_name: "orbital_period",
        ordinal_position: 4,
        column_default: null,
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "planets",
        column_name: "diameter",
        ordinal_position: 5,
        column_default: null,
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "planets",
        column_name: "climate",
        ordinal_position: 6,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "planets",
        column_name: "gravity",
        ordinal_position: 7,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "planets",
        column_name: "terrain",
        ordinal_position: 8,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "planets",
        column_name: "surface_water",
        ordinal_position: 9,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "planets",
        column_name: "population",
        ordinal_position: 10,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
    pilots: [
      {
        table_name: "pilots",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('pilots__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "pilots",
        column_name: "person_id",
        ordinal_position: 2,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "pilots",
        column_name: "vessel_id",
        ordinal_position: 3,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
    people_in_films: [
      {
        table_name: "people_in_films",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('people_in_films__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "people_in_films",
        column_name: "person_id",
        ordinal_position: 2,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "people_in_films",
        column_name: "film_id",
        ordinal_position: 3,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
    films: [
      {
        table_name: "films",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('films__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "films",
        column_name: "title",
        ordinal_position: 2,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "films",
        column_name: "episode_id",
        ordinal_position: 3,
        column_default: null,
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "films",
        column_name: "opening_crawl",
        ordinal_position: 4,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "films",
        column_name: "director",
        ordinal_position: 5,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "films",
        column_name: "producer",
        ordinal_position: 6,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "films",
        column_name: "release_date",
        ordinal_position: 7,
        column_default: null,
        data_type: "date",
        udt_name: "date",
      },
    ],
    species: [
      {
        table_name: "species",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('species__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "species",
        column_name: "name",
        ordinal_position: 2,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "classification",
        ordinal_position: 3,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "average_height",
        ordinal_position: 4,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "average_lifespan",
        ordinal_position: 5,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "hair_colors",
        ordinal_position: 6,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "skin_colors",
        ordinal_position: 7,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "eye_colors",
        ordinal_position: 8,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "language",
        ordinal_position: 9,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "species",
        column_name: "homeworld_id",
        ordinal_position: 10,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
    species_in_films: [
      {
        table_name: "species_in_films",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('species_in_films__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "species_in_films",
        column_name: "film_id",
        ordinal_position: 2,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "species_in_films",
        column_name: "species_id",
        ordinal_position: 3,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
    vessels: [
      {
        table_name: "vessels",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('vessels__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "vessels",
        column_name: "name",
        ordinal_position: 2,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "manufacturer",
        ordinal_position: 3,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "model",
        ordinal_position: 4,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "vessel_type",
        ordinal_position: 5,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "vessel_class",
        ordinal_position: 6,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "cost_in_credits",
        ordinal_position: 7,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "vessels",
        column_name: "length",
        ordinal_position: 8,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "max_atmosphering_speed",
        ordinal_position: 9,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "crew",
        ordinal_position: 10,
        column_default: null,
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "vessels",
        column_name: "passengers",
        ordinal_position: 11,
        column_default: null,
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "vessels",
        column_name: "cargo_capacity",
        ordinal_position: 12,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "vessels",
        column_name: "consumables",
        ordinal_position: 13,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
    ],
    vessels_in_films: [
      {
        table_name: "vessels_in_films",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('vessels_in_films__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "vessels_in_films",
        column_name: "vessel_id",
        ordinal_position: 2,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "vessels_in_films",
        column_name: "film_id",
        ordinal_position: 3,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
    people: [
      {
        table_name: "people",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('people__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "people",
        column_name: "name",
        ordinal_position: 2,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "people",
        column_name: "mass",
        ordinal_position: 3,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "people",
        column_name: "hair_color",
        ordinal_position: 4,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "people",
        column_name: "skin_color",
        ordinal_position: 5,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "people",
        column_name: "eye_color",
        ordinal_position: 6,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "people",
        column_name: "birth_year",
        ordinal_position: 7,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "people",
        column_name: "gender",
        ordinal_position: 8,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "people",
        column_name: "species_id",
        ordinal_position: 9,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "people",
        column_name: "homeworld_id",
        ordinal_position: 10,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "people",
        column_name: "height",
        ordinal_position: 11,
        column_default: null,
        data_type: "integer",
        udt_name: "int4",
      },
    ],
    planets_in_films: [
      {
        table_name: "planets_in_films",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('planets_in_films__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "planets_in_films",
        column_name: "film_id",
        ordinal_position: 2,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
      {
        table_name: "planets_in_films",
        column_name: "planet_id",
        ordinal_position: 3,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
    starship_specs: [
      {
        table_name: "starship_specs",
        column_name: "_id",
        ordinal_position: 1,
        column_default: "nextval('starship_specs__id_seq'::regclass)",
        data_type: "integer",
        udt_name: "int4",
      },
      {
        table_name: "starship_specs",
        column_name: "hyperdrive_rating",
        ordinal_position: 2,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "starship_specs",
        column_name: "MGLT",
        ordinal_position: 3,
        column_default: null,
        data_type: "character varying",
        udt_name: "varchar",
      },
      {
        table_name: "starship_specs",
        column_name: "vessel_id",
        ordinal_position: 4,
        column_default: null,
        data_type: "bigint",
        udt_name: "int8",
      },
    ],
  },
  foreignKeys: [
    {
      foreign_table: "people",
      rel: ">-",
      primary_table: "planets",
      fk_columns: "homeworld_id",
      constraint_name: "people_fk1",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "people",
      rel: ">-",
      primary_table: "species",
      fk_columns: "species_id",
      constraint_name: "people_fk0",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "people_in_films",
      rel: ">-",
      primary_table: "films",
      fk_columns: "film_id",
      constraint_name: "people_in_films_fk1",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "people_in_films",
      rel: ">-",
      primary_table: "people",
      fk_columns: "person_id",
      constraint_name: "people_in_films_fk0",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "pilots",
      rel: ">-",
      primary_table: "people",
      fk_columns: "person_id",
      constraint_name: "pilots_fk0",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "pilots",
      rel: ">-",
      primary_table: "vessels",
      fk_columns: "vessel_id",
      constraint_name: "pilots_fk1",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "planets_in_films",
      rel: ">-",
      primary_table: "films",
      fk_columns: "film_id",
      constraint_name: "planets_in_films_fk0",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "planets_in_films",
      rel: ">-",
      primary_table: "planets",
      fk_columns: "planet_id",
      constraint_name: "planets_in_films_fk1",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "species",
      rel: ">-",
      primary_table: "planets",
      fk_columns: "homeworld_id",
      constraint_name: "species_fk0",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "species_in_films",
      rel: ">-",
      primary_table: "films",
      fk_columns: "film_id",
      constraint_name: "species_in_films_fk0",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "species_in_films",
      rel: ">-",
      primary_table: "species",
      fk_columns: "species_id",
      constraint_name: "species_in_films_fk1",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "starship_specs",
      rel: ">-",
      primary_table: "vessels",
      fk_columns: "vessel_id",
      constraint_name: "starship_specs_fk0",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "vessels_in_films",
      rel: ">-",
      primary_table: "films",
      fk_columns: "film_id",
      constraint_name: "vessels_in_films_fk1",
      constraint_type: "FOREIGN KEY",
    },
    {
      foreign_table: "vessels_in_films",
      rel: ">-",
      primary_table: "vessels",
      fk_columns: "vessel_id",
      constraint_name: "vessels_in_films_fk0",
      constraint_type: "FOREIGN KEY",
    },
  ],
  primaryKeys: [
    {
      table_name: "films",
      constraint_name: "films_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "people",
      constraint_name: "people_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "people_in_films",
      constraint_name: "people_in_films_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "pilots",
      constraint_name: "pilots_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "planets",
      constraint_name: "planets_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "planets_in_films",
      constraint_name: "planets_in_films_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "species",
      constraint_name: "species_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "species_in_films",
      constraint_name: "species_in_films_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "starship_specs",
      constraint_name: "starship_specs_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "vessels",
      constraint_name: "vessels_pk",
      primary_key_columns: "_id",
    },
    {
      table_name: "vessels_in_films",
      constraint_name: "vessels_in_films_pk",
      primary_key_columns: "_id",
    },
  ],
};

//get table names
//get column names for each table
//get data type for each column

//Nested array of Objects with first element as table name and second el is an obj of column name and data type
const typeData = () => {
  const types = [];
  for (const [key, value] of Object.entries(data.allTables)) {
    const tempArr = [key, {}];
    value.forEach((val) => {
      tempArr[1][val.column_name] = val.data_type;
    });
    types.push(tempArr);
  }
  //value is an array of objs
  return types;
};
//console.log(typeData());

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

console.log(foreignKeyData());

//logic to determine join tables -> solely has foreign keys as values
//wont' use join tables as types and input foreign keys as columns on corresponding type object

//add fk vals to  

//add to Type

// Foreign Keys of Each Table
const fkt = [['people', { homeworld_id: 'planets', species_id: 'species' }],
['people_in_films', { film_id: 'films', person_id: 'people' }],
['pilots', { person_id: 'people', vessel_id: 'vessels' }],
['planets_in_films',
  { film_id: 'films', planet_id: 'planets' }],
['species', { homeworld_id: 'planets' }],
['species_in_films',
  { film_id: 'films', species_id: 'species' }],
['starship_specs', { vessel_id: 'vessels' }],
['vessels_in_films',
  { film_id: 'films', vessel_id: 'vessels' }]];

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
  MGLT: 'character varying'
}]
]

//convert tupils into objs
const fktAsObj = Object.fromEntries(fkt);

const atdAsObj = Object.fromEntries(atd);
console.log(`atd as Obj`, atdAsObj);
// numberofkeysObj 
const numForeignKeys = {} // stores foreign key count from foreign key table (arr of arr)
const countForeignKeys = (foreignKeys) => {
  foreignKeys.forEach(purpleArray => { //purple arr for each table
    const count = Object.keys(purpleArray[1]).length; //counts foreign keys
    numForeignKeys[purpleArray[0]] = count;
  })
}
countForeignKeys(fkt)
// console.log(`foreign key obj`, numForeignKeys)
//number of total keys // tableObjectForNumKeys {planets: 17}
const numTotalKeys = {} // stores num keys for each table from all table data
const countTotalKeys = (allTables) => {
  allTables.forEach(table => { //table is an array
    const count = Object.keys(table[1]).length
    numTotalKeys[table[0]] = count
  })
}

countTotalKeys(atd);
// console.log(`total keys obj`, numTotalKeys);

const nonJoinTables = []
const joinTables = []

// numForeignKeys, numTotalKeys, fkt, atd
const isJoinTable = (fKeyCount, pKeyCount, foreignKeyTable, allTableData) => { //filling non & joinTables
  for(const key in fKeyCount) {
    if(fKeyCount[key] + 1 >= pKeyCount[key]) { // loop through fkey table & find if key is in pKey table AND # corresponds to # in pKey => IS A JOIN TABLE

    } else {

    }
  }
}
isJoinTable(numForeignKeys, numTotalKeys, fkt, atd)
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
