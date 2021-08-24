-- //get all tables in the db
-- //get the columns, column types, primary key, foreign key
-- //

-- Easiest way: one longass command that will provide all of above
-- we cant do easiest way because there is no way of saving the separate info we need for use later

-- More annoying: 
--   query every single table
--   list out table keys?(lol) and types
--   list out its pks and fks

--   json it and save as below:

--   for loop and set a variable for each link

-- is info coming as JSON? then .json() it individually
-- {}

-- 1. query for all table names

-- SELECT table_name
--    FROM information_schema.tables
--   WHERE table_schema='public'
--     AND table_type='BASE TABLE';


-- 2. query each table for columns, column types, primary key, foreign keys
--   each query would return multiple columns, column types, ONE pk, multiple fks
--   {
--     tableName: people
--     columns: [[_id, integer], [gender, charvar]],
--     pk: 3,
--     fk: {
--       fk0: {
--         foreign-key: species_id,
--         table: species,
--         column_id: _id
--       },
--       fk1: {
--       }
--     },
--     referenced_by:  {
--       rb0: {
--         from_table: people_in_films,
--         from_key: person_id,
--         column_id: _id
--       },
--       fk1: {
--       }
--     }
--   }

-- --find all tables in DB
-- const arrayTables = db.query('put in query here')
-- arraytables = [planest, pilots, films, etc]
-- -- query each table for columns, column types, primary key, foreign keys
-- const allTables = [arrayTables[0], arrayTables[1], etc]
-- for(let i = 0; i < arrayTables.length; i++) {
--   const eachTable = await db.query() -- 'SELECT ${arraytables[i]} from ______'
--   allTables.push(eachTable) -- [{name: planets},{},{}]
-- }
-- next()
-- -- 
-- -- 
-- -- 
-- -- 
-- -- 
-- -- 
-- -- 
-- -- WHERE $1 = 
await db.any('', [$1,$2])
await db.any('SELECT * FROM users WHERE name = $1', 'John')



--column data
const columnQuery = `select table_name, column_name, ordinal_position, column_default, data_type, udt_name
from information_schema.columns
where table_name = $1`
db.any(columnQuery, array[i])

select table_name, column_name, ordinal_position, column_default, data_type, udt_name
from information_schema.columns
where table_name = 'films'

--foreign keys on table
--kcu: key column usage 
--rel_tco: table constraints
--rco: referential_constraint
select kcu.table_name as foreign_table,
          '>-' as rel,
          rel_tco.table_name as primary_table,
          string_agg(kcu.column_name, ', ') as fk_columns,
          kcu.constraint_name
   from information_schema.table_constraints tco
   join information_schema.key_column_usage kcu
             on tco.constraint_schema = kcu.constraint_schema
             and tco.constraint_name = kcu.constraint_name
   join information_schema.referential_constraints rco
             on tco.constraint_schema = rco.constraint_schema
             and tco.constraint_name = rco.constraint_name
   join information_schema.table_constraints rel_tco
             on rco.unique_constraint_schema = rel_tco.constraint_schema
             and rco.unique_constraint_name = rel_tco.constraint_name
   where tco.constraint_type = 'FOREIGN KEY'
   group by kcu.table_schema,
            kcu.table_name,
            rel_tco.table_name,
            rel_tco.table_schema,
            kcu.constraint_name
   order by kcu.table_schema,
            kcu.table_name


--Primary key query
select kcu.table_name,
       tco.constraint_name,
       string_agg(kcu.column_name,', ') as Primary_key_columns
from information_schema.table_constraints tco
join information_schema.key_column_usage kcu 
     on kcu.constraint_name = tco.constraint_name
     and kcu.constraint_schema = tco.constraint_schema
     and kcu.constraint_name = tco.constraint_name
--where tco.constraint_type = 'PRIMARY KEY'
group by tco.constraint_name,
       kcu.table_schema,
       kcu.table_name
order by kcu.table_schema,
         kcu.table_name;


--Primary Key && Foreign Key
select kcu.table_name as foreign_table,
          '>-' as rel,
          rel_tco.table_name as primary_table,
          string_agg(kcu.column_name, ', ') as fk_columns,
          kcu.constraint_name,
          tco.constraint_type
   from information_schema.table_constraints tco
   join information_schema.key_column_usage kcu
             on tco.constraint_schema = kcu.constraint_schema
             and tco.constraint_name = kcu.constraint_name
   join information_schema.referential_constraints rco
             on tco.constraint_schema = rco.constraint_schema
             and tco.constraint_name = rco.constraint_name
   join information_schema.table_constraints rel_tco
             on rco.unique_constraint_schema = rel_tco.constraint_schema
             and rco.unique_constraint_name = rel_tco.constraint_name
   where tco.constraint_type = 'FOREIGN KEY' 
   group by kcu.table_schema,
            kcu.table_name,
            rel_tco.table_name,
            rel_tco.table_schema,
            kcu.constraint_name,
            tco.constraint_type
   order by kcu.table_schema,
            kcu.table_name

select kcu.table_name,
       tco.constraint_name,
       string_agg(kcu.column_name,', ') as Primary_key_columns
from information_schema.table_constraints tco
join information_schema.key_column_usage kcu 
     on kcu.constraint_name = tco.constraint_name
     and kcu.constraint_schema = tco.constraint_schema
     and kcu.constraint_name = tco.constraint_name
where tco.constraint_type = 'PRIMARY KEY'
group by tco.constraint_name,
       kcu.table_schema,
       kcu.table_name
order by kcu.table_schema,
         kcu.table_name;