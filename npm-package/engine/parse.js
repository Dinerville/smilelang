const processor = require('./processorv2')

module.exports = (list) => {
    const processorInstance = processor()
    list.forEach((line)=>{
        processorInstance.processLine(line)
    })
    return processorInstance.getResult()
}