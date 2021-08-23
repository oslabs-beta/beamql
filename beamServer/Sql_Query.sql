//get all tables in the db
//get the columns, column types, primary key, foreign key
//

Easiest way: one longass command that will provide all of above
we cant do easiest way because there is no way of saving the separate info we need for use later

More annoying: 
  query every single table
  list out table keys?(lol) and types
  list out its pks and fks

  json it and save as below:

  for loop and set a variable for each link

is info coming as JSON? then .json() it individually
{}

1. query for all table names

SELECT table_name
   FROM information_schema.tables
  WHERE table_schema='public'
    AND table_type='BASE TABLE';


2. query each table for columns, column types, primary key, foreign keys
  each query would return multiple columns, column types, ONE pk, multiple fks
  {
    tableName: people
    columns: [[_id, integer], [gender, charvar]],
    pk: 3,
    fk: {
      fk0: {
        foreign-key: species_id,
        table: species,
        column_id: _id
      },
      fk1: {
      }
    },
    referenced_by:  {
      rb0: {
        from_table: people_in_films,
        from_key: person_id,
        column_id: _id
      },
      fk1: {
      }
    }
  }

--find all tables in DB
const arrayTables = db.query('put in query here')
arraytables = [planest, pilots, films, etc]
-- query each table for columns, column types, primary key, foreign keys
const allTables = [arrayTables[0], arrayTables[1], etc]
for(let i = 0; i < arrayTables.length; i++) {
  const eachTable = await db.query() -- 'SELECT ${arraytables[i]} from ______'
  allTables.push(eachTable) -- [{name: planets},{},{}]
}
next()
-- 
-- 
-- 
-- 
-- 
-- 
-- 
-- 
