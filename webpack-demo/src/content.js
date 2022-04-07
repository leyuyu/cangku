function content() {
    var content = document.createElement('div')
    content.innerText = '这是content'
    var root = document.querySelector('#root')
    root.appendChild(content)
}

export default content