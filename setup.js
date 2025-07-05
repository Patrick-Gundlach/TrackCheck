const { execSync } = require('child_process');
const fs = require('fs');

function installPackages() {
  execSync('npm install', { stdio: 'inherit' });
}

function copyEnvFile() {
  if (!fs.existsSync('.env') && fs.existsSync('.env.example')) {
    fs.copyFileSync('.env.example', '.env');
    console.log('.env file created');
  }
}

function setup() {
  installPackages();
  copyEnvFile();
}

setup();
