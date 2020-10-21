let parse = require('./engine/parse')
let stringify = require('./engine/stringify')

module.exports = {
    parse: function(text, delimiter){
        return parse(text.split(delimiter || '\n'))
    },
    stringify: function(object){
        return stringify()(object)
    }
}