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
} = require('../gqlcorp/typeMain.js')


gqlController.makeSchemaTypes = async function (req, res, next) {
  try{
    const { allTables, foreignKeys } = res.locals.data
      
    const nullableObj = isNullable(allTables)
      
    const tablesTuples = dataTupleMaker(allTables)
     
    const fKeyTuples = fkTupleMaker(foreignKeys)
    
    const fKeyCounts = countTupleKeys(fKeyTuples)
      
    const allKeyCounts = countTupleKeys(tablesTuples)
      
    const [fKeysObj, tablesObj] = tuplesToObjects(fKeyTuples, tablesTuples)
    
    const [joinTable, nonJoinTable] = nonAndJoinTables(fKeyCounts, allKeyCounts, fKeysObj, tablesObj)
    
    const fktObjNoJoins = fktNoJoins(fKeysObj, nonJoinTable)
    
    const gqlTypes = typeCreator(nonJoinTable, fKeysObj, nullableObj) 
      console.log(`gqlTYPES-gqlController`, gqlTypes);
    
    return (next);

  } catch (err) {
    console.log('Error in makeSchema is: ', err)
    return next(err);
  }
}

gqlController.makeSchemaQueries = async function (req, res, next) {
  try{
    const { allTables, primaryKeys, foreignKeys } = res.locals
    // modify fns in type, mutation, query to pull directly allTables, primaryKeys, foreignKeys
    // 1
    //2
    //3
    // invoke typeAllFns on necessary 
      //fkeytuplemaker
      //alltablemaker
      //nullablemaker
      //etc maker
    // invoke mutationAll on necessary
      //
      //
      //
      //
      //
      //
    //  invoke 

    const final = mutationDaddy(info)
    res.locals.info = info
    return next()




  } catch (err) {
    console.log('Error in makeSchema is: ', err)
    return next(err);
  }
}
gqlController.makeSchemaMutations = async function (req, res, next) {
  try{
    const { allTables, primaryKeys, foreignKeys } = res.locals
    // modify fns in type, mutation, query to pull directly allTables, primaryKeys, foreignKeys
    // 1
    //2
    //3
    // invoke typeAllFns on necessary 
      //fkeytuplemaker
      //alltablemaker
      //nullablemaker
      //etc maker
    // invoke mutationAll on necessary
      //
      //
      //
      //
      //
      //
    //  invoke 

    const final = mutationDaddy(info)
    res.locals.info = info
    return next()




  } catch (err) {
    console.log('Error in makeSchema is: ', err)
    return next(err);
  }
}




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
