---
title: Styleguide Alignment
---

# Styleguide Alignment

- Follow polymer: Google Styleguide
- Adjustments for NodeJS
- JSdoc conformations
- Setup

# Adjustments for NodeJS

# Warn when unintentionally called callback multiple times

## Bad

```
function foo(err, callback) {
    if (err) {
        callback(err);
    }
    callback();
}
```

## Good

```
function foo(err, callback) {
    if (err) {
        return callback(err);
    }
    callback();
}
```

# No mixing of require definitions and variable declarations

## Bad

```
/*eslint no-mixed-requires: "error"*/

var fs = require('fs'),
    i = 0;

var async = require('async'),
    debug = require('diagnostics').someFunction('my-module'),
    eslint = require('eslint');
```


## Good

```
// only require declarations (grouping off)
var eventEmitter = require('events').EventEmitter,
    myUtils = require('./utils'),
    util = require('util'),
    bar = require(getBarModuleName());

// only non-require declarations
var foo = 42,
    bar = 'baz';

// always valid regardless of grouping because all declarations are of the same type
var foo = require('foo' + VERSION),
    bar = require(getBarModuleName()),
    baz = require();
```

# Require handling of err

## Bad

```
function loadData (err, data) {
    doSomething();
}
```

## Good
```
function loadData (err, data) {
    if (err) {
        console.log(err.stack);
    }
    doSomething();
}

function generateError (err) {
    if (err) {}
}
```

# No `process.exit()`



# JsDoc Conformations

## Callback declarations

- Lot of work to do it the offical way without clear benefits
- Just define the callback value in the return statement, and document the
    callback function as a function

## What is 'a lot of work'?

```
/**
 * Send a request.
 * @param {requestCallback} cb - The callback that handles the response.
 */

/**
 * This callback is displayed as a global member.
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
```

# Setup

## Auto fixing files
`eslint --fix path/to/my/file.js`

## Install styleguide

- Eslint Dev as dependency
- Install .eslintrc.js file, but how to syndicate rules?
	- Have one repo that's included in eslintrc containing all rules
- All touched files must be auto fixed,
	- Lots of whitespace diff in git for a long time
- we run an auto script over everything?
- Gulp-eslint






