var fs = require('fs');
var sass = require('node-sass');
var merge = require('./merge');

// Defaults
var options = {
  sourceMap: false,
  sourceMapEmbed: false,
  sourceMapContents: false,
  base64Encode: false,
  outputStyle: "compressed"
};
var variables = {};

// Main export
module.exports = function(opts, vars, exts) {
  options = merge(options, opts);
  variables = merge(variables, vars);

  var extensions = exts || ['.scss', '.sass'];
  for (var i = 0; i < extensions.length; i++) {
    require.extensions[extensions[i]] = requireSass;
  }

  return {
    options: options,
    variables: variables,
    exts: extensions
  }
}

// Helper functions
function requireSass(mod, file) {
  var data = sassVariables(variables) + sassImport(file);
  var sassOptions = merge(options, {data: data});
  var result = sass.renderSync(sassOptions);

  mod.exports = result.css.toString();
};

function sassVariable(name, value) {
  return "$" + name + ": " + value + ";";
}

function sassVariables(variablesObj) {
  return Object.keys(variablesObj).map(function (name) {
    return sassVariable(name, variablesObj[name]);
  }).join('\n');
}

function sassImport(path) {
  return "@import '" + path + "';";
}
