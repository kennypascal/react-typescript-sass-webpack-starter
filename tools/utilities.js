const package = require('../package.json');

function getEnvironment() {
  return process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
}

function getVersion() {
  return package.version ? package.version : '';
}

function getName() {
  return package.name ? package.name : 'no-name';
}

function getTitle() {
  return package.title ? package.title : 'no-title';
}

function getAssetFilename(filename = '') {
  return (getName() !== '' ? `${getName()}-` : '') + (getVersion() !== '' ? `${getVersion()}-` : '') + filename;
}

module.exports = {
  // returns the package title
  getTitle,

  // returns a string used to name index files
  getIndexName: getName,

  // returns the constucted file name for Javascript, CSS and asset files.
  getAssetFilename,

  // returns the environment
  getEnvironment
};
