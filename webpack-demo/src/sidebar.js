function sidebar() {
    var sidebar = document.createElement('div')
    sidebar.innerText = '这是sidebar'
    var root = document.querySelector('#root')
    root.appendChild(sidebar)
}

export default sidebar