const promise = require('bluebird');

// pg-promise initialization options:
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise, 
};


// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'music_db',
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);

// Create the database instance:
const db = pgp(config);

db.query('SELECT * FROM song')
  .then(function (results) {
    results.forEach(function (song) {
      console.log(song.id, song.song_name);
    }).catch(function() {
        console.log('There was an error');
    });
  });

  // Close your connection
  pgp.end()