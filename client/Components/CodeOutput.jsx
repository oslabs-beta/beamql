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

const text3 = "type Planets{_id:ID!name:Stringrotation_period:Intorbital_period:Intdiameter:Intclimate:Stringgravity:Stringterrain:Stringsurface_water:Stringpopulation:Intspecies:[Species]films:[Film]people:[Person]planets_in_films:[PlanetsInFilm]}type Films{_id:ID!title:String!episode_id:Int!opening_crawl:String!director:String!producer:String!release_date:String!people:[Person]planets:[Planet]species:[Species]vessels:[Vessel]people_in_films:[PeopleInFilm]planets_in_films:[PlanetsInFilm]species_in_films:[SpeciesInFilm]vessels_in_films:[VesselsInFilm]}type Species{_id:ID!name:String!classification:Stringaverage_height:Stringaverage_lifespan:Stringhair_colors:Stringskin_colors:Stringeye_colors:Stringlanguage:Stringplanets:[Planet]films:[Film]people:[Person]species_in_films:[SpeciesInFilm]}type Vessels{_id:ID!name:String!manufacturer:Stringmodel:Stringvessel_type:String!vessel_class:String!cost_in_credits:Intlength:Stringmax_atmosphering_speed:Stringcrew:Intpassengers:Intcargo_capacity:Stringconsumables:Stringpeople:[Person]films:[Film]pilots:[Pilot]starship_specs:[StarshipSpec]vessels_in_films:[VesselsInFilm]}type People{_id:ID!name:String!mass:Stringhair_color:Stringskin_color:Stringeye_color:Stringbirth_year:Stringgender:Stringspecies:[Species]planets:[Planet]height:Intfilms:[Film]vessels:[Vessel]people_in_films:[PeopleInFilm]pilots:[Pilot]}type StarshipSpecs{_id:ID!hyperdrive_rating:StringMGLT:Stringvessels:[Vessel]}"
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