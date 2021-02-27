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
