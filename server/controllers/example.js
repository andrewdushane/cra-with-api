const { sendJSONResponse } = require('./util');

const sendMessage = sendJSONResponse(200, {
  message: 'Data received from API',
});

module.exports = { sendMessage };
