
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
            document.getElementById("television").innerHTML = width / 2 + 3 + ''; 
            document.getElementById("radio").innerHTML = width * 1 - 13 + '';
            document.getElementById("MHZ").innerHTML = width * 5 + 10.6 + 'MHZ';

        }
    }
}

