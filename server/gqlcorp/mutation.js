const { singular } = require("pluralize");

//Capitalizes first letter of any string
function capFirstLet(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//Converts to PascalCaseFrom snake_case
function snakeToTitle(str) {
  return str.split("_").map(capFirstLet).join("");
};



// Takes non join tables, and switches SQL types to GQL types.
const convertTypesforMutation = object => {
  //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$CONVERTTYPESFORRMUTATIONS OBJECT ARG", object);
  for (const table in object) {
    
    for (const column in object[table]) {
      switch (object[table][column]) {
        case "bigint":
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
        case 'numeric':
          object[table][column] = 'Int'
        break;
        case 'smallint':
          object[table][column] = 'Int'
          break;
        case 'ARRAY':
          object[table][column] = '|String|'
          break;
        
      }
      if (column === "_id") {
        object[table][column] = "ID";
      }
    }
  }
  return object //quicfix
};



// Takes GQL typed non Join table and adds ! after the type to show it is required in GQL formatting
const addNullableFields = (dataWTypes, nullable) => {

  for (const tbl in dataWTypes) {

    for (const column in nullable[tbl]) {
      let temp = dataWTypes[tbl][column];
      if (temp[temp.length-1] === "!") temp = temp.slice(0, -1);
      if (temp) dataWTypes[tbl][column] = temp + "!";
    }
  }
  return dataWTypes;
};



//Creates strings for all mutations in GQL
const mutation = (obj) => {
  mutationObj = {};
  //Creating add Mutation for each nonJoinTable
  for (const key in obj) {
    let keyName = snakeToTitle(key);
    let temp = "add" + capFirstLet(singular(keyName));
    mutationObj[temp] = {};

    for (const column in obj[key]) {
      if (column !== "_id") {
        mutationObj[temp][column] = obj[key][column];
      }
    }
  //Creating update Mutation for each nonJoinTable
    let keyName1 = snakeToTitle(key);
    let temp1 = "update" + capFirstLet(singular(keyName1));
    mutationObj[temp1] = {};

    for (const col in obj[key]) {
      mutationObj[temp1][col] = obj[key][col];
    }
    //Createing delete mutation for each nonJoinTable
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



//Regex for GraphQL syntax, spacing, and indentation
const replacerOne = (str) => {
  str = JSON.stringify(str)
  //console.log('before regex:', str)
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
      .replace(/: true/g, "")
      .replace(/,\n/g, ',\n  ')
      .replace(/\(\n/g, '(\n  ')
      .replace(/\(\n  _id :ID!\n\)/g, '(_id: ID!)');//creates new line for delete mutations
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
  output = output.replace(/,\n.*\]/g,""); //removing the keys to foreign tables, adam check if this works so easily..?
  //replace the vertical lines we subed for brackets in [String] to protect it from replacerone func
  output = output.replace(/\|String\|/g, "[String]");
  return output.slice(1, -1) + '\n\n}'; ////////////////////////////////////////

}


module.exports = { convertTypesforMutation, addNullableFields, mutation, replacerOne };
