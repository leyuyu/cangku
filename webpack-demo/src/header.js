function header() {
    var header = document.createElement('div')
    header.innerText = '这是header'
    var root = document.querySelector('#root')
    root.appendChild(header)
}

export default header