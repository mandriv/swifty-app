// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// modules
const envCheck = require('./util/envCheck');


// load environment variables
const env = dotenv.config();
if (env.error) {
  throw env.error;
}
try {
  envCheck(env.parsed);
} catch (error) {
  console.error(error); // eslint-disable-line
  process.exit(1);
}

const app = express();

// settings
// app.set('trust proxy', true);

// gobal midlleware
app.use(bodyParser.json());

// routes
// app.use('/', apiRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Magic is happening on port ${port}!`); // eslint-disable-line
});
