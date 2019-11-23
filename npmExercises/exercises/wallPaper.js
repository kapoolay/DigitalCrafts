// Change Wallpaper
const axios = require("axios")
​
const fs = require("fs")
const download = require("download-file")
​
const wallpaper = require("wallpaper")
​
// Make a request for a user with a given ID
axios
  .get("https://dog.ceo/api/breeds/image/random")
  .then(function(response) {
    // handle success
    // console.log(response.data.message)
​
    download(response.data.message).then(data => {
      fs.writeFileSync("dist/foo.jpg", data)
    })
  })
  .then(() => {
    wallpaper.set("dist/foo.jpg")
    wallpaper.get()
  })
  .catch(function(error) {
    // handle error
    console.log(error)
  })
  .finally(function() {})