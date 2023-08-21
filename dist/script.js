
const menuToggle = document.getElementsByClassName("toggle-button")[0]
const pixelInputEl = document.getElementById('px-input')
const remInputEl = document.getElementById('rem-input')

menuToggle.addEventListener('click', function () {
    let classList = document.getElementById('nav').classList
    classList.toggle('hidden')
    classList.toggle('block')
})


// listen for input on pixel input element
pixelInputEl.addEventListener('input', () => {
 
    // get pixel value from input
    let inputPixelValue = pixelInputEl.value 

    // convert pixel to rem (i rem = 16 pixels)
    remInputEl.value = inputPixelValue * 16

})