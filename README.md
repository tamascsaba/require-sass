require-sass
============================

This is a Node.JS `require` extension that enables requiring sass files.

# Install
Install via npm:

    npm install require-sass

# Use

During the boot up process of your application, require `require-sass` once;

    require('require-sass')(options, variables, extensions);

After this point, you can add options and variables then register the extensions.

# Parameters
### options
Type: `Object`
Default: `null`
You can set node-sass options

### variables
Type: `Object`
Default: `null`
Extra variables which overwrite !default vars.

### extensions
Type: `Array`
Default: `['.sass', '.scss']`
Which extensions register to ```require.extensions```

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
    require('require-sass');

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
