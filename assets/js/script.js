const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const opciones = document.querySelectorAll(".opciones");
let jugador;
let rival;
let resultado;
opciones.forEach(button => button.addEventListener("click", ()=>{
    jugador = button.textContent;
    computerTurn();
    playerText.textContent = `Jugador: ${jugador}`;
    computerText.textContent = `Rival: ${rival}`;
    resultText.textContent = checkwinner();
}))

function computerTurn() {
    const numrandom = Math.floor(Math.random()*3)+1;
    switch(numrandom) {
        case 1:
            rival = "PIEDRA";
            break;
        case 2:
            rival = "PAPEL";
            break;
        case 3:
            rival = "TIJERAS";
            break;
    }
}

function checkwinner(){
    if(jugador == rival){
        return "Empate 😑";
    }
    else if(rival == "PIEDRA"){
        return (jugador == "PAPEL") ? "¡Ganaste!🥳" : "Perdiste 😈"
    }
    else if(rival == "PAPEL"){
        return (jugador == "TIJERAS") ? "¡Ganaste!🥳" : "Perdiste 😈"
    }
    else if(rival == "TIJERAS"){
        return (jugador == "PIEDRA") ? "¡Ganaste!🥳" : "Perdiste 😈"
    }
}