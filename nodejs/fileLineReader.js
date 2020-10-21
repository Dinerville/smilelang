const readline = require('readline');
const fs = require('fs');
const SMILE = require('smilelang')

const readInterface = readline.createInterface({
    input: fs.createReadStream('../superheroes.smile'),
    console: false
});

const lines = []
readInterface.on('line', function(line) {
    lines.push(line)
});

readInterface.on('close', function() {
    console.log(JSON.stringify(SMILE.parse(lines.join('\n')),null,4))
});
