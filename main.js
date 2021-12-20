function text() {
    var name = document.getElementById('input').value
    document.getElementById('output').innerHTML = name
    console.log('written ' + name)
}

let btn = document.getElementByClassName('btn')
//btn.click = text()