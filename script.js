
function move() {
    var elem = document.getElementById("myBar");
    var width = 20;
    var id = setInterval(frame, 250);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("load").innerHTML = width / 2 * 3 + '';
            document.getElementById("call").innerHTML = width * 1 - 13 + '';
        }
    }
}

