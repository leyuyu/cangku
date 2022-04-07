function counter() {
    let e = document.createElement('div')
    e.innerHTML = 1
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(e)
    e.onclick = function () {
        e.innerHTML = parseInt(e.innerHTML) + 1
    }
}
export default counter