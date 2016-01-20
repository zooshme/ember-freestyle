/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');
var jsonImporter = require('node-sass-json-importer');

module.exports = function(defaults) {
  var app = new EmberApp({
    // Add options here
    sassOptions: {
      importer: jsonImporter,
      includePaths: [
        'freestyle'
      ]
    },
    snippetSearchPaths: ['tests/dummy/app', 'addon']
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
