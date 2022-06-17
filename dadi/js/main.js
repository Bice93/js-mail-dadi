// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//1) Inizio con il generare numeri random da 1 a 6 per il giocatore
const numberPlayer = Math.floor((Math.random() * 6) + 1);
console.log(numberPlayer);

// 2) genero numeri random anche per il computer
const numberPc = Math.floor((Math.random() * 6) + 1);
console.log(numberPc);