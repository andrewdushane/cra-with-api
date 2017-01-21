const path = require('path');
const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');

require('./db');

const app = express();

// configure Express
app.use(compress());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.disable('x-powered-by');

// define routes and assets
app.use('/static', express.static(path.join(process.cwd(), '/build/static')));
app.use('/api', require('./routes'));
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/build/index.html'));
});

const port = process.env.NODE_ENV === 'production' ? 80 : Number(process.env.PORT || 5005);
app.listen(port, function () {
  console.log('server running at localhost:' + port);
});
