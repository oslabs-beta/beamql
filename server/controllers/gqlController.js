const { singular } = require('pluralize');
const gqlController = {}
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
    typeCreator
} = require('../gqlcorp/typeMain.js');

const { convertTypesforMutation, addNullableFields, mutation, replacerOne } = require('../gqlcorp/mutation.js');

const { camelCaseIt, queryCreator } = require('../gqlcorp/query.js');


gqlController.makeSchemaTypes = async function (req, res, next) {
  try{
    const { allTables, foreignKeys } = res.locals.data;
      
    const nullableObj = isNullable(allTables);
    res.locals.data.nullableObj = nullableObj
    const tablesTuples = dataTupleMaker(allTables);
    
    const fKeyTuples = fkTupleMaker(foreignKeys);

    const fKeyCounts = countTupleKeys(fKeyTuples);
    
    const allKeyCounts = countTupleKeys(tablesTuples);
    
    const [fKeysObj, tablesObj] = tuplesToObjects(fKeyTuples, tablesTuples);

    const [joinTable, nonJoinTable] = nonAndJoinTables(fKeyCounts, allKeyCounts, fKeysObj, tablesObj);
    
    res.locals.data.nonJoinTable = nonJoinTable
    const fktObjNoJoins = fktNoJoins(fKeysObj, nonJoinTable);
    const gqlTypes = typeCreator(nonJoinTable, fKeysObj, nullableObj);
    
    res.locals.schemaTypes = gqlTypes;

    return next();

  } catch (err) {
    console.log('Error in makeSchemaTypes is: ', err)
    return next(err);
  }
}




gqlController.makeSchemaMutations = async function (req, res, next) {
    try{
        const { nullableObj, nonJoinTable } = res.locals.data;
        const nonjoinTablewithCorrectTypes = convertTypesforMutation(nonJoinTable);
        res.locals.data.nonjoinTablewithCorrectTypes = nonjoinTablewithCorrectTypes;
        const mutatableObject = addNullableFields(nonjoinTablewithCorrectTypes, nullableObj);

        const regExFormat = mutation(mutatableObject)

        const completeMutation = replacerOne(regExFormat);

        res.locals.schemaMutations = completeMutation;
        console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM', completeMutation)
        return next();
      
  } catch (err) {
    console.log('Error in makeSchemaMutations is: ', err)
    return next(err);
  }
}


gqlController.makeSchemaQueries = async function (req, res, next) {
  try{
      const { nonjoinTablewithCorrectTypes,
      } = res.locals.data;
      
      const completeQuery = queryCreator(nonjoinTablewithCorrectTypes);
      res.locals.schemaQueries = completeQuery;
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ', completeQuery)
      return next();
  } catch (err) {
    console.log('Error in makeSchemaQueries is: ', err)
    return next(err);
  }
}

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


