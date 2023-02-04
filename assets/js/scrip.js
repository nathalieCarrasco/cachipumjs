


const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

/*opciones capturadas en variables */
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const TijeraBtn = document.getElementById("tijera");
const Textoini = document.getElementById("texto-ini");
const usuarioImg = document.getElementById("usuario-img");
const maquinaImg = document.getElementById("maquina-img");


/* evento on click que captura la opcion del boton apretada por el usuario */
piedraBtn.addEventListener("click", () => {
    play(PIEDRA);
});
papelBtn.addEventListener("click", () => {
    play(PAPEL);
});
TijeraBtn.addEventListener("click", () => {
    play(TIJERA);
});
/*funcion para jugar el usuario */
function play(usuarioOption) {
    if(isPlaying) return;

    isPlaying = true;
/*en este caso se traspasa la imagen que eligio en el boton al juego */

    usuarioImg.src = "assets/"+"img/" + usuarioOption + ".svg";

   Textoini.innerHTML = "mucha suerte!";



    /*calcula un leve tiempo para que aparesca la opcion de la maquina */
    const interval = setInterval(function(){
        const MaquinaOption = calcMaquinaOption();
        maquinaImg.src = "assets/"+"img/" + MaquinaOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const MaquinaOption = calcMaquinaOption();
        const result = calcResultado(usuarioOption, MaquinaOption);

        maquinaImg.src = "assets/"+"img/" + MaquinaOption+ ".svg";

        switch (result) {
            case EMPATE:
                Textoini.innerHTML = "has empatado!";
                break;
            case WIN:
                Textoini.innerHTML = "Tu ganaste!";
                break;
            case LOST:
                Textoini.innerHTML = "Tu perdiste!";
                break;
        }
        isPlaying = false;
    }, 2000);
}


/* funcion que calcula aleatoriamente la opcion de la maquina solo entre 0 y 2  */
function calcMaquinaOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}



/*calculo de resultado  del juego con sus opciones */
function calcResultado(usuarioOption, MaquinaOption) {
    if (usuarioOption === MaquinaOption) {
        return EMPATE;

    } else if (usuarioOption === PIEDRA) {

        if (MaquinaOption === PAPEL) return LOST;
        if (MaquinaOption === TIJERA) return WIN;

    } else if (usuarioOption === PAPEL) {

        if (MaquinaOption === TIJERA) return LOST;
        if (MaquinaOption === PIEDRA) return WIN;

    } else if (usuarioOption === TIJERA) {

        if (MaquinaOption === PIEDRA) return LOST;
        if (MaquinaOption === PAPEL) return WIN;

    }
}
