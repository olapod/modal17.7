var fs = require('fs');
var colors = require('colors');

fs.readdir('./folder', function(err, files) {
    var data = [];
    if (err) return console.log(err);

    files.forEach(function(filename) {
        
        fs.appendFile('./new.txt', filename + '\n', function(err) {
            if(err) return console.log(err);
            
            console.log('Zapisano: '.red + filename.red);
                       
        });
    });
})