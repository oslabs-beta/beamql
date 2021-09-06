import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const text = `type Query {
  userData: [UserDatum!]!
  userDatum(id: ID!): UserDatum!
  tasks: [Task!]!
  task(id: ID!): Task!
  users: [User!]!
  user(user_id: ID!): User!
}

type Mutation {
  addUserDatum(
    mental_score: Int!,
    weight: Int!,
    net_worth: Int!,
    major_life_event: String,
    future: Boolean,
    user_id: String!,
    record_date: String!,
    body_fat: Int!,
    full_name: String!,
  ): UserDatum!

  updateUserDatum(
    mental_score: Int,
    weight: Int,
    net_worth: Int,
    major_life_event: String,
    future: Boolean,
    id: ID!,
    user_id: String,
    record_date: String,
    body_fat: Int,
    full_name: String,
  ): UserDatum!

  deleteUserDatum(id: ID!): UserDatum!

  addTask(
    created_at: String!,
    item: String!,
  ): Task!

  updateTask(
    created_at: String,
    id: ID!,
    item: String,
  ): Task!

  deleteTask(id: ID!): Task!

  addUser(
    first_name: String!,
    token: String!,
    last_name: String!,
  ): User!

  updateUser(
    first_name: String,
    user_id: ID!,
    token: String,
    last_name: String,
  ): User!

  deleteUser(user_id: ID!): User!
}

type UserDatum {
id: ID!
mental_score: Int!
weight: Int!
net_worth: Int!
major_life_event: String
future: Boolean
user_id: String!
record_date: String!
body_fat: Int!
full_name: String!
}

type Task {
id: ID!
created_at: String!
item: String!
}

type User {
user_id: ID!
first_name: String!
token: String!
last_name: String!
}

`;

const text2 =`type Query {
  people: [Person!]!
  person(_id: ID!): Person!
  films: [Film!]!
  film(_id: ID!): Film!
  planets: [Planet!]!
  planet(_id: ID!): Planet!
  species: [Species!]!
  speciesById(_id: ID!): Species!
  vessels: [Vessel!]!
  vessel(_id: ID!): Vessel!
  starshipSpecs: [StarshipSpec!]!
  starshipSpec(_id: ID!): StarshipSpec!
}

type Mutation {
  addPerson(
    gender: String,
    species_id: ID,
    homeworld_id: ID,
    height: Int,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    name: String!,
    birth_year: String,
  ): Person!

  updatePerson(
    gender: String,
    species_id: ID,
    homeworld_id: ID,
    height: Int,
    _id: ID!,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    name: String,
    birth_year: String,
  ): Person!

  deletePerson(_id: ID!): Person!

  addFilm(
    director: String!,
    opening_crawl: String!,
    episode_id: Int!,
    title: String!,
    release_date: String!,
    producer: String!,
  ): Film!

  updateFilm(
    director: String,
    opening_crawl: String,
    episode_id: Int,
    _id: ID!,
    title: String,
    release_date: String,
    producer: String,
  ): Film!

  deleteFilm(_id: ID!): Film!

  addPlanet(
    orbital_period: Int,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    name: String,
    rotation_period: Int,
    diameter: Int,
  ): Planet!

  updatePlanet(
    orbital_period: Int,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    _id: ID!,
    name: String,
    rotation_period: Int,
    diameter: Int,
  ): Planet!

  deletePlanet(_id: ID!): Planet!

  addSpecies(
    hair_colors: String,
    name: String!,
    classification: String,
    average_height: String,
    average_lifespan: String,
    skin_colors: String,
    eye_colors: String,
    language: String,
    homeworld_id: ID,
  ): Species!

  updateSpecies(
    hair_colors: String,
    name: String,
    classification: String,
    average_height: String,
    average_lifespan: String,
    skin_colors: String,
    eye_colors: String,
    language: String,
    homeworld_id: ID,
    _id: ID!,
  ): Species!

  deleteSpecies(_id: ID!): Species!

  addVessel(
    cost_in_credits: String,
    length: String,
    vessel_type: String!,
    model: String,
    manufacturer: String,
    name: String!,
    vessel_class: String!,
    max_atmosphering_speed: String,
    crew: Int,
    passengers: Int,
    cargo_capacity: String,
    consumables: String,
  ): Vessel!

  updateVessel(
    cost_in_credits: String,
    length: String,
    vessel_type: String,
    model: String,
    manufacturer: String,
    name: String,
    vessel_class: String,
    max_atmosphering_speed: String,
    crew: Int,
    passengers: Int,
    cargo_capacity: String,
    consumables: String,
    _id: ID!,
  ): Vessel!

  deleteVessel(_id: ID!): Vessel!

  addStarshipSpec(
    vessel_id: ID!,
    MGLT: String,
    hyperdrive_rating: String,
  ): StarshipSpec!

  updateStarshipSpec(
    _id: ID!,
    vessel_id: ID,
    MGLT: String,
    hyperdrive_rating: String,
  ): StarshipSpec!

  deleteStarshipSpec(_id: ID!): StarshipSpec!
}

type Person {
_id: ID!
gender: String
height: Int
mass: String
hair_color: String
skin_color: String
eye_color: String
name: String!
birth_year: String
species: [Species]
planets: [Planet]
films: [Film]
vessels: [Vessel]
}

type Film {
_id: ID!
director: String!
opening_crawl: String!
episode_id: Int!
title: String!
release_date: String!
producer: String!
planets: [Planet]
people: [Person]
vessels: [Vessel]
species: [Species]
}

type Planet {
_id: ID!
orbital_period: Int
climate: String
gravity: String
terrain: String
surface_water: String
population: String
name: String
rotation_period: Int
diameter: Int
films: [Film]
species: [Species]
people: [Person]
}

type Species {
_id: ID!
hair_colors: String
name: String!
classification: String
average_height: String
average_lifespan: String
skin_colors: String
eye_colors: String
language: String
planets: [Planet]
people: [Person]
films: [Film]
}

type Vessel {
_id: ID!
cost_in_credits: String
length: String
vessel_type: String!
model: String
manufacturer: String
name: String!
vessel_class: String!
max_atmosphering_speed: String
crew: Int
passengers: Int
cargo_capacity: String
consumables: String
films: [Film]
people: [Person]
starshipSpecs: [StarshipSpec]
}

type StarshipSpec {
_id: ID!
MGLT: String
hyperdrive_rating: String
vessels: [Vessel]
}

`;

const text3 = "const resolvers = {\n  Query: {\n    planet: (parent, args) => {\n      const query = 'SELECT * FROM planets WHERE _id = $1';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    planets: () => {\n      const query = 'SELECT * FROM planets';\n      return db.query(query)\n        .then(data => data.rows)\n        .catch(err =>new Error(err));\n    },\n    film: (parent, args) => {\n      const query = 'SELECT * FROM films WHERE _id = $1';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    films: () => {\n      const query = 'SELECT * FROM films';\n      return db.query(query)\n        .then(data => data.rows)\n        .catch(err =>new Error(err));\n    },\n    speciesById: (parent, args) => {\n      const query = 'SELECT * FROM species WHERE _id = $1';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    species: () => {\n      const query = 'SELECT * FROM species';\n      return db.query(query)\n        .then(data => data.rows)\n        .catch(err =>new Error(err));\n    },\n    vessel: (parent, args) => {\n      const query = 'SELECT * FROM vessels WHERE _id = $1';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    vessels: () => {\n      const query = 'SELECT * FROM vessels';\n      return db.query(query)\n        .then(data => data.rows)\n        .catch(err =>new Error(err));\n    },\n    person: (parent, args) => {\n      const query = 'SELECT * FROM people WHERE _id = $1';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    people: () => {\n      const query = 'SELECT * FROM people';\n      return db.query(query)\n        .then(data => data.rows)\n        .catch(err =>new Error(err));\n    },\n    starshipSpec: (parent, args) => {\n      const query = 'SELECT * FROM starship_specs WHERE _id = $1';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    starshipSpecs: () => {\n      const query = 'SELECT * FROM starship_specs';\n      return db.query(query)\n        .then(data => data.rows)\n        .catch(err =>new Error(err));\n    },\n  },\n  Mutation: {\n    addPlanet: (parent, args) => {\n      const query = 'INSERT INTO planets (_id, name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';\n      const values = (args._id,args.name,args.rotation_period,args.orbital_period,args.diameter,args.climate,args.gravity,args.terrain,args.surface_water,args.population);\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    updatePlanet: (parent, args) => {\n      let valList = [];\n      for (const updateKey of Object.keys(args)) {\n        if (updateKey !== '_id') valList.push(args[updateKey]);\n      }\n      valList.push(args._id);\n      const argsArray = Object.keys(args).filter((el) => el !== '_id');\n      let setString = argsArray.map((x, i) => x + ' = $' + (i + 1)).join(', ');\n      const pKArg = '$'+ (argsArray.length + 1);\n      const query = 'UPDATE planets SET '+ setString +' WHERE _id = '+pKArg+' RETURNING *';\n      const values = valList; \n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    deletePlanet: (parent, args) => {\n      const query = 'DELETE FROM planets WHERE _id = $1 RETURNING *';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    addFilm: (parent, args) => {\n      const query = 'INSERT INTO films (_id, title, episode_id, opening_crawl, director, producer, release_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';\n      const values = (args._id,args.title,args.episode_id,args.opening_crawl,args.director,args.producer,args.release_date);\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    updateFilm: (parent, args) => {\n      let valList = [];\n      for (const updateKey of Object.keys(args)) {\n        if (updateKey !== '_id') valList.push(args[updateKey]);\n      }\n      valList.push(args._id);\n      const argsArray = Object.keys(args).filter((el) => el !== '_id');\n      let setString = argsArray.map((x, i) => x + ' = $' + (i + 1)).join(', ');\n      const pKArg = '$'+ (argsArray.length + 1);\n      const query = 'UPDATE films SET '+ setString +' WHERE _id = '+pKArg+' RETURNING *';\n      const values = valList; \n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    deleteFilm: (parent, args) => {\n      const query = 'DELETE FROM films WHERE _id = $1 RETURNING *';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    addSpecies: (parent, args) => {\n      const query = 'INSERT INTO species (_id, name, classification, average_height, average_lifespan, hair_colors, skin_colors, eye_colors, language, homeworld_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';\n      const values = (args._id,args.name,args.classification,args.average_height,args.average_lifespan,args.hair_colors,args.skin_colors,args.eye_colors,args.language,args.homeworld_id);\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    updateSpecies: (parent, args) => {\n      let valList = [];\n      for (const updateKey of Object.keys(args)) {\n        if (updateKey !== '_id') valList.push(args[updateKey]);\n      }\n      valList.push(args._id);\n      const argsArray = Object.keys(args).filter((el) => el !== '_id');\n      let setString = argsArray.map((x, i) => x + ' = $' + (i + 1)).join(', ');\n      const pKArg = '$'+ (argsArray.length + 1);\n      const query = 'UPDATE species SET '+ setString +' WHERE _id = '+pKArg+' RETURNING *';\n      const values = valList; \n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    deleteSpecies: (parent, args) => {\n      const query = 'DELETE FROM species WHERE _id = $1 RETURNING *';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    addVessel: (parent, args) => {\n      const query = 'INSERT INTO vessels (_id, name, manufacturer, model, vessel_type, vessel_class, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *';\n      const values = (args._id,args.name,args.manufacturer,args.model,args.vessel_type,args.vessel_class,args.cost_in_credits,args.length,args.max_atmosphering_speed,args.crew,args.passengers,args.cargo_capacity,args.consumables);\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    updateVessel: (parent, args) => {\n      let valList = [];\n      for (const updateKey of Object.keys(args)) {\n        if (updateKey !== '_id') valList.push(args[updateKey]);\n      }\n      valList.push(args._id);\n      const argsArray = Object.keys(args).filter((el) => el !== '_id');\n      let setString = argsArray.map((x, i) => x + ' = $' + (i + 1)).join(', ');\n      const pKArg = '$'+ (argsArray.length + 1);\n      const query = 'UPDATE vessels SET '+ setString +' WHERE _id = '+pKArg+' RETURNING *';\n      const values = valList; \n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    deleteVessel: (parent, args) => {\n      const query = 'DELETE FROM vessels WHERE _id = $1 RETURNING *';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    addPerson: (parent, args) => {\n      const query = 'INSERT INTO people (_id, name, mass, hair_color, skin_color, eye_color, birth_year, gender, species_id, homeworld_id, height) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *';\n      const values = (args._id,args.name,args.mass,args.hair_color,args.skin_color,args.eye_color,args.birth_year,args.gender,args.species_id,args.homeworld_id,args.height);\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    updatePerson: (parent, args) => {\n      let valList = [];\n      for (const updateKey of Object.keys(args)) {\n        if (updateKey !== '_id') valList.push(args[updateKey]);\n      }\n      valList.push(args._id);\n      const argsArray = Object.keys(args).filter((el) => el !== '_id');\n      let setString = argsArray.map((x, i) => x + ' = $' + (i + 1)).join(', ');\n      const pKArg = '$'+ (argsArray.length + 1);\n      const query = 'UPDATE people SET '+ setString +' WHERE _id = '+pKArg+' RETURNING *';\n      const values = valList; \n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    deletePerson: (parent, args) => {\n      const query = 'DELETE FROM people WHERE _id = $1 RETURNING *';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    addStarshipSpec: (parent, args) => {\n      const query = 'INSERT INTO starship_specs (_id, hyperdrive_rating, MGLT, vessel_id) VALUES ($1, $2, $3, $4) RETURNING *';\n      const values = (args._id,args.hyperdrive_rating,args.MGLT,args.vessel_id);\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    updateStarshipSpec: (parent, args) => {\n      let valList = [];\n      for (const updateKey of Object.keys(args)) {\n        if (updateKey !== '_id') valList.push(args[updateKey]);\n      }\n      valList.push(args._id);\n      const argsArray = Object.keys(args).filter((el) => el !== '_id');\n      let setString = argsArray.map((x, i) => x + ' = $' + (i + 1)).join(', ');\n      const pKArg = '$'+ (argsArray.length + 1);\n      const query = 'UPDATE starship_specs SET '+ setString +' WHERE _id = '+pKArg+' RETURNING *';\n      const values = valList; \n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n    deleteStarshipSpec: (parent, args) => {\n      const query = 'DELETE FROM starship_specs WHERE _id = $1 RETURNING *';\n      const values = [args._id];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },\n  },\n  Planet: {\n    people: (pTable) => {\n      const query = 'SELECT * FROM people WHERE homeworld_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    films: (pTable) => {\n      const query = 'SELECT * FROM films LEFT OUTER JOIN planets_in_films ON films._id = planets_in_films.film_id WHERE planets_in_films.film_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    species: (pTable) => {\n      const query = 'SELECT * FROM species WHERE homeworld_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n  },\n  Film: {\n    people: (pTable) => {\n      const query = 'SELECT * FROM people LEFT OUTER JOIN people_in_films ON people._id = people_in_films.person_id WHERE people_in_films.person_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    planets: (pTable) => {\n      const query = 'SELECT * FROM planets LEFT OUTER JOIN planets_in_films ON planets._id = planets_in_films.planet_id WHERE planets_in_films.planet_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    species: (pTable) => {\n      const query = 'SELECT * FROM species LEFT OUTER JOIN species_in_films ON species._id = species_in_films.species_id WHERE species_in_films.species_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    vessels: (pTable) => {\n      const query = 'SELECT * FROM vessels LEFT OUTER JOIN vessels_in_films ON vessels._id = vessels_in_films.vessel_id WHERE vessels_in_films.vessel_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n  },\n  Species: {\n    people: (pTable) => {\n      const query = 'SELECT * FROM people WHERE species_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    planets: (pTable) => {\n      const query = 'SELECT planets.* FROM planets LEFT OUTER JOIN species ON planets._id = species.homeworld_id WHERE species._id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    films: (pTable) => {\n      const query = 'SELECT * FROM films LEFT OUTER JOIN species_in_films ON films._id = species_in_films.film_id WHERE species_in_films.film_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n  },\n  Vessel: {\n    people: (pTable) => {\n      const query = 'SELECT * FROM people LEFT OUTER JOIN pilots ON people._id = pilots.person_id WHERE pilots.person_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    starshipSpecs: (pTable) => {\n      const query = 'SELECT * FROM starship_specs WHERE vessel_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    films: (pTable) => {\n      const query = 'SELECT * FROM films LEFT OUTER JOIN vessels_in_films ON films._id = vessels_in_films.film_id WHERE vessels_in_films.film_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n  },\n  Person: {\n    planets: (pTable) => {\n      const query = 'SELECT planets.* FROM planets LEFT OUTER JOIN people ON planets._id = people.homeworld_id WHERE people._id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    species: (pTable) => {\n      const query = 'SELECT species.* FROM species LEFT OUTER JOIN people ON species._id = people.species_id WHERE people._id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    films: (pTable) => {\n      const query = 'SELECT * FROM films LEFT OUTER JOIN people_in_films ON films._id = people_in_films.film_id WHERE people_in_films.film_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n    vessels: (pTable) => {\n      const query = 'SELECT * FROM vessels LEFT OUTER JOIN pilots ON vessels._id = pilots.vessel_id WHERE pilots.vessel_id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n  },\n  StarshipSpec: {\n    vessels: (pTable) => {\n      const query = 'SELECT vessels.* FROM vessels LEFT OUTER JOIN starship_specs ON vessels._id = starship_specs.vessel_id WHERE starship_specs._id = $1';\n      const values = [pTable._id];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },\n  },\n}"
// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 50,
//       padding: '30px 30px',
//     },
//   });

const styles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          border: '2px solid white',
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%',
          spellCheck: "false"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          border: '2px solid white',
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%',
          spellCheck: "false"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          border: '2px solid white',
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%',
          spellCheck: "false"
        },
    }
});

function CodeOutput () {
    const classes = styles();
    return (
  <div id="codebox">
    <TextField
          id="outlined-multiline-static"
          fullWidth={true}
          label="Output"
          multiline
          rows={Math.floor(window.innerHeight/25.75)}
          className={classes.root}
          inputProps={{className: classes.root}}
          InputLabelProps={{className: classes.root}}
          defaultValue={text3}
          variant="outlined"
        />
        </div>
      
       
    )
};

export default CodeOutput;