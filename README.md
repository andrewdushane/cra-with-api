## Getting started

 - Clone this respository
 - Make sure you're running at least Node 6.x and NPM 3.x
 - Easily run multiple node versions using [nvm](https://github.com/creationix/nvm/blob/master/README.markdown)
 - run `npm isntall`, or if you have [yarn](https://code.facebook.com/posts/1840075619545360) installed locally, run `yarn`

## API

 - Run `npm run server` to start the API server 
 - Server will listen on port 5005
 - The production build of the front-end will be running at `localhost:5005`
 - `DB_URI`: Connection string for a MongoDB database.
   - Defaults to `localhost/exampleDB`.
   - `mongod` or the equivalent needs to be running to use a local database
   - Database connection is configured with [mongoose](http://mongoosejs.com/)
 - `NODE_ENV`: set to `production` to run production server on port 80

## User Interface

 - To run the front-end development server:
   - Run `npm start`
   - A new browser window will open to `localhost:3000`
 - API calls will proxy to `localhost:5005`
  - This enables you to run your development frontend and development server concurrently on different ports
  - In production, API requests will be local (`'/'`)
 - Bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
 - Basic CRA structure with the addition of [redux](https://github.com/reactjs/redux)
 - Run tests: `npm run test`
