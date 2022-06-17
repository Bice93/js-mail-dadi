// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//1) Inizio con il generare numeri random da 1 a 6 per il giocatore
const numberPlayer = Math.floor((Math.random() * 6) + 1);
console.log(`Giocatore` + " - " + numberPlayer);

// 2) genero numeri random anche per il computer
const numberPc = Math.floor((Math.random() * 6) + 1);
console.log(`Pc` + " - " + numberPc);


const containerNumber = document.getElementById(`container_number_player`);
const containerNumberPc = document.getElementById(`container_number_pc`);
const containerWinner = document.getElementById(`box_winner`);

const numberPlayerBox = document.createElement(`div`);
numberPlayerBox.innerHTML=numberPlayer;
numberPlayerBox.style.textAlign="center";

const numberPcBox = document.createElement(`div`);
numberPcBox.innerHTML=numberPc;
numberPcBox.style.textAlign="center";

const boxWinner = document.createElement(`div`);
boxWinner.style.textAlign="center";

// 3) stabilisco il vincitore in base al punteggio più alto
    // ...quindi mi chiedo se il numero del giocatore e più alto ha vinto il giocatore altrimenti ha vinto il pc
if (numberPlayer > numberPc) {
    boxWinner.innerHTML= `Wow ha vinto il giocatore! Complimenti!`;
    console.log(`Wow ha vinto il giocatore! Complimenti!`);
} else {
    console.log(`Wow ha vinto il Pc! Complimenti`);
    boxWinner.innerHTML= `Wow ha vinto il Pc! Complimenti!`;
}

containerNumber.append(numberPlayerBox);
containerNumberPc.append(numberPcBox);
containerWinner.append(boxWinner);
