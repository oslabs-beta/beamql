gqlController = {}

gqlController.makeSchemaTypes = async function (req, res, next) {
  try{
    const { allTables, primaryKeys, foreignKeys } = res.locals
    // modify fns in type, mutation, query to pull directly allTables, primaryKeys, foreignKeys

    // invoke typeAllFns on necessary 
      //fkeytuplemaker
      //alltablemaker
      //nullablemaker
      //etc maker
  

    const final = mutationDaddy(info)
    res.locals.info = info
    return next()




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




gqlController.makeResolver = function(req, res, next) {
  let resolvers = ``;
  //loop thru all table data
    //loop thru fktable
      //if curr el of fkttable (subarray) 1st element (string of table name) is the same as the 1st element (also string table name) of current subarray of all table data.
        //then now check if number of properties of atd second element is > than number of properties of fkt second element
          //if so then we have a non-join table to make query resolvers for
          //
}


export default gqlController;
