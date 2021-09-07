const { singular } = require('pluralize');
const camelCase = require('camelcase');
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
  typeCreator,
  brianFunction
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
    const [joinTable, nonJoinTable] = nonAndJoinTables(fKeyCounts, allKeyCounts, fKeysObj, tablesObj);
    //Add nonJoinTable to res.locals.data for later use
    res.locals.data.nonJoinTable = nonJoinTable;
    //Creates object with foreign keys from non join tables
    const fktObjNoJoins = fktNoJoins(fKeysObj, nonJoinTable);
    //Creates the GraphQL Schema Type displayed on the front end.
    const gqlTypes = typeCreator(nonJoinTable, fKeysObj, fktObjNoJoins, nullableObj);
    
    //Adds schema type to res.locals to sent to the front end
    // res.locals.schemaTypes = gqlTypes; // test
/////////////////////////////////////////////////////////////////////
    const finalfinal = brianFunction(gqlTypes)
/////////////////////////////////////////////////////////////////////
    res.locals.schemaTypes = finalfinal

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

// in type, we need a new line before each type ____ MUST BE DONE WITHIN TYPE
// all of type is indented when it should not be MUST BE DONE WITHIN TYPE ?

// last curly bracket of mutation should be on a new line MUST BE DONE WITHIN MUTATION

// need \n before mutation starts DONE

// need \n after typeDefs = ` DONE
// 

gqlController.completeString = function (req, res, next) {
  try {
    const {schemaQueries, schemaMutations, schemaTypes} = res.locals 
    const completeSchemaString =  'const typeDefs = `' + '\n' +
    `${(schemaQueries + '\n\n' + 'type Mutation {\n  ' + schemaMutations.slice(1) + '\n' + schemaTypes.slice(1,-1))}` + '\n' + '`'
    

    res.locals.completeSchemaString = completeSchemaString
    return next();
  } catch (err) {
    console.log("Error in completeString is: ", err);
    return next(err);
  }
}
// convert types for mutation is done in mutation as well as types. do in types, store on res.locals, doesn't need to be done in makeschemamutations again (convertTypesForMutation)
//rename variables i.e. regExFormat/toReplace

gqlController.makeResolvers = async function(req, res, next) {
    try {
        //first build resolvers as a js object, then convert to a string
        const resolvers = {};
        //there are 3 resolver types: Query, Mutation, (and some categorized by the table they relate to)
        resolvers['Query'] = {};
        resolvers['Mutation'] = {};
        //Our logic in building resolvers depends heavily on if a table presents data itself, or is a derivation or "join" table that simply links info from other tables to communicate a higher order thing such as all the people who appear in a given film.  The trademark of a join table is that it only has foreign keys
        const nonJoinTables = {};
        const joinTables = {};
        //loop thru all table data
        for (let [key,val] of Object.entries(res.locals.data.allTables)){
          //count props in fks that match current key
              const fkCount = res.locals.data.foreignKeys.filter(el => el.foreign_table === key).length;
              //if not a join table then we will be doing lots of stuff for this table!
            if (val.length > fkCount+1) {
              nonJoinTables[key] = true;
              //query one
              //look for pk name
              let pkName;
              //find the name of the primary key of the current table
              for (let i = 0; i<res.locals.data.primaryKeys.length; i++) {
                  if (res.locals.data.primaryKeys[i].table_name === key) pkName = res.locals.data.primaryKeys[i].primary_key_columns;
              }
              //if the singular of a word is the same as the plural, we will append 'ById' to the singular 
              let queryKey = singular(key) === key ? `${camelCase(key)}ById` : camelCase(key);
              //add singular query to Query for current table
              resolvers.Query[singular(queryKey)] = `(parent, args) => {\n      const query = 'SELECT * FROM ${key} WHERE ${pkName} = $1';\n      const values = [args.${pkName}];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },`;
              
              //add plural query to Query for current table
              resolvers.Query[camelCase(key)] = `() => {\n      const query = `+`'SELECT * FROM ${key}'`+ `;\n      return db.query(query)\n        .then(data => data.rows)\n        .catch(err =>new Error(err));\n    },`

              //MUTATIONS
              
              //find all of the non primary key colums of the current table.
              const nonPkColumns = []; 
              let nonPkColNums = [];
              let curColNum = 1;
                for(let i = 0; i < val.length; i++){
                    if(i.column_name !== pkName) {
                        nonPkColNums.push(`$${curColNum++}`);
                        nonPkColumns.push(val[i].column_name);
                    }
                }
              
              //add mutation
              resolvers.Mutation[camelCase(`add_${singular(key)}`)] = `(parent, args) => {\n      const query = `+`'INSERT INTO ${key} (${nonPkColumns.join(", ")}) VALUES (${nonPkColNums.join(', ')}) RETURNING *'` +`;\n      const values = (${nonPkColumns.map(el => 'args.'+el)});\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },`;
    
             
              //update mutation
              resolvers.Mutation[camelCase(`update_${singular(key)}`)] = `(parent, args) => {\n      let valList = [];\n      for (const updateKey of Object.keys(args)) {\n        if (updateKey !== '${pkName}') valList.push(args[updateKey]);\n      }\n      valList.push(args.${pkName});\n      const argsArray = Object.keys(args).filter((el) => el !== '${pkName}');\n      let setString = argsArray.map((x, i) => x + ' = $' + (i + 1)).join(', ');\n      const pKArg = '$'+ (argsArray.length + 1);\n      const query = 'UPDATE ${key} SET '+ setString +' WHERE ${pkName} = '+pKArg+' RETURNING *';\n      const values = valList; \n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },`
                
              //delete mutation
              resolvers.Mutation[camelCase(`delete_${singular(key)}`)] = `(parent, args) => {\n      const query = 'DELETE FROM ${key} WHERE ${pkName} = $1 RETURNING *';\n      const values = [args.${pkName}];\n      return db.query(query, values)\n        .then(data => data.rows[0])\n        .catch(err => new Error(err));\n    },`
              
            } else {
                //if its number of cols is indeed num of fks +1 then dont do any of the above and just add to join tables
                joinTables[key] = true;
            }
        }

        //loop through pks and add as values in joinTables and nonJoinTables for ref
        for (let k = 0; k< res.locals.data.primaryKeys.length; k++) {
            const pkObjRef = res.locals.data.primaryKeys[k];
            if (pkObjRef.table_name in nonJoinTables) nonJoinTables[pkObjRef.table_name] = pkObjRef.primary_key_columns;
            else joinTables[pkObjRef.table_name] = pkObjRef.primary_key_columns;
        }

        //INDIVIDUAL TABLE RESOLVERS
        
        //loop through nonjointables
        for (let key of Object.keys(nonJoinTables)) {
            let pkName;
            for (let i = 0; i<res.locals.data.primaryKeys.length; i++) {
                if (res.locals.data.primaryKeys[i].table_name === key) pkName = res.locals.data.primaryKeys[i].primary_key_columns;
            }
            let resolversTablePropKey = camelCase(singular(key));
            resolversTablePropKey = resolversTablePropKey[0].toUpperCase() + resolversTablePropKey.slice(1);
            resolvers[resolversTablePropKey] = {};
            //loop through foreignKeys
            for (let i = 0; i<res.locals.data.foreignKeys.length; i++) {
                //if any table (join or non join) is referencing this (nonjoin)tables PK
                const fkObj = res.locals.data.foreignKeys[i];
                if (fkObj.primary_table === key) {
                    //add to resolvers[resolversTablePropKey]
                    //if the refing table is a nonjoin
                    if (fkObj.foreign_table in nonJoinTables) {
                        resolvers[resolversTablePropKey][camelCase(fkObj.foreign_table)] = `(pTable) => {\n      const query = 'SELECT * FROM ${fkObj.foreign_table} WHERE ${fkObj.fk_columns} = $1';\n      const values = [pTable.${pkName}];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },`
                    } else {
                    //if the refing table is join
                        //look for all the other nonjoins that join references
                        const otherJoinFkObjs = res.locals.data.foreignKeys.filter(el => el.foreign_table === fkObj.foreign_table && el.primary_table !== key);
                        for (let j = 0; j< otherJoinFkObjs.length; j++) {
                            resolvers[resolversTablePropKey][camelCase(otherJoinFkObjs[j].primary_table)] = `(pTable) => {\n      const query = 'SELECT * FROM ${otherJoinFkObjs[j].primary_table} LEFT OUTER JOIN ${otherJoinFkObjs[j].foreign_table} ON ${otherJoinFkObjs[j].primary_table}.${nonJoinTables[otherJoinFkObjs[j].primary_table]} = ${otherJoinFkObjs[j].foreign_table}.${otherJoinFkObjs[j].fk_columns} WHERE ${otherJoinFkObjs[j].foreign_table}.${fkObj.fk_columns} = $1';\n      const values = [pTable.${pkName}];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },`
                        }
                    }
                    // CHANGED otherJoinFkObjs[j].fk_columns to fkObj.fk_columns
                }
                
                //if this table is referencing another nonjoin's PK
                if (fkObj.foreign_table === key) {
                    resolvers[resolversTablePropKey][camelCase(fkObj.primary_table)] =  `(pTable) => {\n      const query = 'SELECT ${fkObj.primary_table}.* FROM ${fkObj.primary_table} LEFT OUTER JOIN ${key} ON ${fkObj.primary_table}.${nonJoinTables[fkObj.primary_table]} = ${key}.${fkObj.fk_columns} WHERE ${key}.${nonJoinTables[key]} = $1';\n      const values = [pTable.${pkName}];\n      return db.query(query, values)\n        .then(data => data.rows)\n        .catch(err => new Error(err));\n    },`
                }
            }
        } 
        let output = "const resolvers = {";
        for(let [key,val] of Object.entries(resolvers)){
            //add top level properties to output
            output += `\n  ${key}: {`;
          //add tier2 props to output for current tier1
            for(let [innerKey,innerVal] of Object.entries(val)) {
              output += (`\n    ${innerKey}: `+ innerVal);
            }
            output += `\n  },`;
        }
        output += "\n}";  
        res.locals.resolvers = output;
        return next();
        // return resolvers;  
    } catch (err) {
        console.log('ERR IN MAKERESOLVERS', err);
        return next(err);
    }
}


module.exports = gqlController;
