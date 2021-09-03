const express = require("express");
const router = express.Router();

const sqlController = require("./controllers/sqlController.js");
const gqlController = require("./controllers/gqlController.js");

router.post(
  "/uri",
  sqlController.getTableData,
  // sqlController.visualize,
  gqlController.makeSchemaTypes,
  gqlController.makeSchemaMutations,
  gqlController.makeSchemaQueries,
  // gqlController.makeSchema,
  // gqlController.makeResolver,
  (req, res) =>
    res.status(200).json({
      allTables: res.locals.data.allTables,
      foreignKeys: res.locals.data.foreignKeys,
      primaryKeys: res.locals.data.primaryKeys,
      schemaTypes: res.locals.schemaTypes,
      schemaMutations: res.locals.schemaMutations,
      schemaQueries: res.locals.schemaQueries
    })
);


module.exports = router;
