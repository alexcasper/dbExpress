var sqlite3 = require('sqlite3').verbose()

function connect() {
    let db = new sqlite3.Database('./db/database.sqlite',function (err)  {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the SQlite database.');
    });
    return db;
  }