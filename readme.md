# Stage Zero

## Database Assignment Walkthrough

### 1
We open a new Node project using ```npm init```.
Keep the default settings for everything.

We add a file called **.gitignore** in the root directory.
We add one line ```node_modules/``` to prevent our modules being committed to the repo.

We run ```npm install express```, again in the terminal, to install the express module. This will change **package.json** and produce a **package-lock.json**.

We create a new file called **index.js** either with the new file option or through doing ```touch index.js``` on the terminal. This will act as the basis of our server. In that we include the line ```var express = require('express')``` to pull express into our server code.