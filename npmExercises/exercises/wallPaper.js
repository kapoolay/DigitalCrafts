const wallpaper = require('wallpaper');

(async () => {
    await wallpaper.set('/Users/kev/Pictures/einstein.jpg');

    await wallpaper.get();
})();