const fetch = require('node-fetch');

async function checkForUpdate(url, currentVersion) {
  if (!url) {
    console.log('No update URL defined');
    return;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log('Update check failed');
      return;
    }
    const data = await res.json();
    if (data.version && data.version !== currentVersion) {
      console.log(`Update available: ${data.version}`);
    } else {
      console.log('No update available');
    }
  } catch (err) {
    console.log('Could not check for updates');
  }
}

module.exports = { checkForUpdate };
