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

gqlController.makeResolvers = async function(req, res, next) {
    try {
        const resolvers = {};
    resolvers['Query'] = {};
    resolvers['Mutation'] = {};
    const nonJoinTables = {};
    const joinTables = {};
    //loop thru all table data
    for (let [key,val] of Object.entries(res.locals.data.allTables)){
      //count props in fks that match current key
          const fkCount = res.locals.data.foreignKeys.filter(el => el.foreign_table === key).length;
          //if not a join table
        if (val.length > fkCount+1) {
          nonJoinTables[key] = true;
          //query one
          //look for pk name
          let pkName;
          for (let i = 0; i<res.locals.data.primaryKeys.length; i++) {
              if (res.locals.data.primaryKeys[i].table_name === key) pkName = res.locals.data.primaryKeys[i].primary_key_columns;
          }
          let queryKey = singular(key) === key ? `${camelCase(key)}ById` : camelCase(key);
          const beginning = `(parent, args) => {
            const query = `
          const queryText = `'SELECT * FROM ${key} WHERE ${pkName} = $1'`;
          const end =`;
          const values = [args.${pkName}];
          return db.query(query, values)
            .then(data => data.rows[0])
            .catch(err => new Error(err));
        };`
          resolvers.Query[singular(queryKey)] = beginning + queryText + end;
          
          //query many
          resolvers.Query[camelCase(key)] = `() => {
            const query = `+`'SELECT * FROM ${key}'`+ `;
            return db.query(query)
              .then(data => data.rows)
              .catch(err => new Error(err));
          };`
          
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
    
          resolvers.Mutation[camelCase(`add_${singular(queryKey)}`)] = `(parent, args) => {
            const query = `+`'INSERT INTO ${key} (${nonPkColumns.join(", ")}) VALUES (${nonPkColNums.join(', ')}) RETURNING *'` + `;
            const values = nonPkColumns.map(el => args.el);
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          };`;

         

          resolvers.Mutation[camelCase(`update_${singular(queryKey)}`)] = `(parent, args) => {\n  let valList = [];\n  for (const updateKey of Object.keys(args)) {\n    if (updateKey !== '${pkName}') valList.push(args[updateKey]);\n  }\n  valList.push(args.${pkName});\n  const argsArray = Object.keys(args).filter((el) => el !== '${pkName}');\n  let setString = argsArray.map((x, i) => x + ' = $'\n  + (i + 1)).join(', ');\n  const pKArg = '$'+ (argsArray.length + 1);\n  const query = 'UPDATE ${key} SET '+ setString +' WHERE ${pkName} = '+pKArg+' RETURNING *';\n  const values = valList; \n  return db.query(query, values)\n    .then(data => data.rows[0])\n    .catch(err => new Error(err));\n};`

          resolvers.Mutation[camelCase(`delete_${singular(queryKey)}`)] = `(parent, args) => {
            const query = 'DELETE FROM ${key} WHERE ${pkName} = $1 RETURNING *';
            const values = [args.${pkName}];
            return db.query(query, values)
              .then(data => data.rows[0])
              .catch(err => new Error(err));
          };`
          
        } else {
            joinTables[key] = true;
        }
    }
    //loop through pks and add as values in joinTables and nonJoinTables for ref
    for (let k = 0; k< res.locals.data.primaryKeys.length; k++) {
        const pkObjRef = res.locals.data.primaryKeys[k];
        if (pkObjRef.table_name in nonJoinTables) nonJoinTables[pkObjRef.table_name] = pkObjRef.primary_key_columns;
        else joinTables[pkObjRef.table_name] = pkObjRef.primary_key_columns;
    }
    //loop through nonjointables
    for (let key of Object.keys(nonJoinTables)) {
        let pkName;
        for (let i = 0; i<res.locals.data.primaryKeys.length; i++) {
            if (res.locals.data.primaryKeys[i].table_name === key) pkName = res.locals.data.primaryKeys[i].primary_key_columns;
        }
        let resolversTablePropKey = singular(key);
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
                    resolvers[resolversTablePropKey][fkObj.foreign_table] = `(pTable) => {
                        const query = 'SELECT * FROM ${fkObj.foreign_table} WHERE ${fkObj.fk_columns} = $1';
                        const values = [pTable.${pkName}];
                        return db.query(query, values)
                          .then(data => data.rows)
                          .catch(err => new Error(err));
                      }`
                } else {
                //if the refing table is join
                    //look for all the other nonjoins that join references
                    const otherJoinFkObjs = res.locals.data.foreignKeys.filter(el => el.foreign_table === fkObj.foreign_table && el.primary_table !== key);
                    for (let j = 0; j< otherJoinFkObjs.length; j++) {
                        resolvers[resolversTablePropKey][otherJoinFkObjs[j].primary_table] = `(pTable) => {
                            const query = 'SELECT * FROM ${otherJoinFkObjs[j].primary_table} LEFT OUTER JOIN ${otherJoinFkObjs[j].foreign_table} ON ${otherJoinFkObjs[j].primary_table}.${nonJoinTables[otherJoinFkObjs[j].primary_table]} = ${otherJoinFkObjs[j].foreign_table}.${otherJoinFkObjs[j].fk_columns} WHERE ${otherJoinFkObjs[j].foreign_table}.${otherJoinFkObjs[j].fk_columns} = $1';
                            const values = [pTable.${pkName}];
                            return db.query(query, values)
                            .then(data => data.rows)
                            .catch(err => new Error(err));
                        }`
                    }
                }
            }
            
            //if this table is referencing another nonjoin's PK
            if (fkObj.foreign_table === key) {
                resolvers[resolversTablePropKey][fkObj.primary_table] =  `(pTable) => {
                    const query = 'SELECT ${fkObj.primary_table}.* FROM ${fkObj.primary_table} LEFT OUTER JOIN ${key} ON ${fkObj.primary_table}.${nonJoinTables[fkObj.primary_table]} = ${key}.${fkObj.fk_columns} WHERE ${key}.${nonJoinTables[key]} = $1';
                    const values = [pTable.${pkName}];
                    return db.query(query, values)
                      .then(data => data.rows)
                      .catch(err => new Error(err));
                  }`
            }
        }
    } 
        res.locals.resolvers = resolvers;
        return next();
        // return resolvers;  
    } catch (err) {
        console.log('ERR IN MAKERESOLVERS');
        return next(err);
    }
}


module.exports = gqlController;
