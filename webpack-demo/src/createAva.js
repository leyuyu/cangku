import ava from './ava.png'
// import style1 from './index.scss'
function creator() {
    var img = new Image()
    img.src = ava
    img.classList.add('ava')
    let dom = document.querySelector('#root')
    dom.appendChild(img)
}
export default creator