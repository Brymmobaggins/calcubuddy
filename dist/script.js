// console.log("hello word")
const menu = document.getElementsByClassName("toggle-button")[0]

menu.addEventListener('click', function () {
    let classList = document.getElementById('nav').classList
    classList.toggle('hidden')
    classList.toggle('block')
})