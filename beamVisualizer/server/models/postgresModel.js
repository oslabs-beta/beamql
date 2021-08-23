  // import Pool from 'pg';
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://ycmhdnyk:pNpg9xHq_KEAifOWMLk0qjdO7Wto9IF8@chunee.db.elephantsql.com/ycmhdnyk'
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

/*

Hold value for each user of 

POSTGRES INFO



assign foreign keys only after creating new tables that it will reference

still needs foreign ID of base currency 

tables below are created and submitted

CREATE TABLE user_table ( 
  user_id VARCHAR PRIMARY KEY, 
  amt_usd NUMERIC(30,2) NOT NULL CHECK (amt_usd >= 0.00), 
  fav_rates SMALLINT[] NOT NULL FOREIGN KEY, 
  base_currency SMALLINT NOT NULL FOREIGN KEY
  token
  )


CREATE TABLE currency_descriptions (
  currency_id SERIAL PRIMARY KEY,
  currency_name VARCHAR(50) NOT NULL,
  currency_acronym CHAR(3) NOT NULL,
  countries_used VARCHAR[] NOT NULL,
  symbol VARCHAR(1),
  );


CREATE TABLE currency_history (
  currency_history_id SERIAL PRIMARY KEY,
  currency_id int NOT NULL REFERENCES currency_descriptions,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  exchange_rate_USD NUMERIC(20, 10) NOT NULL
);


CREATE TABLE positions (
  position_id SERIAL PRIMARY KEY,
  currency_id int NOT NULL REFERENCES currency_descriptions,
  local_value NUMERIC(30, 10) NOT NULL,
  user_id VARCHAR NOT NULL REFERENCES user_table
);
  
*/
