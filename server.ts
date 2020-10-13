import express from 'express';
const bodyparser = require('body-parser');
const cors = require('cors');
const router = require('./routes');


const app : express.Application = express();
app.use(cors());
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());


app.use('/', router);

app.listen(4000, () => console.log('Now browse to localhost:4000/'));

module.exports = app;