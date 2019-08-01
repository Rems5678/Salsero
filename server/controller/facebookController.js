const pg = require('pg');
const conString = process.env.POSTGRES_URL;

// client.connect((err) => {
//   if (err) return console.error('could not connect to postgres', err);
//   client.query('insert into events()', (err, result) => {
//     if (err) return console.error('error running query', err);
//     events = result.rows;
//     client.end();
//   })
// })