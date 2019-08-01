const pg = require('pg');
const conString = process.env.POSTGRES_URL;
const client = new pg.Client(conString);

const eventController = {};

let events;

client.connect((err) => {
  if (err) return console.error('could not connect to postgres', err);
  client.query('select * from events', (err, result) => {
    if (err) return console.error('error running query', err);
    events = result.rows;
    client.end();
  })
})

eventController.getEvents = (req, res, next) => {
  res.status(200).json(events);
}


module.exports = eventController;