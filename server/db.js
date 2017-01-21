const mongoose = require('mongoose');

const dbURI = `mongodb://${process.env.DB_URI || 'localhost/exampleDB'}`;

console.log(`database URI: ${dbURI}`);

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// Disconnect from database and log shutdown event
const gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// Listen for server shutdown events
// Disconnect database before shutting down
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

// Require models
