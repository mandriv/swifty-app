# Server
Server runs as express.js app on node instance. We are using ES6/7/8 syntax through babel transpiler.
Server runs on heroku instance. [Here's the link.](https://cs317-swifty.herokuapp.com/)

### Set up
0. Make sure you have npm, node and yarn installed.
1. When in `/server` directory, install all the dependencies - `yarn install`
2. Create `.env` file with all the needed environmental variables

### Run in development
1. `yarn dev` - this should start nodemon server which will automatically restart on any change
2. I suggest using tools like [Postman](https://www.getpostman.com/) for API testing

### API
Proposed API spec can be found [here.](https://github.com/mandriv/swifty-app/blob/master/server/API.md)
