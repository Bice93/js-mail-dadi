// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//1) Inizio con il generare numeri random da 1 a 6 per il giocatore
const numberPlayer = Math.floor((Math.random() * 6) + 1);
console.log(`Giocatore` + " - " + numberPlayer);

// 2) genero numeri random anche per il computer
const numberPc = Math.floor((Math.random() * 6) + 1);
console.log(`Pc` + " - " + numberPc);

// 3) stabilisco il vincitore in base al punteggio più alto
    // ...quindi mi chiedo se il numero del giocatore e più alto ha vinto il giocatore altrimenti ha vinto il pc
if (numberPlayer > numberPc) {
    console.log(`Wow ha vinto il giocatore! Complimenti!`);
} else {
    console.log(`Wow ha vinto il Pc! Complimenti`);
}