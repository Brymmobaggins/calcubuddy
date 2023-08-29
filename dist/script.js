// 
const harmburger = document.getElementById("toggle-button")
const pixelInputEl = document.getElementById('px-input')
const remInputEl = document.getElementById('rem-input')
const navMenu = document.getElementById('nav')


// nav harmbugger
harmburger.addEventListener('click', function () {
    navMenu.classList.toggle('hidden')

})



// change menu icon to close icon
function menu(e){
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

// listen for input event on pixel input element
pixelInputEl.addEventListener('input', () => {

    // get pixel value from input
    let pixelValue = pixelInputEl.value

    // convert pixel to rem (i rem = 16 pixels)
    remInputEl.value = convertPixelToRem(pixelValue)

    if (pixelInputEl.value.trim() !== "") {
        remInputEl.classList.add('border-bondiblue-700', 'ring-1', 'ring-bondiblue-600', 'text-bondiblue-500','animate-pulse');
    } else {
        remInputEl.classList.remove('border-bondiblue-700', 'ring-1', 'ring-bondiblue-600', 'text-bondiblue-500', 'animate-pulse');
    }

})

// listen for input event on rem input element
remInputEl.addEventListener('input', () => {
    let remValue = remInputEl.value

    pixelInputEl.value = convertPixelToRem(remValue)

    if (remInputEl.value.trim() !== "") {
        pixelInputEl.classList.add('border-bondiblue-700', 'ring-1', 'ring-bondiblue-600', 'text-bondiblue-500');
    } else {
        pixelInputEl.classList.remove('border-bondiblue-700', 'ring-1', 'ring-bondiblue-600', 'text-bondiblue-500');
    }

})

