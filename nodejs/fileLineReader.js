const readline = require('readline');
const fs = require('fs');
const parse = require('./engine/parse')

const readInterface = readline.createInterface({
    input: fs.createReadStream('../superheroes.smile'),
    console: false
});

const lines = []
readInterface.on('line', function(line) {
    lines.push(line)
});

readInterface.on('close', function() {
    console.log(JSON.stringify(parse(lines),null,4))
});
