var assert = require('assert');

var defaultOptions = {
  sourceMap: false,
  sourceMapEmbed: false,
  sourceMapContents: false,
  base64Encode: false,
  outputStyle: 'compressed',
};
var newOptions = {bar: 'foo'};
var variables = {background: 'blue'};

var requireSass = require('./index')(newOptions, variables);

//Set new options
var options = defaultOptions;
options.bar = 'foo';
assert.deepEqual(requireSass.options, options, 'Set options');
assert.deepEqual(requireSass.variables, variables, 'Set variables');

var sample = require('./sample.scss');

//Test sample scss
assert.equal(sample, 'body{background:blue;color:#fff}\n', 'Require sass file');

