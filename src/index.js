const express = require('express');
const { currentVersion } = require('../config/version');
const { checkForUpdate } = require('./updateCheck');
const { gtmAnalysis } = require('./audits/gtmAnalysis');
const { consentCheck } = require('./audits/consentCheck');
const { cookieCheck } = require('./audits/cookieCheck');

const app = express();
const port = process.env.PORT || 3000;
const updateUrl = process.env.UPDATE_URL;

app.get('/version', (req, res) => {
  res.json({ version: currentVersion });
});

app.listen(port, () => {
  console.log(`TrackCheck running on port ${port}`);
  console.log(`Current version: ${currentVersion}`);
  checkForUpdate(updateUrl, currentVersion);
  // Future audits will be called here
  gtmAnalysis();
  consentCheck();
  cookieCheck();
});
