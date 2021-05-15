
function move() {
    // var value = 
    var elem = document.getElementById("myBar");
    var width = 20;
    var id = setInterval(frame, 800);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("load").innerHTML = width / 2 * 3 + '';
            document.getElementById("call").innerHTML = width * 1 - 13 + '';
        }
    }
}

