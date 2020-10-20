const parse = (list) => {
    list.forEach((line)=>{
        processor.processLine(line)
    })
    return processor.getResult()
}