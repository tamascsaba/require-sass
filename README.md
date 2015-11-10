Require sass
============================

This is a Node.JS `require` extension that enables requiring sass files.

# Install
Install via npm:

    npm install require-sass

# Use

During the boot up process of your application, require `require-sass` once;

    require('require-sass');

After this point, you can require any .sass files.

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
