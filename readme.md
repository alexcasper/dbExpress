# Stage Zero

## Database Assignment Walkthrough

### 1
We open a new Node project using ```npm init```.
Keep the default settings for everything.

We add a file called **.gitignore** in the root directory.
We add one line ```node_modules/``` to prevent our modules being committed to the repo.

We run ```npm install express```, again in the terminal, to install the express module. This will change **package.json** and produce a **package-lock.json**.

We create a new file called **index.js** either with the new file option or through doing ```touch index.js``` on the terminal. This will act as the basis of our server. In that we include the line ```var express = require('express')``` to pull express into our server code.

We then define app as the result of calling express as a function. This is because Express is designed to operate as a function that spits out an application for you to use. ```var app = express()``` should work.

Create a public directory using ```mkdir public``` and ```touch public/index.html``` to create an **index.html** file in that directory. Confirm it's created and put ```<!DOCTYPE html>``` in that public folder. We define which public folder will by going into **index.js** and adding the line ```app.use(express.static('public'))``` which instructs the app we created to use the public folder, as transformed into a format suitable for use as a static folder by the *express.static()* function. The public folder will be what the end-user or client sees when they access your website.

We add the following line 
``` app.get('/',function(req,res) { res.sendFile('index.html') }) ```
This line will respond to any *get* request made to the location specified in the first part of the function - here '/', the root of the directory - by running the function passed as the second argument to the function - here a function that will take request and response object - filled in by express for you - and use the response object to send **index.html** back to the user.

``` app.listen(3000,function() { console.log("listening at http://localhost:3000") }) ```
This line above will then instruct to listen on the following port, and let you know it's listening. Your computer has a number of different ports which different services use. 3000 is normally one used for development.

Add ```<h1>hi</h1>``` to **index.html** to make sure it's working. You can use ```node index.js``` to start the server, then use the link provided or go to http://localhost:3000 in your browser to check it's working. Your computer is simulating two servers - index.js is acting as a server, whereas your browser is acting as a client.

To make this a little clearer, let's rename **index.js** as **server.js**. You can do this on the command line using ```mv index.js server.js``` Under the ```package.json``` file, you can specify the entrypoint for the script also. You can change the 'scripts' section to the following to make ```npm start```
``` 
"scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

We're also going to produce a separate file to include our Database instructions. Use ```touch dbAccess.js``` or create a new file called **dbAccess.js** manually. We do this to isolate our database commands from our routes, unless we want to go and switch to another database later. Effecctively we separate our front facing code ( **server.js** which is going to focus on talking to the end user) and our back facing code ( **dbAccess.js** which includes database instructions.) 

We add ```var sqlite3 = require('sqlite3').verbose()``` to the **dbAccess.js** file. Then, in the terminal, we type ```npm install sqlite3``` to install SQLite, a lightweight SQL Database.

Make a new folder called **db** in the root directory. This is going to store the SQLite database - note SQLite works differently to most databases, where the database is on a seperate computer to the server handling web requests. Here, the database is just stored in a file. We do this to prevent you the trouble of setting up a seperate database server.

In **dbAccess.js**, create a function called *connection()* . Inside the function block, define a new variable called db and set it to return a new sqlite database using sqlite3's *Database()* method.
```
function connect () {
    let db = new sqlite3.Database()
}
```
Into the Database method, we put the first parameter, which is the address of the file used as the database. Note that while the database file doesn't need to exist, if the folder doesn't exist, this will throw an error. Node this creates a database connection, not a new database, though confusingly, if there is no database to connect to, it will create one.

```
function connect () {
    let db = new sqlite3.Database('db/database.sqlite',)
}
```
The second argument is going to be a function that runs when the database is created. If there's an error, we want to log the error, else we want to console log that the connection is working. We also want to return the database so it can be used by other functions.
```
function connect() {
  let db = new sqlite3.Database('./db/database.sqlite',function (err)  {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  });
  return db;
}
```