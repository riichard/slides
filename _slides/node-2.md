---
title: NodeJs

---

# Recap of last week

# Console.log
- NodeJS Works like the browser, except now it's a server
- `console.log('Hello World');` prints `Hello world` into the terminal.

## Headache saving habit:
- I have the habit of printing the name of the variable before the variable

```
var foo = { title: 'Hello world' };
console.log('foo', foo);
```

```
> foo { title: 'Hello world' }
```

# Modules
- Local modules
- Core modules
- NPM modules

## Local modules

```
# server.js
console.log('I'm server.js');
```

```
# app.js
var server = require('./server');
```

```
# server.js
module.exports = {
    foo: 'bar'
}
```

```
# app.js
var server = require('./server');
console.log('server.foo: ', server.foo);
```

# Callback functions
- It's common practice in NodeJS to pass functions as parameters to functions
- It's the way of telling that function what to do when it's done
- We call these functions callback functions

## Example with setTimeout

```
function woohoo() {
    console.log('woohoo!');
}
setTImeout(woohoo, 5000);
console.log('boo!');
```


# Asynchronous

## You know The waiter story

## How does this work into real code

```
function helpCustomer(customerName) {
    console.log('Going to help ' + customerName);

    // This function will be called ofter 5 seconds (5000 miliseconds)
    setTimeout(function(){

        console.log('food done for ' + customerName);

    }, 5000);
}

helpCustomer('Samir');
helpCustomer('Marwa');
helpCustomer('Hadi');
```

## Lets implement the eating function

Hypothetically, this could be another function in your process, such as,
sending the user an email confirmation after you saved their data in the
database.

---

```
function helpCustomer(name) {
    console.log('Going to help ' + name);

    // This function will be called ofter 5 seconds (5000 miliseconds)
    setTimeout(function(){

        console.log('food done for ' + name);

    }, 5000);
}

function startEating(name) {
    console.log(name + ' will now start eating');
}

helpCustomer('Samir');
startEating('Samir');
helpCustomer('Marwa');
startEating('Marwa');
helpCustomer('Hadi');
startEating('Hadi');
```

## Woah, that doesn't look right

## We want to start eating when the food is done. Not before that

## Lets implement the eating function
```
function helpCustomer(name, foodDone) {
    console.log('Going to help ' + name);

    // This function will be called ofter 5 seconds (5000 miliseconds)
    setTimeout(function(){

        console.log('food done for ' + name);
        foodDone(name); // Call the callback function

    }, 5000);
}

function startEating(name) {
    console.log(name + ' will now start eating');
}

helpCustomer('Samir', startEating);
helpCustomer('Marwa', startEating);
helpCustomer('Hadi', startEating);
```

# This is common practice in nodejs
- The last argument of a function is the `callback` function
- The callback function is a place where you can describe what to do when the
    function is done

# Go back to last week's code
- We have a webserver, showing todos.json with a `GET` request
- Saving todos with a `POST` request
- Lets Take a look again at what it does

# Lets add 2 functions today
- Adding a TODO to todos.json
- Deleting a TODO from todos.json

