import React from 'react';
import ReactFlow, { Handle, Background, Controls } from 'react-flow-renderer';
import CustomNode from './CustomNode.jsx';

// const data = {
//     "allTables": {
//         "planets": [
//             {
//                 "table_name": "planets",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('planets__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "name",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "rotation_period",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "orbital_period",
//                 "ordinal_position": 4,
//                 "column_default": null,
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "diameter",
//                 "ordinal_position": 5,
//                 "column_default": null,
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "climate",
//                 "ordinal_position": 6,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "gravity",
//                 "ordinal_position": 7,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "terrain",
//                 "ordinal_position": 8,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "surface_water",
//                 "ordinal_position": 9,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "planets",
//                 "column_name": "population",
//                 "ordinal_position": 10,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ],
//         "pilots": [
//             {
//                 "table_name": "pilots",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('pilots__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "pilots",
//                 "column_name": "person_id",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "pilots",
//                 "column_name": "vessel_id",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ],
//         "people_in_films": [
//             {
//                 "table_name": "people_in_films",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('people_in_films__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "people_in_films",
//                 "column_name": "person_id",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "people_in_films",
//                 "column_name": "film_id",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ],
//         "films": [
//             {
//                 "table_name": "films",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('films__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "films",
//                 "column_name": "title",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "films",
//                 "column_name": "episode_id",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "films",
//                 "column_name": "opening_crawl",
//                 "ordinal_position": 4,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "films",
//                 "column_name": "director",
//                 "ordinal_position": 5,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "films",
//                 "column_name": "producer",
//                 "ordinal_position": 6,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "films",
//                 "column_name": "release_date",
//                 "ordinal_position": 7,
//                 "column_default": null,
//                 "data_type": "date",
//                 "udt_name": "date"
//             }
//         ],
//         "species": [
//             {
//                 "table_name": "species",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('species__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "name",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "classification",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "average_height",
//                 "ordinal_position": 4,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "average_lifespan",
//                 "ordinal_position": 5,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "hair_colors",
//                 "ordinal_position": 6,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "skin_colors",
//                 "ordinal_position": 7,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "eye_colors",
//                 "ordinal_position": 8,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "language",
//                 "ordinal_position": 9,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "species",
//                 "column_name": "homeworld_id",
//                 "ordinal_position": 10,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ],
//         "species_in_films": [
//             {
//                 "table_name": "species_in_films",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('species_in_films__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "species_in_films",
//                 "column_name": "film_id",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "species_in_films",
//                 "column_name": "species_id",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ],
//         "vessels": [
//             {
//                 "table_name": "vessels",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('vessels__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "name",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "manufacturer",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "model",
//                 "ordinal_position": 4,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "vessel_type",
//                 "ordinal_position": 5,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "vessel_class",
//                 "ordinal_position": 6,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "cost_in_credits",
//                 "ordinal_position": 7,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "length",
//                 "ordinal_position": 8,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "max_atmosphering_speed",
//                 "ordinal_position": 9,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "crew",
//                 "ordinal_position": 10,
//                 "column_default": null,
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "passengers",
//                 "ordinal_position": 11,
//                 "column_default": null,
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "cargo_capacity",
//                 "ordinal_position": 12,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "vessels",
//                 "column_name": "consumables",
//                 "ordinal_position": 13,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             }
//         ],
//         "vessels_in_films": [
//             {
//                 "table_name": "vessels_in_films",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('vessels_in_films__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "vessels_in_films",
//                 "column_name": "vessel_id",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "vessels_in_films",
//                 "column_name": "film_id",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ],
//         "people": [
//             {
//                 "table_name": "people",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('people__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "name",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "mass",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "hair_color",
//                 "ordinal_position": 4,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "skin_color",
//                 "ordinal_position": 5,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "eye_color",
//                 "ordinal_position": 6,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "birth_year",
//                 "ordinal_position": 7,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "gender",
//                 "ordinal_position": 8,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "species_id",
//                 "ordinal_position": 9,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "homeworld_id",
//                 "ordinal_position": 10,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "people",
//                 "column_name": "height",
//                 "ordinal_position": 11,
//                 "column_default": null,
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             }
//         ],
//         "planets_in_films": [
//             {
//                 "table_name": "planets_in_films",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('planets_in_films__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "planets_in_films",
//                 "column_name": "film_id",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             },
//             {
//                 "table_name": "planets_in_films",
//                 "column_name": "planet_id",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ],
//         "starship_specs": [
//             {
//                 "table_name": "starship_specs",
//                 "column_name": "_id",
//                 "ordinal_position": 1,
//                 "column_default": "nextval('starship_specs__id_seq'::regclass)",
//                 "data_type": "integer",
//                 "udt_name": "int4"
//             },
//             {
//                 "table_name": "starship_specs",
//                 "column_name": "hyperdrive_rating",
//                 "ordinal_position": 2,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "starship_specs",
//                 "column_name": "MGLT",
//                 "ordinal_position": 3,
//                 "column_default": null,
//                 "data_type": "character varying",
//                 "udt_name": "varchar"
//             },
//             {
//                 "table_name": "starship_specs",
//                 "column_name": "vessel_id",
//                 "ordinal_position": 4,
//                 "column_default": null,
//                 "data_type": "bigint",
//                 "udt_name": "int8"
//             }
//         ]
//     },
    
//     "foreignKeys": [
//         {
//             "foreign_table": "people",
//             "rel": ">-",
//             "primary_table": "planets",
//             "fk_columns": "homeworld_id",
//             "constraint_name": "people_fk1",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "people",
//             "rel": ">-",
//             "primary_table": "species",
//             "fk_columns": "species_id",
//             "constraint_name": "people_fk0",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "people_in_films",
//             "rel": ">-",
//             "primary_table": "films",
//             "fk_columns": "film_id",
//             "constraint_name": "people_in_films_fk1",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "people_in_films",
//             "rel": ">-",
//             "primary_table": "people",
//             "fk_columns": "person_id",
//             "constraint_name": "people_in_films_fk0",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "pilots",
//             "rel": ">-",
//             "primary_table": "people",
//             "fk_columns": "person_id",
//             "constraint_name": "pilots_fk0",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "pilots",
//             "rel": ">-",
//             "primary_table": "vessels",
//             "fk_columns": "vessel_id",
//             "constraint_name": "pilots_fk1",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "planets_in_films",
//             "rel": ">-",
//             "primary_table": "films",
//             "fk_columns": "film_id",
//             "constraint_name": "planets_in_films_fk0",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "planets_in_films",
//             "rel": ">-",
//             "primary_table": "planets",
//             "fk_columns": "planet_id",
//             "constraint_name": "planets_in_films_fk1",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "species",
//             "rel": ">-",
//             "primary_table": "planets",
//             "fk_columns": "homeworld_id",
//             "constraint_name": "species_fk0",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "species_in_films",
//             "rel": ">-",
//             "primary_table": "films",
//             "fk_columns": "film_id",
//             "constraint_name": "species_in_films_fk0",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "species_in_films",
//             "rel": ">-",
//             "primary_table": "species",
//             "fk_columns": "species_id",
//             "constraint_name": "species_in_films_fk1",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "starship_specs",
//             "rel": ">-",
//             "primary_table": "vessels",
//             "fk_columns": "vessel_id",
//             "constraint_name": "starship_specs_fk0",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "vessels_in_films",
//             "rel": ">-",
//             "primary_table": "films",
//             "fk_columns": "film_id",
//             "constraint_name": "vessels_in_films_fk1",
//             "constraint_type": "FOREIGN KEY"
//         },
//         {
//             "foreign_table": "vessels_in_films",
//             "rel": ">-",
//             "primary_table": "vessels",
//             "fk_columns": "vessel_id",
//             "constraint_name": "vessels_in_films_fk0",
//             "constraint_type": "FOREIGN KEY"
//         }
//     ],
//     "primaryKeys": [
//         {
//             "table_name": "films",
//             "constraint_name": "films_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "people",
//             "constraint_name": "people_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "people_in_films",
//             "constraint_name": "people_in_films_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "pilots",
//             "constraint_name": "pilots_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "planets",
//             "constraint_name": "planets_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "planets_in_films",
//             "constraint_name": "planets_in_films_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "species",
//             "constraint_name": "species_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "species_in_films",
//             "constraint_name": "species_in_films_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "starship_specs",
//             "constraint_name": "starship_specs_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "vessels",
//             "constraint_name": "vessels_pk",
//             "primary_key_columns": "_id"
//         },
//         {
//             "table_name": "vessels_in_films",
//             "constraint_name": "vessels_in_films_pk",
//             "primary_key_columns": "_id"
//         }
//     ]
// }
// const coords = [[30, 20], [280, 20], [530, 20], [780, 20], [1030, 20], [30, 320], [280, 320], [530, 320], [780, 320], [1030, 320], [30, 620], [280, 620], [530, 620], [780, 620], [1030, 620], [30, 920], [280, 920], [530, 920], [780, 920], [1030, 920], [30, 1220], [280, 1220], [530, 1220], [780, 1220], [1030, 1220]];
// let elements = [];
// let i =0;
// for (let [key, val] of Object.entries(data.allTables)) {
//     //create a new node for the key
    
//     let newNode = {
//         id: `${elements.length}`,
//         type: 'special',
//         position: { x: coords[i][0], y: coords[i][1] },
//         data: { key: key, columns: [], fks: [], pk: false }
//     }
//     i++;
//     val.forEach(el => {
//         for (let j = 0; j < data.foreignKeys.length; j++) {
//             let fkObj = data.foreignKeys[j];
//             if ( fkObj.fk_columns === el.column_name && fkObj.foreign_table === key ) {
//                 newNode.data.fks.push({...fkObj, pos: el.ordinal_position})
//             }
//         }
    
//         newNode.data.columns.push(el.column_name);
//     })

//     elements.push(newNode);
// }
// let edgesEls = [];
// //loop through data foreign keys (fkObject)
// for (let i = 0; i < data.foreignKeys.length; i++) {
//     //getting source id and target id
//     let sourceId = false;
//     let targetId = false;
//     let sourceColId;
//         //while loop through elements and if el.data.key === fkObject.foreign_table,
//     elements.forEach(el => {
        
//         if(el.data.key === data.foreignKeys[i].foreign_table){
            
//             sourceId = el.id;
//           for(let j = 0; j < el.data.fks.length; j++){
//                 if(el.data.fks[j].fk_columns === data.foreignKeys[i].fk_columns){
//                     sourceColId = el.data.fks[j].pos;
//                 }
//           }
//         }
//         if(el.data.key === data.foreignKeys[i].primary_table){
//             el.data.pk = true;
//             targetId = el.id;
//         }
//     })
//         //get targethandle
//         //    loop through 
//         //append new edge obj to elements
//     const newEdge =  {
//         id: `e${i}`,
//         source: sourceId,
//         target: targetId,
//         sourceHandle: `${sourceColId}`,
//         arrowHeadType: 'arrow',
//         style: { stroke: 'gray', transparency: '0.9' },
//         animated: false,
//     }
//     edgesEls.push(newEdge)
// }
// // console.log('nodes', elements);
// // console.log('edges', edgesEls);
// // elements.concat(edgesEls);
// elements = [...elements, ...edgesEls];
// console.log('all els', elements);
const customNodeStyles = {
  background: 'lightgray',
  color: 'rgba(0, 0, 0, 0.75)',
  padding: '10px',
  borderRadius: '4px'
};

const CustomNodeComponent = ({ data }) => {


    let count = 0;
    let keyNum = 0;
  return (
    <div style={customNodeStyles}>
      
      <div className="node-key">{data.key}</div>
      <hr/>
      {data.pk ? <Handle type="target" position="left" key={keyNum++} style={{ top: '56px', borderRadius: 5 }} /> : "" }
      {data.columns.map(el => <div key={keyNum++}>{el}</div>)}
      <div>
      {data.fks.map(el=> <Handle type="source" position="right" key={`${keyNum++}`} id={`${el.pos}`} style={{ top: `${56+(el.pos-1)*23}px`, borderRadius: 5 }} />)}
      </div>
    </div>
  );
};

const nodeTypes = {
  special: CustomNodeComponent,
};

const Diagram = ({ data }) => {
        //     const data = {
    //     "allTables": {
    //         "planets": [
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('planets__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "name",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "rotation_period",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "orbital_period",
    //                 "ordinal_position": 4,
    //                 "column_default": null,
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "diameter",
    //                 "ordinal_position": 5,
    //                 "column_default": null,
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "climate",
    //                 "ordinal_position": 6,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "gravity",
    //                 "ordinal_position": 7,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "terrain",
    //                 "ordinal_position": 8,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "surface_water",
    //                 "ordinal_position": 9,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "planets",
    //                 "column_name": "population",
    //                 "ordinal_position": 10,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ],
    //         "pilots": [
    //             {
    //                 "table_name": "pilots",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('pilots__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "pilots",
    //                 "column_name": "person_id",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "pilots",
    //                 "column_name": "vessel_id",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ],
    //         "people_in_films": [
    //             {
    //                 "table_name": "people_in_films",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('people_in_films__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "people_in_films",
    //                 "column_name": "person_id",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "people_in_films",
    //                 "column_name": "film_id",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ],
    //         "films": [
    //             {
    //                 "table_name": "films",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('films__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "films",
    //                 "column_name": "title",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "films",
    //                 "column_name": "episode_id",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "films",
    //                 "column_name": "opening_crawl",
    //                 "ordinal_position": 4,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "films",
    //                 "column_name": "director",
    //                 "ordinal_position": 5,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "films",
    //                 "column_name": "producer",
    //                 "ordinal_position": 6,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "films",
    //                 "column_name": "release_date",
    //                 "ordinal_position": 7,
    //                 "column_default": null,
    //                 "data_type": "date",
    //                 "udt_name": "date"
    //             }
    //         ],
    //         "species": [
    //             {
    //                 "table_name": "species",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('species__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "name",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "classification",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "average_height",
    //                 "ordinal_position": 4,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "average_lifespan",
    //                 "ordinal_position": 5,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "hair_colors",
    //                 "ordinal_position": 6,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "skin_colors",
    //                 "ordinal_position": 7,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "eye_colors",
    //                 "ordinal_position": 8,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "language",
    //                 "ordinal_position": 9,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "species",
    //                 "column_name": "homeworld_id",
    //                 "ordinal_position": 10,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ],
    //         "species_in_films": [
    //             {
    //                 "table_name": "species_in_films",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('species_in_films__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "species_in_films",
    //                 "column_name": "film_id",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "species_in_films",
    //                 "column_name": "species_id",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ],
    //         "vessels": [
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('vessels__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "name",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "manufacturer",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "model",
    //                 "ordinal_position": 4,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "vessel_type",
    //                 "ordinal_position": 5,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "vessel_class",
    //                 "ordinal_position": 6,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "cost_in_credits",
    //                 "ordinal_position": 7,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "length",
    //                 "ordinal_position": 8,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "max_atmosphering_speed",
    //                 "ordinal_position": 9,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "crew",
    //                 "ordinal_position": 10,
    //                 "column_default": null,
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "passengers",
    //                 "ordinal_position": 11,
    //                 "column_default": null,
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "cargo_capacity",
    //                 "ordinal_position": 12,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "vessels",
    //                 "column_name": "consumables",
    //                 "ordinal_position": 13,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             }
    //         ],
    //         "vessels_in_films": [
    //             {
    //                 "table_name": "vessels_in_films",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('vessels_in_films__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "vessels_in_films",
    //                 "column_name": "vessel_id",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "vessels_in_films",
    //                 "column_name": "film_id",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ],
    //         "people": [
    //             {
    //                 "table_name": "people",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('people__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "name",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "mass",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "hair_color",
    //                 "ordinal_position": 4,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "skin_color",
    //                 "ordinal_position": 5,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "eye_color",
    //                 "ordinal_position": 6,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "birth_year",
    //                 "ordinal_position": 7,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "gender",
    //                 "ordinal_position": 8,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "species_id",
    //                 "ordinal_position": 9,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "homeworld_id",
    //                 "ordinal_position": 10,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "people",
    //                 "column_name": "height",
    //                 "ordinal_position": 11,
    //                 "column_default": null,
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             }
    //         ],
    //         "planets_in_films": [
    //             {
    //                 "table_name": "planets_in_films",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('planets_in_films__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "planets_in_films",
    //                 "column_name": "film_id",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             },
    //             {
    //                 "table_name": "planets_in_films",
    //                 "column_name": "planet_id",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ],
    //         "starship_specs": [
    //             {
    //                 "table_name": "starship_specs",
    //                 "column_name": "_id",
    //                 "ordinal_position": 1,
    //                 "column_default": "nextval('starship_specs__id_seq'::regclass)",
    //                 "data_type": "integer",
    //                 "udt_name": "int4"
    //             },
    //             {
    //                 "table_name": "starship_specs",
    //                 "column_name": "hyperdrive_rating",
    //                 "ordinal_position": 2,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "starship_specs",
    //                 "column_name": "MGLT",
    //                 "ordinal_position": 3,
    //                 "column_default": null,
    //                 "data_type": "character varying",
    //                 "udt_name": "varchar"
    //             },
    //             {
    //                 "table_name": "starship_specs",
    //                 "column_name": "vessel_id",
    //                 "ordinal_position": 4,
    //                 "column_default": null,
    //                 "data_type": "bigint",
    //                 "udt_name": "int8"
    //             }
    //         ]
    //     },
        
    //     "foreignKeys": [
    //         {
    //             "foreign_table": "people",
    //             "rel": ">-",
    //             "primary_table": "planets",
    //             "fk_columns": "homeworld_id",
    //             "constraint_name": "people_fk1",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "people",
    //             "rel": ">-",
    //             "primary_table": "species",
    //             "fk_columns": "species_id",
    //             "constraint_name": "people_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "people_in_films",
    //             "rel": ">-",
    //             "primary_table": "films",
    //             "fk_columns": "film_id",
    //             "constraint_name": "people_in_films_fk1",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "people_in_films",
    //             "rel": ">-",
    //             "primary_table": "people",
    //             "fk_columns": "person_id",
    //             "constraint_name": "people_in_films_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "pilots",
    //             "rel": ">-",
    //             "primary_table": "people",
    //             "fk_columns": "person_id",
    //             "constraint_name": "pilots_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "pilots",
    //             "rel": ">-",
    //             "primary_table": "vessels",
    //             "fk_columns": "vessel_id",
    //             "constraint_name": "pilots_fk1",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "planets_in_films",
    //             "rel": ">-",
    //             "primary_table": "films",
    //             "fk_columns": "film_id",
    //             "constraint_name": "planets_in_films_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "planets_in_films",
    //             "rel": ">-",
    //             "primary_table": "planets",
    //             "fk_columns": "planet_id",
    //             "constraint_name": "planets_in_films_fk1",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "species",
    //             "rel": ">-",
    //             "primary_table": "planets",
    //             "fk_columns": "homeworld_id",
    //             "constraint_name": "species_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "species_in_films",
    //             "rel": ">-",
    //             "primary_table": "films",
    //             "fk_columns": "film_id",
    //             "constraint_name": "species_in_films_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "species_in_films",
    //             "rel": ">-",
    //             "primary_table": "species",
    //             "fk_columns": "species_id",
    //             "constraint_name": "species_in_films_fk1",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "starship_specs",
    //             "rel": ">-",
    //             "primary_table": "vessels",
    //             "fk_columns": "vessel_id",
    //             "constraint_name": "starship_specs_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "vessels_in_films",
    //             "rel": ">-",
    //             "primary_table": "films",
    //             "fk_columns": "film_id",
    //             "constraint_name": "vessels_in_films_fk1",
    //             "constraint_type": "FOREIGN KEY"
    //         },
    //         {
    //             "foreign_table": "vessels_in_films",
    //             "rel": ">-",
    //             "primary_table": "vessels",
    //             "fk_columns": "vessel_id",
    //             "constraint_name": "vessels_in_films_fk0",
    //             "constraint_type": "FOREIGN KEY"
    //         }
    //     ],
    //     "primaryKeys": [
    //         {
    //             "table_name": "films",
    //             "constraint_name": "films_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "people",
    //             "constraint_name": "people_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "people_in_films",
    //             "constraint_name": "people_in_films_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "pilots",
    //             "constraint_name": "pilots_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "planets",
    //             "constraint_name": "planets_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "planets_in_films",
    //             "constraint_name": "planets_in_films_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "species",
    //             "constraint_name": "species_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "species_in_films",
    //             "constraint_name": "species_in_films_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "starship_specs",
    //             "constraint_name": "starship_specs_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "vessels",
    //             "constraint_name": "vessels_pk",
    //             "primary_key_columns": "_id"
    //         },
    //         {
    //             "table_name": "vessels_in_films",
    //             "constraint_name": "vessels_in_films_pk",
    //             "primary_key_columns": "_id"
    //         }
    //     ]
    // }

    const coords = [[30, 20], [280, 20], [530, 20], [780, 20], [1030, 20], [30, 320], [280, 320], [530, 320], [780, 320], [1030, 320], [30, 620], [280, 620], [530, 620], [780, 620], [1030, 620], [30, 920], [280, 920], [530, 920], [780, 920], [1030, 920], [30, 1220], [280, 1220], [530, 1220], [780, 1220], [1030, 1220]];
    let elements = [];
    let i =0;
    for (let [key, val] of Object.entries(data.allTables)) {
        //create a new node for the key
        
        let newNode = {
            id: `${elements.length}`,
            type: 'special',
            position: { x: coords[i][0], y: coords[i][1] },
            data: { key: key, columns: [], fks: [], pk: false }
        }
        i++;
        val.forEach(el => {
            for (let j = 0; j < data.foreignKeys.length; j++) {
                let fkObj = data.foreignKeys[j];
                if ( fkObj.fk_columns === el.column_name && fkObj.foreign_table === key ) {
                    newNode.data.fks.push({...fkObj, pos: el.ordinal_position})
                }
            }
        
            newNode.data.columns.push(el.column_name);
        })

        elements.push(newNode);
    }
    let edgesEls = [];
    //loop through data foreign keys (fkObject)
    for (let i = 0; i < data.foreignKeys.length; i++) {
        //getting source id and target id
        let sourceId = false;
        let targetId = false;
        let sourceColId;
            //while loop through elements and if el.data.key === fkObject.foreign_table,
        elements.forEach(el => {
            
            if(el.data.key === data.foreignKeys[i].foreign_table){
                
                sourceId = el.id;
            for(let j = 0; j < el.data.fks.length; j++){
                    if(el.data.fks[j].fk_columns === data.foreignKeys[i].fk_columns){
                        sourceColId = el.data.fks[j].pos;
                    }
            }
            }
            if(el.data.key === data.foreignKeys[i].primary_table){
                el.data.pk = true;
                targetId = el.id;
            }
        })
            //get targethandle
            //    loop through 
            //append new edge obj to elements
        const newEdge =  {
            id: `e${i}`,
            source: sourceId,
            target: targetId,
            sourceHandle: `${sourceColId}`,
            arrowHeadType: 'arrow',
            style: { stroke: 'gray', transparency: '0.9' },
            animated: false,
        }
        edgesEls.push(newEdge)
    }
    // console.log('nodes', elements);
    // console.log('edges', edgesEls);
    // elements.concat(edgesEls);
    elements = [...elements, ...edgesEls];

  return (
    //   <div id="renderContainer" style={{ position: 'absolute', right: 0 }}>
    <div style={{ height: '75vh', border: '0.1em solid #FFFFFF', borderRadius: '5px', width: '70%'}}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes}>
      <Background id="erdbackground"
      variant="dots"
    />
    <Controls style={{ position: 'absolute', left: '67vw' }} />
    </ReactFlow>
    </div>
    // </div>
  );
};

export default Diagram;
