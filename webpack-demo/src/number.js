function number() {
    let e = document.createElement('div')
    e.innerHTML = 100
    e.setAttribute('id', 'number')
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(e)
}
export default number