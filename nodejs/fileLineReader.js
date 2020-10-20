const readline = require('readline');
const fs = require('fs');
const proccessor = require('./processorv2');

const readInterface = readline.createInterface({
    input: fs.createReadStream('../superheroes.smile'),
    console: false
});

readInterface.on('line', function(line) {
    proccessor.processLine(line)
});
readInterface.on('close', function(line) {
    console.log(JSON.stringify(proccessor.getResult(),null,4))
});
