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
  [ 'people', { homeworld_id: 'planets', species_id: 'species' } ], //
  [ 'people_in_films', { film_id: 'films', person_id: 'people' } ], //join
  [ 'pilots', { person_id: 'people', vessel_id: 'vessels' } ], //join
  [ 'planets_in_films', { film_id: 'films', planet_id: 'planets' } ], //join
  [ 'species', { homeworld_id: 'planets' } ],
  [ 'species_in_films', { film_id: 'films', species_id: 'species' } ], //join
  [ 'starship_specs', { vessel_id: 'vessels' } ], //
  [ 'vessels_in_films', { film_id: 'films', vessel_id: 'vessels' } ]
]
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
    species: 'Species', // NEED TO BE ARR
    planets: 'Planet', //NEED TO BE ARR
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