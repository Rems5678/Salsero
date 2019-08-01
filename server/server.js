const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const eventRouter = require('./routes/eventRouter.js');
const port = process.env.PORT;


app.use(bodyParser.json());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.use('/api', eventRouter);

app.use('*', (req, res, next) => {
  res.status(400).send('route could not be found');
})

app.use((err, req, res, next) => {
  const error = {
    message: 'an error occurred',
    err: err
  }
  res.send(error);
})
app.listen(port, (err) => {
if (err) return new Error(`there was an issue listening on port ${port}`)
console.log(`listening on port ${port}`);
})