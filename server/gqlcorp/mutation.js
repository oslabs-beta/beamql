const { singular } = require("pluralize");
//for each type we need: add, update, delete

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function snakeToTitle(str) {
  return str.split("_").map(capitalizeFirstLetter).join("");
}

// obj mut query __
// in GQL, types can be: String, ID, Int, Float, Boolean

// SQL => GQL:

//input: GQL types
//output: GQL mutations
//addtype, updatetype, deletetype

const nonJoinTables = {
  planets: {
    _id: "integer",
    name: "character varying",
    rotation_period: "integer",
    orbital_period: "integer",
    diameter: "integer",
    climate: "character varying",
    gravity: "character varying",
    terrain: "character varying",
    surface_water: "character varying",
    population: "bigint",
  },
  films: {
    _id: "integer",
    title: "character varying",
    episode_id: "integer",
    opening_crawl: "character varying",
    director: "character varying",
    producer: "character varying",
    release_date: "date",
  },
  species: {
    _id: "integer",
    name: "character varying",
    classification: "character varying",
    average_height: "character varying",
    average_lifespan: "character varying",
    hair_colors: "character varying",
    skin_colors: "character varying",
    eye_colors: "character varying",
    language: "character varying",
    homeworld_id: "bigint",
  },
  vessels: {
    _id: "integer",
    name: "character varying",
    manufacturer: "character varying",
    model: "character varying",
    vessel_type: "character varying",
    vessel_class: "character varying",
    cost_in_credits: "bigint",
    length: "character varying",
    max_atmosphering_speed: "character varying",
    crew: "integer",
    passengers: "integer",
    cargo_capacity: "character varying",
    consumables: "character varying",
  },
  people: {
    _id: "integer",
    name: "character varying",
    mass: "character varying",
    hair_color: "character varying",
    skin_color: "character varying",
    eye_color: "character varying",
    birth_year: "character varying",
    gender: "character varying",
    species_id: "bigint",
    homeworld_id: "bigint",
    height: "integer",
  },
  starship_specs: {
    _id: "integer",
    hyperdrive_rating: "character varying",
    MGLT: "character varying",
    vessel_id: "bigint",
  },
};

const convertTypesforMutation = (object) => {
  for (const table in object) {
    for (const column in object[table]) {
      switch (object[table][column]) {
        case "bigint":
          object[table][column] = "ID";
          break;
        case "integer":
          object[table][column] = "Int";
          break;
        case "character varying":
          object[table][column] = "String";
          break;
        case "date":
          object[table][column] = "ID";
          break;
      }
      if (column === "_id") {
        object[table][column] = "ID";
      }
    }
  }
};

const nonjoinTablewithCorrectTypes = {
  planets: {
    _id: "ID",
    name: "String",
    rotation_period: "Int",
    orbital_period: "Int",
    diameter: "Int",
    climate: "String",
    gravity: "String",
    terrain: "String",
    surface_water: "String",
    population: "ID",
  },
  films: {
    _id: "ID",
    title: "String",
    episode_id: "Int",
    opening_crawl: "String",
    director: "String",
    producer: "String",
    release_date: "ID",
  },
  species: {
    _id: "ID",
    name: "String",
    classification: "String",
    average_height: "String",
    average_lifespan: "String",
    hair_colors: "String",
    skin_colors: "String",
    eye_colors: "String",
    language: "String",
    homeworld_id: "ID",
  },
  vessels: {
    _id: "ID",
    name: "String",
    manufacturer: "String",
    model: "String",
    vessel_type: "String",
    vessel_class: "String",
    cost_in_credits: "ID",
    length: "String",
    max_atmosphering_speed: "String",
    crew: "Int",
    passengers: "Int",
    cargo_capacity: "String",
    consumables: "String",
  },
  people: {
    _id: "ID",
    name: "String",
    mass: "String",
    hair_color: "String",
    skin_color: "String",
    eye_color: "String",
    birth_year: "String",
    gender: "String",
    species_id: "ID",
    homeworld_id: "ID",
    height: "Int",
  },
  starship_specs: {
    _id: "ID",
    hyperdrive_rating: "String",
    MGLT: "String",
    vessel_id: "ID",
  },
};

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
    release_date: true,
  },
  species: { _id: true, name: true },
  species_in_films: { _id: true, film_id: true, species_id: true },
  vessels: { _id: true, name: true, vessel_type: true, vessel_class: true },
  vessels_in_films: { _id: true, vessel_id: true, film_id: true },
  people: { _id: true, name: true },
  planets_in_films: { _id: true, film_id: true, planet_id: true },
  starship_specs: { _id: true, vessel_id: true },
};

convertTypesforMutation(nonJoinTables);
// console.log(`nonJoinTables with correct data types`, nonJoinTables);

const addNullableFields = (dataWTypes, Nullable) => {
  for (const tbl in dataWTypes) {
    for (const column in Nullable[tbl]) {
      let temp = dataWTypes[tbl][column];
      if (temp) dataWTypes[tbl][column] = temp + "!";
    }
  }
  return dataWTypes;
};

const outputOfaddNullableFields = {
  planets: {
    _id: "ID!",
    name: "String",
    rotation_period: "Int",
    orbital_period: "Int",
    diameter: "Int",
    climate: "String",
    gravity: "String",
    terrain: "String",
    surface_water: "String",
    population: "ID",
  },
  films: {
    _id: "ID!",
    title: "String!",
    episode_id: "Int!",
    opening_crawl: "String!",
    director: "String!",
    producer: "String!",
    release_date: "ID!",
  },
  species: {
    _id: "ID!",
    name: "String!",
    classification: "String",
    average_height: "String",
    average_lifespan: "String",
    hair_colors: "String",
    skin_colors: "String",
    eye_colors: "String",
    language: "String",
    homeworld_id: "ID",
  },
  vessels: {
    _id: "ID!",
    name: "String!",
    manufacturer: "String",
    model: "String",
    vessel_type: "String!",
    vessel_class: "String!",
    cost_in_credits: "ID",
    length: "String",
    max_atmosphering_speed: "String",
    crew: "Int",
    passengers: "Int",
    cargo_capacity: "String",
    consumables: "String",
  },
  people: {
    _id: "ID!",
    name: "String!",
    mass: "String",
    hair_color: "String",
    skin_color: "String",
    eye_color: "String",
    birth_year: "String",
    gender: "String",
    species_id: "ID",
    homeworld_id: "ID",
    height: "Int",
  },
  starship_specs: {
    _id: "ID!",
    hyperdrive_rating: "String",
    MGLT: "String",
    vessel_id: "ID!",
  },
};
//console.log('NONJOINTABLESWITHNULLABLEADDED', addNullableFields(nonjoinTablewithCorrectTypes, outputOfIsNullable));
const mutation = (obj) => {
  mutationObj = {};
  for (const key in obj) {
    let keyName = snakeToTitle(key);
    let temp = "add" + capitalizeFirstLetter(singular(keyName));
    mutationObj[temp] = {};
    for (const column in obj[key]) {
      if (column !== "_id") {
        mutationObj[temp][column] = obj[key][column];
      }
    }
    let keyName1 = snakeToTitle(key);
    let temp1 = "update" + capitalizeFirstLetter(singular(keyName1));
    mutationObj[temp1] = {};
    for (const col in obj[key]) {
      mutationObj[temp1][col] = obj[key][col];
    }
    for (const prop in obj) {
      let keyName2 = snakeToTitle(key);
      let temp2 =
        "delete" +
        capitalizeFirstLetter(singular(keyName2)) +
        "(_id: ID!): " +
        capitalizeFirstLetter(singular(keyName2)) +
        "!";
      mutationObj[temp2] = true;
    }
  }
  return mutationObj;
};

const mutationOutput = {
  addPlanet: {
    name: "String",
    rotation_period: "Int",
    orbital_period: "Int",
    diameter: "Int",
    climate: "String",
    gravity: "String",
    terrain: "String",
    surface_water: "String",
    population: "ID",
  },
  updatePlanet: {
    _id: "ID!",
    name: "String",
    rotation_period: "Int",
    orbital_period: "Int",
    diameter: "Int",
    climate: "String",
    gravity: "String",
    terrain: "String",
    surface_water: "String",
    population: "ID",
  },
  "deletePlanet(_id: ID!): Planet!": true,
  addFilm: {
    title: "String!",
    episode_id: "Int!",
    opening_crawl: "String!",
    director: "String!",
    producer: "String!",
    release_date: "ID!",
  },
  updateFilm: {
    _id: "ID!",
    title: "String!",
    episode_id: "Int!",
    opening_crawl: "String!",
    director: "String!",
    producer: "String!",
    release_date: "ID!",
  },
  "deleteFilm(_id: ID!): Film!": true,
  addSpecies: {
    name: "String!",
    classification: "String",
    average_height: "String",
    average_lifespan: "String",
    hair_colors: "String",
    skin_colors: "String",
    eye_colors: "String",
    language: "String",
    homeworld_id: "ID",
  },
  updateSpecies: {
    _id: "ID!",
    name: "String!",
    classification: "String",
    average_height: "String",
    average_lifespan: "String",
    hair_colors: "String",
    skin_colors: "String",
    eye_colors: "String",
    language: "String",
    homeworld_id: "ID",
  },
  "deleteSpecies(_id: ID!): Species!": true,
  addVessel: {
    name: "String!",
    manufacturer: "String",
    model: "String",
    vessel_type: "String!",
    vessel_class: "String!",
    cost_in_credits: "ID",
    length: "String",
    max_atmosphering_speed: "String",
    crew: "Int",
    passengers: "Int",
    cargo_capacity: "String",
    consumables: "String",
  },
  updateVessel: {
    _id: "ID!",
    name: "String!",
    manufacturer: "String",
    model: "String",
    vessel_type: "String!",
    vessel_class: "String!",
    cost_in_credits: "ID",
    length: "String",
    max_atmosphering_speed: "String",
    crew: "Int",
    passengers: "Int",
    cargo_capacity: "String",
    consumables: "String",
  },
  "deleteVessel(_id: ID!): Vessel!": true,
  addPerson: {
    name: "String!",
    mass: "String",
    hair_color: "String",
    skin_color: "String",
    eye_color: "String",
    birth_year: "String",
    gender: "String",
    species_id: "ID",
    homeworld_id: "ID",
    height: "Int",
  },
  updatePerson: {
    _id: "ID!",
    name: "String!",
    mass: "String",
    hair_color: "String",
    skin_color: "String",
    eye_color: "String",
    birth_year: "String",
    gender: "String",
    species_id: "ID",
    homeworld_id: "ID",
    height: "Int",
  },
  "deletePerson(_id: ID!): Person!": true,
  addStarshipSpec: {
    hyperdrive_rating: "String",
    MGLT: "String",
    vessel_id: "ID!",
  },
  updateStarshipSpec: {
    _id: "ID!",
    hyperdrive_rating: "String",
    MGLT: "String",
    vessel_id: "ID!",
  },
  "deleteStarshipSpec(_id: ID!): StarshipSpec!": true,
};

//console.log("schmoneyyyyyy123", mutation(outputOfaddNullableFields));

// const mutationAdd = (obj) => {
//   mutationAddObj = {}
//   for (const key in obj) {
//     let keyName = snakeToTitle(key)
//     let temp = 'add' + capitalizeFirstLetter(singular(keyName));
//     mutationAddObj[temp] = {};
//     for (const column in obj[key]) {
//       if (column !== '_id') {
//         mutationAddObj[temp][column] = obj[key][column];
//       }
//     }
//   }
//   return mutationAddObj;
// }
// //need to concate type name at the end

// const mutationAddOutput = {
//   addPlanet: {
//     name: 'String',
//     rotation_period: 'Int',
//     orbital_period: 'Int',
//     diameter: 'Int',
//     climate: 'String',
//     gravity: 'String',
//     terrain: 'String',
//     surface_water: 'String',
//     population: 'ID'
//   },
//   addFilm: {
//     title: 'String!',
//     episode_id: 'Int!',
//     opening_crawl: 'String!',
//     director: 'String!',
//     producer: 'String!',
//     release_date: 'ID!'
//   },
//   addSpecies: {
//     name: 'String!',
//     classification: 'String',
//     average_height: 'String',
//     average_lifespan: 'String',
//     hair_colors: 'String',
//     skin_colors: 'String',
//     eye_colors: 'String',
//     language: 'String',
//     homeworld_id: 'ID'
//   },
//   addVessel: {
//     name: 'String!',
//     manufacturer: 'String',
//     model: 'String',
//     vessel_type: 'String!',
//     vessel_class: 'String!',
//     cost_in_credits: 'ID',
//     length: 'String',
//     max_atmosphering_speed: 'String',
//     crew: 'Int',
//     passengers: 'Int',
//     cargo_capacity: 'String',
//     consumables: 'String'
//   },
//   addPerson: {
//     name: 'String!',
//     mass: 'String',
//     hair_color: 'String',
//     skin_color: 'String',
//     eye_color: 'String',
//     birth_year: 'String',
//     gender: 'String',
//     species_id: 'ID',
//     homeworld_id: 'ID',
//     height: 'Int'
//   },
//   addStarshipSpec: { hyperdrive_rating: 'String', MGLT: 'String', vessel_id: 'ID!' }
// }
// console.log('MONEY', mutationAdd(outputOfaddNullableFields))

// const mutationUpdate = (obj) => {
//   mutationUpdateObj = {}
//   for (const key in obj) {
//     let keyName = snakeToTitle(key)
//     let temp = 'update' + capitalizeFirstLetter(singular(keyName));
//     mutationUpdateObj[temp] = {};
//     for (const column in obj[key]) {
//       mutationUpdateObj[temp][column] = obj[key][column];

//     }
//   }
//   return mutationUpdateObj;
// }

// const mutationUpdateOutput = {
//   updatePlanet: {
//     _id: 'ID!',
//     name: 'String',
//     rotation_period: 'Int',
//     orbital_period: 'Int',
//     diameter: 'Int',
//     climate: 'String',
//     gravity: 'String',
//     terrain: 'String',
//     surface_water: 'String',
//     population: 'ID'
//   },
//   updateFilm: {
//     _id: 'ID!',
//     title: 'String!',
//     episode_id: 'Int!',
//     opening_crawl: 'String!',
//     director: 'String!',
//     producer: 'String!',
//     release_date: 'ID!'
//   },
//   updateSpecies: {
//     _id: 'ID!',
//     name: 'String!',
//     classification: 'String',
//     average_height: 'String',
//     average_lifespan: 'String',
//     hair_colors: 'String',
//     skin_colors: 'String',
//     eye_colors: 'String',
//     language: 'String',
//     homeworld_id: 'ID'
//   },
//   updateVessel: {
//     _id: 'ID!',
//     name: 'String!',
//     manufacturer: 'String',
//     model: 'String',
//     vessel_type: 'String!',
//     vessel_class: 'String!',
//     cost_in_credits: 'ID',
//     length: 'String',
//     max_atmosphering_speed: 'String',
//     crew: 'Int',
//     passengers: 'Int',
//     cargo_capacity: 'String',
//     consumables: 'String'
//   },
//   updatePerson: {
//     _id: 'ID!',
//     name: 'String!',
//     mass: 'String',
//     hair_color: 'String',
//     skin_color: 'String',
//     eye_color: 'String',
//     birth_year: 'String',
//     gender: 'String',
//     species_id: 'ID',
//     homeworld_id: 'ID',
//     height: 'Int'
//   },
//   updateStarshipSpec: {
//     _id: 'ID!',
//     hyperdrive_rating: 'String',
//     MGLT: 'String',
//     vessel_id: 'ID!'
//   }
// }

// console.log('MOREMONEY', mutationUpdate(outputOfaddNullableFields))

// const mutationDelete = obj => {
//   deleteObj = {}
//   for(const key in obj) {
//     let keyName = snakeToTitle(key)
//     let temp = 'delete' + capitalizeFirstLetter(singular(keyName)) + '(_id: ID!): ' + capitalizeFirstLetter(singular(keyName)) + '!';
//     deleteObj[temp] = true
//   }
//   return deleteObj
// }

// console.log('most damn lazy money', mutationDelete(outputOfaddNullableFields))
// const mutationDeleteOutput =  {
//   'deletePlanet(_id: ID!): Planet!': true,
//   'deleteFilm(_id: ID!): Film!': true,
//   'deleteSpecies(_id: ID!): Species!': true,
//   'deleteVessel(_id: ID!): Vessel!': true,
//   'deletePerson(_id: ID!): Person!': true,
//   'deleteStarshipSpec(_id: ID!): StarshipSpec!': true
// }

//change to string
// String(mutationObject);
//console.log('herrrrrooooo', JSON.stringify(mutationOutput));
//split before add
//[planet,film,species,etc]
//remove colon after key (addPlanet:) => regex
//convert bracks to parentheses => regex
//after { || } || ',',  '\n'

// {
//   ': {': '(',
//   '}': ')',
//   '"': ''
// }
const replacerOne = (str) => {
  str =
    "\n" +
    str
      .replace(/:{/g, "(")
      .replace(/"/g, "")
      .replace(/,/g, ",\n")
      .replace(/},/g, ")\n")
      .replace(/:/g, ": ")
      .replace(/:  I/g, " :I")
      .replace(/[)]/g, `\n)`)
      .replace(/[(]/g, `(\n`)
      .replace(/: true,/g, "\n")
      .replace(/: true/g, "");
  let output = "";

  //while str length
  while (str.indexOf('add') !== -1) {
  //look for text between add and {
    let txtToAdd = str.match(/(?<=add).*(?=\()/);
    //replace the following 2 closing commas with ): [that text]!
    // console.log('string', str);
    // console.log('ALL', txtToAdd);
    // console.log(`texttoAdd`, txtToAdd[0]);
    str = str.replace(/\)\n/, `): ${txtToAdd[0]}!\n`);
    output+=str.slice(0, str.indexOf(`update`));
    str = str.slice(str.indexOf(`update`));
    str = str.replace(/\)/, `): ${txtToAdd[0]}!`);
    //slice that stuff off to output
    output+=str.slice(0, str.indexOf(`delete`));
    str = str.slice(str.indexOf(`delete`));
    //find the next add
  } 
  if (str.length) output+=str;
  
  return output;
    //.replace() //.replace(/[(]/g, '(\n')
}
// replacerOne(JSON.stringify(mutationOutput));

// .replace(/([a-z]/, )
console.log("TESTONE", replacerOne(JSON.stringify(mutationOutput)));

//after parentheses, add colon, Type!
//add new line new line '\n'

// addPlanet: {
//   name: 'String',
//   rotation_period: 'Int',
//   orbital_period: 'Int',
//   diameter: 'Int',
//   climate: 'String',
//   gravity: 'String',
//   terrain: 'String',
//   surface_water: 'String',
//   population: 'ID'
// },
// updatePlanet: {
//   _id: 'ID!',
//   name: 'String',
//   rotation_period: 'Int',
//   orbital_period: 'Int',
//   diameter: 'Int',
//   climate: 'String',
//   gravity: 'String',
//   terrain: 'String',
//   surface_water: 'String',
//   population: 'ID'
// },
// 'deletePlanet(_id: ID!): Planet!': true,

//do not include _id for add
//include everything for update
//include _id for delete
// addPlanet(
//   orbital_period: Int,
//   climate: String,
//   gravity: String,
//   terrain: String,
//   surface_water: String,
//   population: String,
//   name: String,
//   rotation_period: Int,
//   diameter: Int,
// ): Planet!

// updatePlanet(
//   orbital_period: Int,
//   climate: String,
//   gravity: String,
//   terrain: String,
//   surface_water: String,
//   population: String,
//   _id: ID!,
//   name: String,
//   rotation_period: Int,
//   diameter: Int,
// ): Planet!

// deletePlanet(_id: ID!): Planet!

// type Mutation {
//   addPerson(
//     gender: String,
//     species_id: ID,
//     homeworld_id: ID,
//     height: Int,
//     mass: String,
//     hair_color: String,
//     skin_color: String,
//     eye_color: String,
//     name: String!,
//     birth_year: String,
//   ): Person!

//   updatePerson(
//     gender: String,
//     species_id: ID,
//     homeworld_id: ID,
//     height: Int,
//     _id: ID!,
//     mass: String,
//     hair_color: String,
//     skin_color: String,
//     eye_color: String,
//     name: String,
//     birth_year: String,
//   ): Person!

//   deletePerson(_id: ID!): Person!

//   addFilm(
//     director: String!,
//     opening_crawl: String!,
//     episode_id: Int!,
//     title: String!,
//     release_date: String!,
//     producer: String!,
//   ): Film!

//   updateFilm(
//     director: String,
//     opening_crawl: String,
//     episode_id: Int,
//     _id: ID!,
//     title: String,
//     release_date: String,
//     producer: String,
//   ): Film!

//   deleteFilm(_id: ID!): Film!

//   addPlanet(
//     orbital_period: Int,
//     climate: String,
//     gravity: String,
//     terrain: String,
//     surface_water: String,
//     population: String,
//     name: String,
//     rotation_period: Int,
//     diameter: Int,
//   ): Planet!

//   updatePlanet(
//     orbital_period: Int,
//     climate: String,
//     gravity: String,
//     terrain: String,
//     surface_water: String,
//     population: String,
//     _id: ID!,
//     name: String,
//     rotation_period: Int,
//     diameter: Int,
//   ): Planet!

//   deletePlanet(_id: ID!): Planet!

//   addSpecies(
//     hair_colors: String,
//     name: String!,
//     classification: String,
//     average_height: String,
//     average_lifespan: String,
//     skin_colors: String,
//     eye_colors: String,
//     language: String,
//     homeworld_id: ID,
//   ): Species!

//   updateSpecies(
//     hair_colors: String,
//     name: String,
//     classification: String,
//     average_height: String,
//     average_lifespan: String,
//     skin_colors: String,
//     eye_colors: String,
//     language: String,
//     homeworld_id: ID,
//     _id: ID!,
//   ): Species!

//   deleteSpecies(_id: ID!): Species!

//   addVessel(
//     cost_in_credits: String,
//     length: String,
//     vessel_type: String!,
//     model: String,
//     manufacturer: String,
//     name: String!,
//     vessel_class: String!,
//     max_atmosphering_speed: String,
//     crew: Int,
//     passengers: Int,
//     cargo_capacity: String,
//     consumables: String,
//   ): Vessel!

//   updateVessel(
//     cost_in_credits: String,
//     length: String,
//     vessel_type: String,
//     model: String,
//     manufacturer: String,
//     name: String,
//     vessel_class: String,
//     max_atmosphering_speed: String,
//     crew: Int,
//     passengers: Int,
//     cargo_capacity: String,
//     consumables: String,
//     _id: ID!,
//   ): Vessel!

//   deleteVessel(_id: ID!): Vessel!

//   addStarshipSpec(
//     vessel_id: ID!,
//     MGLT: String,
//     hyperdrive_rating: String,
//   ): StarshipSpec!

//   updateStarshipSpec(
//     _id: ID!,
//     vessel_id: ID,
//     MGLT: String,
//     hyperdrive_rating: String,
//   ): StarshipSpec!

//   deleteStarshipSpec(_id: ID!): StarshipSpec!
// }

//function to take out _ and capitalize next letter
// starship_spec => StarshipSpec
