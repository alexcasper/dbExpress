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
