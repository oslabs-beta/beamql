const { singular } = require("pluralize");

//capitalize first letter of any string
function capFirstLet(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//convert any_thing like-this or.this toCamelCase
const camelCaseIt = (string) =>
  string
    .toLowerCase()
    .trim()
    .split(/[.\-_\s]/g)
    .reduce((string, word) => string + word[0].toUpperCase() + word.slice(1));

//Create schema query via nonJoinTablewithCorrectTypes as passed in argument.
const queryCreator = (object) => {
  const queryObject = {};

  for (const table in object) {
    // creating keys
    const camelCaseName = camelCaseIt(table); //starshipSpecs
    const ccnWithID = singular(camelCaseName) === camelCaseName ? `${camelCaseName}ById(_id:ID!)` : camelCaseName+"(_id:ID!)";
    // const ccnWithID = singular(camelCaseName) + "(_id:ID!)"; // starshipSpecs(_id: ID!)
    // creating values
    const titleCaseWithBang = capFirstLet(singular(camelCaseName)) + "!"; // StarshipSpec!
    const pluralValue = "[" + titleCaseWithBang + "]!"; // [StarshipSpec!]!
    //assign key value pairs in obj
    queryObject[camelCaseName] = pluralValue;
    queryObject[ccnWithID] = titleCaseWithBang;
  }
  let queryStr = JSON.stringify(queryObject);
  //regex to display correct spacing and indentation on the front-end
  queryStr =
    "type Query " +
    queryStr
      .replace(/"/g, "")
      .replace(/,/g, "\n\t")
      .replace(/{/g, "{\n\t")
      .replace(/}/g, "\n}")
      .replace(/:/g, ": ");

  return queryStr;
};


module.exports = { camelCaseIt, queryCreator };
