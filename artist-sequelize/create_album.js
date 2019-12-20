const models = require('./models');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let new_album = [];

readline.question(`Album name?`, (name) => {
  console.log(`album name is: ${name}`);
  new_album['name'] = name;

  readline.question(`Album year?`, (year) => {
    console.log(`album year is: ${year}`);
    new_album['year'] = year;

    readline.question(`Artist ID?`, (artist_id) => {
      console.log(`Artist ID is: ${artist_id}`);
      new_album['artist_id'] = artist_id;

      models.album.create({ name: new_album['name'], year: new_album['year'], artist_id: new_album['artist_id'] })
        .then(function (album) {
          console.log(album);
        });
      readline.close();
    });
  });
});
