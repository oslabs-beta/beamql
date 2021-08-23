import Pool from "pg";
const PG_URI = "fill in here";
const example_URI =
  "postgres://vdnvhfkq:sYiMTdCmk1vs2br_eUrrmX1unPvfucdW@batyr.db.elephantsql.com/vdnvhfkq";
import fs from "fs";
const sqlQuery = fs.readFileSync("server/Sql_Query.sql", "utf8");

interface Controller {}

//need to connect to PSQL PG_URI | example_URI
const sqlController: Controller = {};
/*

const arrayTables = db.query('put in query here')
arraytables = [planest, pilots, films, etc]
-- query each table for columns, column types, primary key, foreign keys
const allTables = [arrayTables[0], arrayTables[1], etc]
for(let i = 0; i < arrayTables.length; i++) {
  const eachTable = await db.query() -- 'SELECT ${arraytables[i]} from ______'
  allTables.push(eachTable) -- [{name: planets},{},{}]
}
next()

 */

interface Table {
  //fill this in later
  name: string;
  age: number;
  height?: number;
}
//coming from router get request to '/uri'
sqlController.getTableData = async function () {
  try {
    //what type are we getting here?
    const arrayTables = await db.query(`find all tables query`);
    const tableData: any[] = [];
    for (let i = 0; i < arrayTables.length; i++) {
      //what type are we getting here?
      const eachTable = await db.query(`gets table data`);
      tableData.push(eachTable);
    }
    res.locals.tableData = tableData; // will be an array of table objects
    return next();
  } catch (err) {
    console.log("HIT CATCH ERROR IN sqlC.getTableData: ", err);
    return next({
      log: `sqlController.getTableData: Error: ${err}`,
      message: {
        err: `Error occured in sqlController.getTableData. Check server logs for more details.`,
      },
    });
  }
};

sqlController.visualize = function () {
  try {
  } catch (err) {}
};
