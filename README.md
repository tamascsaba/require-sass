require-sass
============================

This is a Node.JS `require` extension that enables requiring sass files.

# Install
Install via npm:
```
npm install require-sass
```
# Use

During the boot up process of your application, require `require-sass` once;
```
require('require-sass')(options, variables, extensions);
```
You can add options, variables and extensions all is optional.
After this point, all sass files is requireable.

# Parameters

### options
node-sass options

Type: `Object`
Default: `{
  sourceMap: false,
  sourceMapEmbed: false,
  sourceMapContents: false,
  base64Encode: false,
  outputStyle: "compressed"
}`

### variables
Extra variables which overwrite !default vars.

Type: `Object`
Default: `{}`

### extensions
Which extensions register to ```require.extensions```

Type: `Array`
Default: `['.sass', '.scss']`

# Sample

#### sample.scss
```
$background: red !default;
body {
   background: $background;
}
```

#### app.js
```
// Initialize
require('require-sass')();

// Get sample.scss
var sample = require("./sample.scss");
console.log(sample); // body{background:red;}
```

# Configuration
It is possible to configure the require extension upon initialization:
```
// Initialize
require('require-sass')({
    sourceMap: true,
    outputStyle: "compressed"
});
```

You can also add extra variables, which overwrite !default value
```
// Initialize
require('require-sass')(null, {
    background: "blue";
});
```
