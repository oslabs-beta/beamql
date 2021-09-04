const { singular } = require("pluralize");
const gqlController = {};
const {
  capFirstLet,
  snakeToTitle,
  isNullable,
  dataTupleMaker,
  fkTupleMaker,
  countTupleKeys,
  tuplesToObjects,
  nonAndJoinTables,
  fktNoJoins,
  typeCreator,
} = require("../gqlcorp/typeMain.js");

const {
  convertTypesforMutation,
  addNullableFields,
  mutation,
  replacerOne,
} = require("../gqlcorp/mutation.js");

const { camelCaseIt, queryCreator } = require("../gqlcorp/query.js");

//GraphQL Schema Middleware
gqlController.makeSchemaTypes = async function (req, res, next) {
  try {
    //object destructuring to retrieve all table data and foreign key data
    const { allTables, foreignKeys } = res.locals.data;

    //Returns all values that according to the PSQL DB
    const nullableObj = isNullable(allTables);
    //Add nullable object to res.locals.data
    res.locals.data.nullableObj = nullableObj;
    //Make tuples out of table data to store PSQL columns and types to their corresponding tables
    const tablesTuples = dataTupleMaker(allTables);
    //Make tuples out of foreign key data to store PSQL foreign keys to their table and column
    const fKeyTuples = fkTupleMaker(foreignKeys);
    //Convert fkeyTuples and tablesTuples to objects
    const [fKeysObj, tablesObj] = tuplesToObjects(fKeyTuples, tablesTuples);
    //Count foreign keys to use later to determine join and nonJoin tables
    const fKeyCounts = countTupleKeys(fKeyTuples);
    //Count all keys to use later to determine join and nonJoin tables
    const allKeyCounts = countTupleKeys(tablesTuples);
    //Create join and nonJoin table objects from the PSQL DB. PK FK logic to determine whether the table is join or nonJoin
    const [joinTable, nonJoinTable] = nonAndJoinTables(
      fKeyCounts,
      allKeyCounts,
      fKeysObj,
      tablesObj
    );
    //Add nonJoinTable to res.locals.data for later use
    res.locals.data.nonJoinTable = nonJoinTable;
    //Creates object with foreign keys from non join tables
    const fktObjNoJoins = fktNoJoins(fKeysObj, nonJoinTable);
    //Creates the GraphQL Schema Type displayed on the front end.
    const gqlTypes = typeCreator(nonJoinTable, fKeysObj, nullableObj);
    //Adds schema type to res.locals to sent to the front end
    res.locals.schemaTypes = gqlTypes;

    return next();
  } catch (err) {
    console.log("Error in makeSchemaTypes is: ", err);
    return next(err);
  }
};

gqlController.makeSchemaMutations = async function (req, res, next) {
  try {
    //Retrieve nullableObj and nonJoinTable from res.locals via object destructuring
    const { nullableObj, nonJoinTable } = res.locals.data;
    //Convert the nonJoinTable object values (column data type) to correct GraphQL data type i.e. 'character varying' to 'string' or 'integer' to 'int'
    const nonjoinTablewithCorrectTypes = convertTypesforMutation(nonJoinTable);
    //Add nonJoinTablewithCorrecTypes to res.locals
    res.locals.data.nonjoinTablewithCorrectTypes = nonjoinTablewithCorrectTypes;
    //addNullable fields by adding '!' to the appropriate values in the object
    const mutatableObject = addNullableFields(
      nonjoinTablewithCorrectTypes,
      nullableObj
    );
    //Coverts mutableObject syntax to GraphQL readable syntax (still in object form)
    const regExFormat = mutation(mutatableObject);
    //Outputs object in string form, formatted with spacing for GQL
    const completeMutation = replacerOne(regExFormat);
    //add completeMutation to res.locals
    res.locals.schemaMutations = completeMutation;
    return next();
  } catch (err) {
    console.log("Error in makeSchemaMutations is: ", err);
    return next(err);
  }
};

gqlController.makeSchemaQueries = async function (req, res, next) {
  try {
    //Object destructuring to pull nonJoinTablewithCorrectTypes from res.locals
    const { nonjoinTablewithCorrectTypes } = res.locals.data;
    //Creates all queries for each nonJoinTable, outputting as string
    const completeQuery = queryCreator(nonjoinTablewithCorrectTypes);
    res.locals.schemaQueries = completeQuery;
    return next();
  } catch (err) {
    console.log("Error in makeSchemaQueries is: ", err);
    return next(err);
  }
};

// convert types for mutation is done in mutation as well as types. do in types, store on res.locals, doesn't need to be done in makeschemamutations again (convertTypesForMutation)
//rename variables i.e. regExFormat/toReplace

// gqlController.makeResolvers = function(req, res, next) {
//     let resolvers = ``;
//     //loop thru all table data
//     for (let [key,val] of Object.entries(res.locals.allTables)){
//       //count props in fks that match current key
//           const fkCount = res.locals.foreignKeys.filter(el => el.foreign_table === key).length;
//           //if not a join table
//         if (val.length > fkCount+1) {
//           console.log(key);

//         }
//     }

// }

// console.log(gqlController.makeResolvers(null, data, null));

module.exports = gqlController;
