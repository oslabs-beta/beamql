data
  allTables
  primaryKeys
  foreignKeys

outputOfIsNullable(allTables): nullableObj
dataTupleMaker(allTables): tablesTuples
fkTupleMaker(foreignKeys): fKeyTuples
[
  countTupleKeys(fKeyTuples): fKeyCounts
  countTupleKeys(tablesTuples): allKeyCounts
  Object.fromEntries(fKeyTuples): fKeysObj
  Object.fromEntries(tablesTuples): tablesObj
]

nonAndJoinTables(fKeyCounts, allKeyCounts, fKeysObj, tablesObj): joinTable AND nonJoinTable

terrified(nonJoinTable[16], fKeysObj[12], nullableObj[6]): "finalTypeObjectFinito"




const finalResultOfTypeWorkByFriday = {
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
    films: '[Film]',
    people: '[Person]'
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
    films: '[Film]',
    people: '[Person]'
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
    films: '[Film]',
    starship_specs: '[Starship_spec]'
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

const tDRes = [
  [
    'planets',
    {
      _id: 'integer',
      name: 'character varying',
      rotation_period: 'integer',
      orbital_period: 'integer',
      diameter: 'integer',
      climate: 'character varying',
      gravity: 'character varying',
      terrain: 'character varying',
      surface_water: 'character varying',
      population: 'bigint'
    }
  ],
  [
    'pilots',
    { _id: 'integer', person_id: 'bigint', vessel_id: 'bigint' }
  ],
  [
    'people_in_films',
    { _id: 'integer', person_id: 'bigint', film_id: 'bigint' }
  ],
  [
    'films',
    {
      _id: 'integer',
      title: 'character varying',
      episode_id: 'integer',
      opening_crawl: 'character varying',
      director: 'character varying',
      producer: 'character varying',
      release_date: 'date'
    }
  ],
  [
    'species',
    {
      _id: 'integer',
      name: 'character varying',
      classification: 'character varying',
      average_height: 'character varying',
      average_lifespan: 'character varying',
      hair_colors: 'character varying',
      skin_colors: 'character varying',
      eye_colors: 'character varying',
      language: 'character varying',
      homeworld_id: 'bigint'
    }
  ],
  [
    'species_in_films',
    { _id: 'integer', film_id: 'bigint', species_id: 'bigint' }
  ],
  [
    'vessels',
    {
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
      consumables: 'character varying'
    }
  ],
  [
    'vessels_in_films',
    { _id: 'integer', vessel_id: 'bigint', film_id: 'bigint' }
  ],
  [
    'people',
    {
      _id: 'integer',
      name: 'character varying',
      mass: 'character varying',
      hair_color: 'character varying',
      skin_color: 'character varying',
      eye_color: 'character varying',
      birth_year: 'character varying',
      gender: 'character varying',
      species_id: 'bigint',
      homeworld_id: 'bigint',
      height: 'integer'
    }
  ],
  [
    'planets_in_films',
    { _id: 'integer', film_id: 'bigint', planet_id: 'bigint' }
  ],
  [
    'starship_specs',
    {
      _id: 'integer',
      hyperdrive_rating: 'character varying',
      MGLT: 'character varying',
      vessel_id: 'bigint'
    }
  ]
]

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



const atd = [
  [
    'planets',
    {
      _id: 'integer',
      name: 'character varying',
      rotation_period: 'integer',
      orbital_period: 'integer',
      diameter: 'integer',
      climate: 'character varying',
      gravity: 'character varying',
      terrain: 'character varying',
      surface_water: 'character varying',
      population: 'bigint'
    }
  ],
  [
    'pilots',
    { _id: 'integer', person_id: 'bigint', vessel_id: 'bigint' }
  ],
  [
    'people_in_films',
    { _id: 'integer', person_id: 'bigint', film_id: 'bigint' }
  ],
  [
    'films',
    {
      _id: 'integer',
      title: 'character varying',
      episode_id: 'integer',
      opening_crawl: 'character varying',
      director: 'character varying',
      producer: 'character varying',
      release_date: 'date'
    }
  ],
  [
    'species',
    {
      _id: 'integer',
      name: 'character varying',
      classification: 'character varying',
      average_height: 'character varying',
      average_lifespan: 'character varying',
      hair_colors: 'character varying',
      skin_colors: 'character varying',
      eye_colors: 'character varying',
      language: 'character varying',
      homeworld_id: 'bigint'
    }
  ],
  [
    'species_in_films',
    { _id: 'integer', film_id: 'bigint', species_id: 'bigint' }
  ],
  [
    'vessels',
    {
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
      consumables: 'character varying'
    }
  ],
  [
    'vessels_in_films',
    { _id: 'integer', vessel_id: 'bigint', film_id: 'bigint' }
  ],
  [
    'people',
    {
      _id: 'integer',
      name: 'character varying',
      mass: 'character varying',
      hair_color: 'character varying',
      skin_color: 'character varying',
      eye_color: 'character varying',
      birth_year: 'character varying',
      gender: 'character varying',
      species_id: 'bigint',
      homeworld_id: 'bigint',
      height: 'integer'
    }
  ],
  [
    'planets_in_films',
    { _id: 'integer', film_id: 'bigint', planet_id: 'bigint' }
  ],
  [
    'starship_specs',
    {
      _id: 'integer',
      hyperdrive_rating: 'character varying',
      MGLT: 'character varying',
      vessel_id: 'bigint'
    }
  ]
]
const fkt = [
  [ 'people', { homeworld_id: 'planets', species_id: 'species' } ], 
  [ 'people_in_films', { film_id: 'films', person_id: 'people' } ], //join
  [ 'pilots', { person_id: 'people', vessel_id: 'vessels' } ], //join
  [ 'planets_in_films', { film_id: 'films', planet_id: 'planets' } ], //join
  [ 'species', { homeworld_id: 'planets' } ],
  [ 'species_in_films', { film_id: 'films', species_id: 'species' } ], //join
  [ 'starship_specs', { vessel_id: 'vessels' } ], //
  [ 'vessels_in_films', { film_id: 'films', vessel_id: 'vessels' } ]
]

// const nonJoinTables = {
//   planets: {
//     _id: 'integer',
//     name: 'character varying',
//     rotation_period: 'integer',
//     orbital_period: 'integer',
//     diameter: 'integer',
//     climate: 'character varying',
//     gravity: 'character varying',
//     terrain: 'character varying',
//     surface_water: 'character varying',
//     population: 'bigint'
//   },

// FKT AS OBJECT {
//   people: { homeworld_id: 'planets', species_id: 'species' },

// typeObject/////////////////////
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
//   films: '[Film]'
// },

FKT AS OBJECT {
  people: { homeworld_id: 'planets', species_id: 'species' },
  people_in_films: { film_id: 'films', person_id: 'people' },//
  pilots: { person_id: 'people', vessel_id: 'vessels' },//
  planets_in_films: { film_id: 'films', planet_id: 'planets' },//
  species: { homeworld_id: 'planets' },
  species_in_films: { film_id: 'films', species_id: 'species' },//
  starship_specs: { vessel_id: 'vessels' },
  vessels_in_films: { film_id: 'films', vessel_id: 'vessels' }//
}

fktNoJoins {
  people: { homeworld_id: 'planets', species_id: 'species' },
  species: { homeworld_id: 'planets' },
  starship_specs: { vessel_id: 'vessels' }
}


//types w/ missing foreign kkeys
planets: { //person
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

species: { //person 
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

vessels: { //starship_spec
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

const numForeignKeys = {
  people: 2,
  people_in_films: 2,
  pilots: 2,
  planets_in_films: 2,
  species: 1,
  species_in_films: 2,
  starship_specs: 1,
  vessels_in_films: 2
}
const numTotalKeys = {
  planets: 10,
  pilots: 3,
  people_in_films: 3,
  films: 7,
  species: 10,
  species_in_films: 3,
  vessels: 13,
  vessels_in_films: 3,
  people: 11,
  planets_in_films: 3,
  starship_specs: 4
}
const nonJoinTables = {
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
    population: 'bigint'
  },
  films: {
    _id: 'integer',
    title: 'character varying',
    episode_id: 'integer',
    opening_crawl: 'character varying',
    director: 'character varying',
    producer: 'character varying',
    release_date: 'date'
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
    homeworld_id: 'bigint'
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
    consumables: 'character varying'
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
    species_id: 'bigint',
    homeworld_id: 'bigint',
    height: 'integer'
  },
  starship_specs: {
    _id: 'integer',
    hyperdrive_rating: 'character varying',
    MGLT: 'character varying',
    vessel_id: 'bigint'
  }
}
const joinTables = {
  pilots: { _id: 'integer', person_id: 'bigint', vessel_id: 'bigint' },
  people_in_films: { _id: 'integer', person_id: 'bigint', film_id: 'bigint' },
  species_in_films: { _id: 'integer', film_id: 'bigint', species_id: 'bigint' },
  vessels_in_films: { _id: 'integer', vessel_id: 'bigint', film_id: 'bigint' },
  planets_in_films: { _id: 'integer', film_id: 'bigint', planet_id: 'bigint' }
}
const typeObj = {
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
    MGLT: 'character varying'
  }
}
















                  OLD DATA
-------------------------------------------




foreign key obj {
  people: 2,
  people_in_films: 2, //
  pilots: 2, //
  planets_in_films: 2, //
  species: 1,
  species_in_films: 2, //
  starship_specs: 1,
  vessels_in_films: 2 //
}
total keys obj {
  planets: 10,
  pilots: 3, //
  people_in_films: 3, //
  films: 7,
  species: 10,
  species_in_films: 3, //
  vessels: 13,
  vessels_in_films: 3,// 
  people: 11,
  planets_in_films: 3, //
  starship_specs: 3
}

the only join tables above are pilots, peopleinfilms, vessels in films species in films, planetsinfilms
atd as Obj {
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
    population: 'bigint'
  },
  pilots: { _id: 'integer', person_id: 'bigint', vessel_id: 'bigint' },
  people_in_films: { _id: 'integer', person_id: 'bigint', film_id: 'bigint' },
  films: {
    _id: 'integer',
    title: 'character varying',
    episode_id: 'integer',
    opening_crawl: 'character varying',
    director: 'character varying',
    producer: 'character varying',
    release_date: 'date'
  }
} // etc...
//join table keys
FKT AS OBJECT {
  people: { homeworld_id: 'planets', species_id: 'species' },
  people_in_films: { film_id: 'films', person_id: 'people' },
  pilots: { person_id: 'people', vessel_id: 'vessels' },
  planets_in_films: { film_id: 'films', planet_id: 'planets' },
  species: { homeworld_id: 'planets' },
  species_in_films: { film_id: 'films', species_id: 'species' },
  starship_specs: { vessel_id: 'vessels' },
  vessels_in_films: { film_id: 'films', vessel_id: 'vessels' }
}

  starship_specs: {
    _id: 'integer',
    hyperdrive_rating: 'character varying',
    MGLT: 'character varying'

  //WHY DOES STARSHIP_SPECS NOT HAVE KEY VESSEL_ID?
  }
//from NonJoinTable
 { people: {
    _id: 'integer',
    name: 'character varying',
    mass: 'character varying',
    hair_color: 'character varying',
    skin_color: 'character varying',
    eye_color: 'character varying',
    birth_year: 'character varying',
    gender: 'character varying',
    species_id: 'bigint',
    homeworld_id: 'bigint',
    height: 'integer'
  }
}
typeObj {
  people: {
    _id: 'integer',
    name: 'character varying',
    mass: 'character varying',
    hair_color: 'character varying',
    skin_color: 'character varying',
    eye_color: 'character varying',
    birth_year: 'character varying',
    gender: 'character varying',
    species: 'Species', 
    planets: 'Planet', 
    height: 'integer'
  }
  ///etc
}

// typeCreator(nonJoinTables, joinTables, fktAsObj);
// console.log(`typeObj`, typeObj);


// add join table keys to typeObjects
// singularize all shit last

NONJOINTABLESHERE {
  people: {
    _id: 'integer',
    name: 'character varying',
    mass: 'character varying',
    hair_color: 'character varying',
    skin_color: 'character varying',
    eye_color: 'character varying',
    birth_year: 'character varying',
    gender: 'character varying',
    species_id: 'bigint',
    homeworld_id: 'bigint',
    height: 'integer'
  },
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
    population: 'bigint'
  },
  films: {
    _id: 'integer',
    title: 'character varying',
    episode_id: 'integer',
    opening_crawl: 'character varying',
    director: 'character varying',
    producer: 'character varying',
    release_date: 'date'
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
    homeworld_id: 'bigint'
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
    consumables: 'character varying'
  },
  starship_specs: {
    _id: 'integer',
    hyperdrive_rating: 'character varying',
    MGLT: 'character varying'
  }
}
isJoinTable {
  pilots: { _id: 'integer', person_id: 'bigint', vessel_id: 'bigint' },
  people_in_films: { _id: 'integer', person_id: 'bigint', film_id: 'bigint' },
  species_in_films: { _id: 'integer', film_id: 'bigint', species_id: 'bigint' },
  vessels_in_films: { _id: 'integer', vessel_id: 'bigint', film_id: 'bigint' },
  planets_in_films: { _id: 'integer', film_id: 'bigint', planet_id: 'bigint' }
}

//non join table with correct types 8/30
const nonjoinTablewithCorrectTypes = {
  planets: {
  _id: 'ID',
  name: 'String',
  rotation_period: 'Int',
  orbital_period: 'Int',
  diameter: 'Int',
  climate: 'String',
  gravity: 'String',
  terrain: 'String',
  surface_water: 'String',
  population: 'ID'
},
films: {
  _id: 'ID',
  title: 'String',
  episode_id: 'Int',
  opening_crawl: 'String',
  director: 'String',
  producer: 'String',
  release_date: 'ID'
},
species: {
  _id: 'ID',
  name: 'String',
  classification: 'String',
  average_height: 'String',
  average_lifespan: 'String',
  hair_colors: 'String',
  skin_colors: 'String',
  eye_colors: 'String',
  language: 'String',
  homeworld_id: 'ID'
},
vessels: {
  _id: 'ID',
  name: 'String',
  manufacturer: 'String',
  model: 'String',
  vessel_type: 'String',
  vessel_class: 'String',
  cost_in_credits: 'ID',
  length: 'String',
  max_atmosphering_speed: 'String',
  crew: 'Int',
  passengers: 'Int',
  cargo_capacity: 'String',
  consumables: 'String'
},
people: {
  _id: 'ID',
  name: 'String',
  mass: 'String',
  hair_color: 'String',
  skin_color: 'String',
  eye_color: 'String',
  birth_year: 'String',
  gender: 'String',
  species_id: 'ID',
  homeworld_id: 'ID',
  height: 'Int'
},
starship_specs: {
  _id: 'ID',
  hyperdrive_rating: 'String',
  MGLT: 'String',
  vessel_id: 'ID'
}
}

const outputOfaddNullableFields = {
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
    population: 'ID'
  },
  films: {
    _id: 'ID!',
    title: 'String!',
    episode_id: 'Int!',
    opening_crawl: 'String!',
    director: 'String!',
    producer: 'String!',
    release_date: 'ID!'
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
    homeworld_id: 'ID'
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
    consumables: 'String'
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
    species_id: 'ID',
    homeworld_id: 'ID',
    height: 'Int'
  },
  starship_specs: {
    _id: 'ID!',
    hyperdrive_rating: 'String',
    MGLT: 'String',
    vessel_id: 'ID!'
  }
}