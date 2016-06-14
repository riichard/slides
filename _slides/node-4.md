---
title: Node 4
---

# Node class 4

# Prerequisite
- You got MongoDB working and have connected to it via Robomongo or
    Mongobooster
- You've imported all news articles and categories into MongoDB
- You understand the AngularJS News App
- You understand how the GET /todos.json and GET /players.json from last
    week's class work

# Agenda for today

- Serving the HTML files
- Put the Angular News app in our nodeJS/frontend folder
- Mimick the news_articles.json and news_categories.json
- Make an AngularJS form that posts data to the API and creates an article
- Some nice Javascript functions to work with Arrays

# Serving the HTML files

- We could do a fs.readFile for every possible path
- We would need to create a new function for each file
- Can you imagine the amount of code

## There is an easy way

```
app.use(express.static('frontend'));
```

- Each file will automatically be connected

# Create a file to test it

```
<!-- in frontend/itworks.html -->
<h1>It works!! </h1>
```

# Copy the Angular News App
- Copy the source code of your own project, or use mine:
    - http://github.com/riichard/hyf-angular-newsapp
- Look up what the path is in the Angular app source code

# Add the HTTP methods
- This code shouldn't be new to you, you know it from last week

----

```
app.get('/data/news.json', function(req, res) {
    db.articles.find( function(err, articles) {
        res.json( articles );
    });
});
```

---

```
app.get('/data/categories.json', function(req, res) {
    db.categories.find( function(err, categories) {
        res.json( categories );
    });
});
```

---
