// 
const menuToggle = document.getElementsByClassName("toggle-button")[0]
const pixelInputEl = document.getElementById('px-input')
const remInputEl = document.getElementById('rem-input')

menuToggle.addEventListener('click', function () {
    let classList = document.getElementById('nav').classList
    classList.toggle('hidden')
    // classList.toggle('block')
})


const convertRemToPixel = (rem) => {
    return rem * 16
}
const convertPixelToRem = (pixel) => {
    return pixel / 16


}

// listen for input on pixel input element
pixelInputEl.addEventListener('input', () => {

    // get pixel value from input
    let pixelValue = pixelInputEl.value

    // convert pixel to rem (i rem = 16 pixels)
    remInputEl.value = convertPixelToRem(pixelValue)
    addColor()
    // if(pixelInputEl.oninput){
    //     remInputEl.classList.add("active")
    // }

})

remInputEl.addEventListener('input', () => {
    let remValue = remInputEl.value

    pixelInputEl.value = convertPixelToRem(remValue)
    addColor()


})
function addColor() {
    if (pixelInputEl.oninput) {
        remInputEl.classList.add("active")

    }
}