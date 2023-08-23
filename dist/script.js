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
     
    if (pixelInputEl.value.trim() !== "") {
        remInputEl.classList.add('border-bondiblue-700', 'ring-1', 'ring-bondiblue-600', 'text-bondiblue-300');
    } else {
        remInputEl.classList.remove('border-bondiblue-700', 'ring-1', 'ring-bondiblue-600', 'text-bondiblue-300');
    }




})

remInputEl.addEventListener('input', () => {
    let remValue = remInputEl.value

    pixelInputEl.value = convertPixelToRem(remValue)

    // if (remInputEl.value.trim()  !== '') {
    //     pixelInputEl.classList.add('active')
    // }

})

// function addS(remInputEl,pixelInputEl, borderColor,fontColor){
//     if(remInputEl)

// }