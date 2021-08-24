
  // import Pool from 'pg';
  const { Pool } = require('pg');
  let PG_URI;
  const pool = new Pool({
    connectionString: "postgres://vdnvhfkq:sYiMTdCmk1vs2br_eUrrmX1unPvfucdW@batyr.db.elephantsql.com/vdnvhfkq"
  });

  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    }
  };