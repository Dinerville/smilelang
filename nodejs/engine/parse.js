const processor = require('./processorv2')

module.exports = (list) => {
    list.forEach((line)=>{
        processor.processLine(line)
    })
    return processor.getResult()
}