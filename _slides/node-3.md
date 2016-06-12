---
title: NodeJS Class 3
---


# Agenda for today
- Explaination of other HTTP methods (HEAD, PUT, DELETE, OPTIONS)
- Setup mongoDB + tutorial on how to use it

# HTTP Methods

## GET
- The default HTTP request method
- Pages will be added to the browser history
- Parameters are sent via the URL

## POST
- Meant to sent data to the server
- Parameters are not visible in the URL

## PUT
- Meant to sent an update to a page, same as POST, but clear that it doesn't
    create a new record, but updates an existing one instead

## DELETE
- Meant to delete a record and/or page

## HEAD
- Intended to receive information about the page, such as it's last modified
date, size before downloading the rest of the page

## OPTIONS
- Returns information in the body about what HTTP methods are possible on that URL.
- Use the [node-docrouter](https://github.com/anodejs/node-docrouter) plugin to
automatically generate this information for the `OPTIONS` request method

# MongoDB

- MongoDB is perfect for NodeJS
- You can easily store your objects/variables for later

## Setup
- We will use a cloud server instead of setting it up locally
- Signup on mlab.com
- Download RoboMongo (it's a tool we use to run query experiments with the database) https://robomongo.org/download

# Create database, user
(open screenshots)


# Collections
- Collections are like SQL tables, its a place where you store one kind of
    data, such as 'users', 'articles', 'products'

# Saving players of an ice hockey team

## Create a collection called players

## Open the sample data

https://github.com/buckyroberts/Source-Code-from-Tutorials/blob/master/Other/SampleJsonData/penguins_players.json

## Insert one record

```
db.players.insert(
	{
         "position":"Right Wing",
         "id":8465166,
         "weight":200,
         "height":"6' 0\"",
         "imageUrl":"http://1.cdn.nhle.com/photos/mugs/8465166.jpg",
         "birthplace":"Seria, BRN",
         "age":37,
         "name":"Craig Adams",
         "birthdate":"April 26, 1977",
         "number":27
      }
);
```

## Return all objects in the players collection

```
db.players.find();
```

## Insert another object

```
db.players.insert(
	{
         "position":"Right Wing",
         "id":8475761,
         "weight":195,
         "height":"6' 2\"",
         "imageUrl":"http://1.cdn.nhle.com/photos/mugs/8475761.jpg",
         "birthplace":"Gardena, CA, USA",
         "age":23,
         "name":"Beau Bennett",
         "birthdate":"November 27, 1991",
         "number":19
      }
);
```

## This is taking a long time

## How to Insert multiple objects at once

```
db.players.insert( [

 ... put your objects here ...
    like:
    { object1: true },
    { object2: false }

 ] )
```

## Return all objects in the players collection

```
db.players.find();
```

# Querying the data

## Find all players who play at the right wing

```
db.players.find({ "position": "Right Wing" })
```

# Interactive tutorial on how to use mongodb in nodejs

## Use mongojs
- Very simple syntax
- `npm install mongojs`

## Connecting with the database (in your nodejs file)

```
// connect using SCRAM-SHA-1 mechanism
var db =
mongojs('username:password@example.com/mydb?authMechanism=SCRAM-SHA-1',
['mycollection'])
```

# Homework
- Lookup online how to serve your HTML files
- Store the news articles and categories in MongoDB
- Make API endpoints that query the MongoDB and return them
- Connect your AngularJS News App to the API
- Complete [NodeJS tutorials](https://thenewboston.com/videos.php?cat=355)


