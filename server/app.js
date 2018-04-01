// dependencies
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// modules
import envCheck from './util/envCheck';
import apiRouter from './util/apiRouter';
// load environment variables
const env = dotenv.config();
if (env.error && process.env.NODE_ENV !== 'production') {
  throw env.error;
}
try {
  envCheck(env.parsed);
} catch (error) {
  console.error(error); // eslint-disable-line
  process.exit(1);
}

// initialize app
const app = express();

// gobal midlleware
app.use(bodyParser.json());

// routes
app.use('/', apiRouter);

// start the app
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Magic is happening on port ${port}!`); // eslint-disable-line
});
