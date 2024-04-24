const N_IMAGENES = 10;

const CARPETA = "./matojos/"

var imagenesPrecargadas = [];

for (var i = 0; i < N_IMAGENES; i++) {
    var imagensita = new Image();
    imagensita.src = srcCompleto(i);
    imagenesPrecargadas[i] = imagensita;
}

var hidden = false;

var index = 0;

var img = document.getElementById("aa");
img.src = imagenesPrecargadas[index].src;

var presionado = false;

document.addEventListener("keydown", (e) => {
    if (presionado) return;
    
    if (e.code === "ArrowRight") {
        index++;
        if (index >= N_IMAGENES) {
            index = 0;
        } 
    } else if (e.code === "ArrowLeft") {
        index--;
        if (index < 0) {
            index = N_IMAGENES - 1;
        }
    } else {
        // Ninguno de los dos, salir
        return;
    }

    presionado = true;

    img.src = imagenesPrecargadas[index].src;
    console.log(index);
});

document.addEventListener("keyup", (e) => {
    presionado = false;
});

img.ondblclick = function() {
    img.style = (hidden) ? "cursor: default;" : "cursor: none;";
    hidden = !hidden;
};  

function srcCompleto(fichero) {
    return CARPETA + (fichero + 1) + ".gif"
}