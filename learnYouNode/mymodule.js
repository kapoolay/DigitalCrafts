let fs = require('fs');
let path = require('path');

module.exports = function(folder, fileExt, callback) {
    fs.readdir(folder, function(err, list) {
        if(err) {
            return callback(err);
        }
        list = list.filter(function(file) {
            return path.extname(file) === '.' + fileExt
        })
        callback(null, list);
    })
};