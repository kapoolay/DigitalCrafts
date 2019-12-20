const models = require('./models');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`what's artist name?`, (name) => {
  console.log(`name name is: ${name}`);

  models.artist.create({name: name})
    .then(function (artist) {
      console.log("New artist id: " + artist.dataValues.id);
    });
  readline.close();
});
