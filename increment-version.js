const fs = require('fs');

// Read package.json
const packageJson = require('./dist/package.json');

// Increment patch version
const versionParts = packageJson.version.split('.');
versionParts[2] = parseInt(versionParts[2]) + 1;
packageJson.version = versionParts.join('.');

// Write package.json
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));
