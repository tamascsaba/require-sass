var fs = require('fs');
var sass = require('node-sass');
var merge = require('./merge');

var options = {
  includePaths: [__dirname],
  sourceMap: false,
  sourceMapEmbed: false,
  sourceMapContents: false,
  base64Encode: false,
  outputStyle: "compressed"
};

var variables = {};

function requireSass(m, f) {
  var data = sassVariables(variables) + sassImport(f);
  var sassOptions = merge(options, {data: data});

  var result = sass.renderSync(sassOptions);
  m.exports = result.css.toString();
};

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

/**
 * Helper functions
 */
function sassVariable(name, value) {
  return "$" + name + ": " + value + ";";
}

function sassVariables(variablesObj) {
  return Object.keys(variablesObj).map(function (name) {
    return sassVariable(name, variablesObj[name]);
  }).join('\n')
}

function sassImport(path) {
  return "@import '" + path + "';";
}
