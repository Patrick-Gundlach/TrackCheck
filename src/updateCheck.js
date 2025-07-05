const fetch = require('node-fetch');
const fs = require('fs').promises;

async function checkForUpdate(url, currentVersion) {
  if (!url) {
    console.log('No update URL defined');
    return;
  }
  try {
    let data;
    if (url.startsWith('file://')) {
      const filePath = url.slice('file://'.length);
      const content = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(content);
    } else {
      const res = await fetch(url);
      if (!res.ok) {
        console.log('Update check failed');
        return;
      }
      data = await res.json();
    }
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
