const MAX = 8;

const CARPETA = "./matojos/"

var img = document.getElementById("aa");
img.src = srcCompleto(0);

var hidden = false;

var index = 0;

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight") {
        index++;
        if (index >= MAX) {
            index = 0;
        } 
    } else if (e.code === "ArrowLeft") {
        index--;
        if (index < 0) {
            index = MAX - 1;
        }
    } else {
        return;
    }
    
    img.src = srcCompleto(index);
    console.log(index);
});

img.ondblclick = function() {
    img.style = (hidden) ? "cursor: default;" : "cursor: none;";
    hidden = !hidden;
};  

function srcCompleto(fichero) {
    return CARPETA + (fichero + 1) + ".gif"
}