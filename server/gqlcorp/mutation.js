const { singular } = require("pluralize");
//for each type we need: add, update, delete

// types for bigint currently convert to Int. must determine if Int, ID, string is correct. population is taken as bigint, was ID, now is Int.



function capFirstLet(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function snakeToTitle(str) {
  return str.split("_").map(capFirstLet).join("");
}
/////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////
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
/////////////////////////////////////////////////
////////////change all names before running
// convert Types for Mutation -> /////////////////////////////////////////
const convertTypesforMutation = object => {
  for (const table in object) {
    for (const column in object[table]) {
      switch (object[table][column]) {
        case "bigint": ///////////////////// changing 9/2 from ID
          object[table][column] = "Int";
          break;
        case "integer":
          object[table][column] = "Int";
          break;
        case "character varying":
          object[table][column] = "String";
          break;
        case "date":
          object[table][column] = "String";
          break;
      }
      if (column === "_id") {
        object[table][column] = "ID";
      }
    }
  }
  return object //quicfix
};

const nonjoinTablewithCorrectTypes = convertTypesforMutation(nonJoinTables);

// const nonjoinTablewithCorrectTypes = convertTypesforMutation(nonJoinTables); // old one



// addNullable -> ////////////////////////////////////////////////////////////
const addNullableFields = (dataWTypes, Nullable) => {
  for (const tbl in dataWTypes) {
    for (const column in Nullable[tbl]) {
      let temp = dataWTypes[tbl][column];
      if (temp) dataWTypes[tbl][column] = temp + "!";
    }
  }
  return dataWTypes;
};


const mutatableObject = addNullableFields(nonjoinTablewithCorrectTypes, outputOfIsNullable)
// mutation =>  /////////////////////////////////////////////////////////
const mutation = (obj) => {
  mutationObj = {};
  for (const key in obj) {
    let keyName = snakeToTitle(key);
    let temp = "add" + capFirstLet(singular(keyName));
    mutationObj[temp] = {};
    for (const column in obj[key]) {
      if (column !== "_id") {
        mutationObj[temp][column] = obj[key][column];
      }
    }
    let keyName1 = snakeToTitle(key);
    let temp1 = "update" + capFirstLet(singular(keyName1));
    mutationObj[temp1] = {};
    for (const col in obj[key]) {
      mutationObj[temp1][col] = obj[key][col];
    }
    for (const prop in obj) {
      let keyName2 = snakeToTitle(key);
      let temp2 =
        "delete" +
        capFirstLet(singular(keyName2)) +
        "(_id: ID!): " +
        capFirstLet(singular(keyName2)) +
        "!";
      mutationObj[temp2] = true;
    }
  }
  return mutationObj;
};
const toReplace = mutation(mutatableObject)

// replacer One ///////////////////////////////////////////////////////////
const replacerOne = (str) => {
  str = JSON.stringify(str)
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

}

const finalBaby = replacerOne(toReplace)

//////////////////////////////////////////////////////////////////////////

module.exports = { convertTypesforMutation, addNullableFields, mutation, replacerOne };
