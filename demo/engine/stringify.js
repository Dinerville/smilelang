const stringify = (()=>{
    let lines = []
    
    function stringify(obj){
        if(typeof(obj) === 'object'){
            stringifyObject(0, obj)
        }else if (Array.isArray(obj)){
            stringifyArray(0, obj)
        }
        return lines.join('\n')
    }

    function stringifyObject(level, obj){
        for (let [key, value] of Object.entries(obj)) {
            if(value === null || value === undefined){
                makePropertyLine(level, key, null)
            }else 
            if(Array.isArray(value)){
                makeObjectPropertyLine(level,key)
                stringifyArray(level+1, value)
            }else if(typeof(value) === 'object'){
                makeObjectPropertyLine(level,key)
                stringifyObject(level+1, value)
            }else if(typeof(value)==='string'){
                makePropertyLine(level, key,`'${value}'`)
            }else{
                makePropertyLine(level, key,value)
            }    
          }
    }

    function stringifyArray(level, array){
        array.forEach((value)=>{
            if(value === null || value === undefined){
                makeArrayItemLineLine(level, null)
            }else 
            if(Array.isArray(value)){
                makeArrayLine(level)
                stringifyArray(level+1, value)
            }else if(typeof(value) === 'object'){
                makeArrayLine(level)
                stringifyObject(level+1, value)
            }else if(typeof(value)==='string'){
                makeArrayItemLineLine(level, `'${value}'`)
            }else {
                makeArrayItemLineLine(level, value)
            }  
        })
    }

    function makePropertyLine(level, key, value){
        lines.push(`${createSpaces(level)}${key}: ${value}`)
    }
    function makeObjectPropertyLine(level, key){
        lines.push(`${createSpaces(level)}${key}: `)
    }

    function makeArrayItemLineLine(level, value){
        lines.push(`${createSpaces(level)}- ${value}`)
    }

    function makeArrayLine(level){
        lines.push(`${createSpaces(level)}-`)
    }

    function createSpaces(level){
        let s = ""
        for(let i =0; i< level*2; i++){
            s+= " "
        }
        return s
    }

    return stringify
})()
