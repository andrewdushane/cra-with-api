const sendJSONResponse = (status, content) => (req, res) => {
  res.status(status);
  res.json(content);
};

module.exports = {
  sendJSONResponse,
};
