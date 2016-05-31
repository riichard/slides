---
title: NodeJS Introduction
---

# NodeJS Introduction

# Agenda for today
- Briefly: Why nodejs
- Install nodeJS
- Setup your own server with NodeJS
- Explain why NodeJS performs so well

# 1. Briefly: Why nodeJS

# With nodeJS you can set up a server to:
- Connect the webpage with a database to store/show user data
- Have a multi-player game where data gets synced from one player to the other
    player
- Connect with other servers over the TCP protocol

# Advantages of nodeJS

## Paypal case

animate: fade-in
- Built almost twice as fast with fewer people
- Written in 33% fewer lines of code
- Constructed with 40% fewer files

## Paypal case

animate: fade-in

- Double the requests per second vs. the Java application
- 35% decrease in the average response time

# 2. Install nodeJS
- https://nodejs.org/en/download/
- Also install NPM

# Test if nodejs works
- In the terminal, run:
    - `node -v` - Should return `v4.4.5`
    - `npm -v`  - Should return `2.15.5`
    - Make a file called `test.js`, and in the file, write: `console.log('Hello world');`
    - Run the file with `node test.js`

# 3. Make a webserver

---

- Create a folder for your webserver

## app.js
```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
```

## Run it in the terminal

```
node app.js
```


## Woooooow! Error :O

```
~/d/hyf-node ~> node app.js

module.js:340
    throw err;
          ^
Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (/Users/richard/dev/hyf-node/app.js:1:77)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
```

## Express is not installed

## NPM is the best thing about NodeJS

animate: fade-in

- Node Package Manager
- Everything you want to do is already build before
- Easily find code to connect to any data base or API, like mongoDB, Facebook, Google or Twitter
- Like bower, run `npm update` to get the latest version of the library

## Install express
```
npm install express
```

# Run the app again

```
node app.js
```

### Go to:

```
http://localhost:3000
```

# Hello %your name%

## app.js
```
app.get('/', function (req, res) {
    res.send('Hello ' + (req.query.name || 'world'));
});
```

## Restart your webserver
```
[ctrl] + C
```

```
node app.js
```

## We can do that easier

`node-dev` restarts node each time the file changes.

```
npm install -g node-dev
```

## Now every time you want to start running your app:
```
node-dev app.js
```

# Store todo items

---

```
app.post('/todos.json', function(req, res) {

    // Message for the console log
    console.log('writing todos.json');

    // Make a string of the request data
    var jsonBody = JSON.stringify(req.body, null, '    ');

    // Write the string to todos.json
    fs.writeFile('todos.json', jsonBody, function(err) {

        // Send a message back that the request was successful
        res.send(JSON.stringify({ success: true }));
    });
});
```

# Install Postman

---

```
// Load the nodejs file read/write library
var fs = require('fs');

// Parse the body which is in JSON
var bodyParser = require('body-parser');

app.use(bodyParser.json());

```

# Check that the file todos.json exists now

# Add the GET handler

```
// Set the handler for GET on /todos.json
app.get('/todos.json', function(req, res) {
    console.log('getting todos.json');

    // Read the file
    fs.readFile('todos.json', 'utf8', function(err, filedata) {

        // Send the data from the file to the requester
        res.send(filedata);
    });
});
```

# Why NodeJS is awe-some-o

## It's asynchronous

## Asynchrowhat?

## It can do things while it waits on other servers/harddisks

```
app.post('/todos.json', function(req, res) { // I/O

    // Message for the console log
    console.log('writing todos.json');

    // Make a string of the request data
    var jsonBody = JSON.stringify(req.body, null, '    ');

    // Write the string to todos.json
    fs.writeFile('todos.json', jsonBody, function(err) { // IO

        // Send a message back that the request was successful
        res.send(JSON.stringify({ success: true })); // IO
    });
});
```

- Other tools (php, python, java) wait until their request has completed
- You have to start multiple processes in order to help multiple users at once

# Homework
- Install mongoDB
- Store the todo items in mongoDB instead of files
