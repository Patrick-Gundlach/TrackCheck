const express = require('express');
const { currentVersion } = require('../config/version');
const { checkForUpdate } = require('./updateCheck');

const app = express();
const port = process.env.PORT || 3000;
const updateUrl = process.env.UPDATE_URL;

app.get('/version', (req, res) => {
  res.json({ version: currentVersion });
});

function startServer() {
  app.listen(port, () => {
    console.log(`TrackCheck running on port ${port}`);
    console.log(`Current version: ${currentVersion}`);
    checkForUpdate(updateUrl, currentVersion);
  });
}

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };

