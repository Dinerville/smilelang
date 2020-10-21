const parse = (list) => {
    const processorInstance = processor()
    list.forEach((line)=>{
        processorInstance.processLine(line)
    })
    return processorInstance.getResult()
}