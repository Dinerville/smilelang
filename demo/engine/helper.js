function setJson(){
    let element = document.getElementById("one")
    let json = JSON.stringify(parse(element.value.split('\n')),null,4)
    document.getElementById("two").value = json
}

function setSmile(){
    let element = document.getElementById("two")
    document.getElementById("one").value = stringify()(JSON.parse(element.value))
}

function setDemoJson(name){
    document.getElementById("two").value = window.demos.json[name]
    setSmile()
}

function setDemoSmile(name){
    document.getElementById("one").value = window.demos.smile[name]
    setJson()
}