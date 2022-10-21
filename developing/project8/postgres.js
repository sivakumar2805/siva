const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123456',
  host: '192.168.1.4',
  database: 'mydatabase',
  port: 5432,
});

module.exports = pool;

// WITH exampleData AS (
//     SELECT param#>>'{items}' as totalitems
// 	)
//   insert into items(itemname,quantity,price)
// SELECT (
//     SELECT   ( itemname -> 'itemname')::varchar,
//                     ( quantity -> 'quantity')::int,
//                     ( price -> 'price')::int
//     FROM json_array_elements(totalitems) AS ite
// )

// FROM exampleData;
