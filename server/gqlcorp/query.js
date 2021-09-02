const { singular } = require('pluralize');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function snakeToCamel(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
  return str.split("_").map(capitalizeFirstLetter).join("");
}

// console.log(snakeToCamel(starship_specs))
// function removeUnderscore(str) {
//   for (let i = 0; i < str.length; i++) {
    
//   }
//   str.replace(/[_]/, '');
// }

const camelCaseIt = string => string.toLowerCase().trim().split(/[.\-_\s]/g).reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));

//grab keys
//set as keys in new table, set value as [singularizedkey!]!, also set singularized as key in new table PLUS (_id: ID!), assign value as singularedkey!

// string it , add type Query_[space] in front

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
  
  // const typeDefs =
  //   type Query {
  //     people: [Person!]!
  //     person(_id: ID!): Person!
  //     films: [Film!]!
  //     film(_id: ID!): Film!
  //     planets: [Planet!]!
  //     planet(_id: ID!): Planet!
  //     species: [Species!]!
  //     speciesById(_id: ID!): Species!
  //     vessels: [Vessel!]!
  //     vessel(_id: ID!): Vessel!
  //     starshipSpecs: [StarshipSpec!]!
  //     starshipSpec(_id: ID!): StarshipSpec!
  //   }
  // capitalizeFirstLetter

const queryCreator = object => {
  const queryObject = {}
  for(const table in object) {
    // keys
    const camelCaseName = camelCaseIt(table) //starshipSpecs
    const ccnWithID = singular(camelCaseName) + '(_id:ID!)' // starshipSpecs(_id: ID!)
    // values
    const titleCaseWithBang = capitalizeFirstLetter(singular(camelCaseName)) + '!' // StarshipSpec!
    const pluralValue = '[' + titleCaseWithBang + ']!' // [StarshipSpec!]!
    //assign key value pairs in obj
    queryObject[camelCaseName] = pluralValue;
    queryObject[ccnWithID] = titleCaseWithBang;

  }
  let queryStr = JSON.stringify(queryObject);
  queryStr = 'type Query ' + queryStr
    .replace(/"/g, '')
    .replace(/,/g, '\n\t')
    .replace(/{/g, '{\n\t')
    .replace(/}/g, '\n}')
    .replace(/:/g, ': ');
  
  return queryStr
}




const x = queryCreator(nonjoinTablewithCorrectTypes)
console.log(x)