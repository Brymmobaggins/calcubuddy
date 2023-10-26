// 
const navMenu = document.getElementById('nav')
const harmburger = document.getElementById("toggle-button")
let pixelInputEl = document.getElementById('px-input')
let remInputEl = document.getElementById('rem-input')
let percentageInputEl = document.getElementById('percentage-input')


// nav harmbugger
harmburger.addEventListener('click', function () {
    navMenu.classList.toggle('hidden')

})

// change menu icon to close icon
function menu(e) {
    e.name === "menu" ? (e.name = "close") : (e.name = "menu")
}

// convert rem to px
const convertRemToPixel = (rem) => {
    return rem * 16
}

// convert px to rem
const convertPixelToRem = (pixel) => {
    return pixel / 16

}
// Convert from pixels (px) to percentages (%)
function pxToPercentage(pixel) {
    return pixel * 100
}

// listen for input event on pixel input element
pixelInputEl.addEventListener('input', () => {

    // get pixel value from input
    let pixelValue = pixelInputEl.value

    // convert pixel to rem (i rem = 16 pixels)
    remInputEl.value = convertPixelToRem(pixelValue)

    if (pixelInputEl.value.trim() !== "") {
        remInputEl.classList.add('showColor')
    } else {
        remInputEl.classList.remove('showColor');
    }

})

// listen for input event on rem input element
remInputEl.addEventListener('input', () => {
    let remValue = remInputEl.value

    pixelInputEl.value = convertRemToPixel(remValue)

    if (remInputEl.value.trim() !== "") {
        pixelInputEl.classList.add("showColor");
    } else {
        pixelInputEl.classList.remove('showColor')
    }

})


