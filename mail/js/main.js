// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
//      stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? 
//      Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// 1) creo una lista di email che possono accedere alla chat (mi creo un array)
const emailAccess = [
    `giorgia@hotmail.it`,
    `chiara@hotmail.it`,
    `giovanni@libero.it`,
    `salvatore@gmail.com`,
    `francesco@virgilio.it`,
    `sara23@gmail.com`,
    `manu112@yahoo.com`,
    `biagio@yahoo.com`,
    `mario@hotmail.it`,
    `dolores.89@gmail.com`
]
 console.log(emailAccess); // array che visualizzo in console
 
// 2) chiedo all'utente la sua email con prompt
const questionUser = prompt(`Inserisci tua e-mail`);
  console.log(questionUser); //e lo visualizzo in console


let emailFound = false; //4) creo una variabile che inizializzo a false cioè non ricercato 
emailFound = `E-mail non valida. Riprova!`;

// 3) se l'email dell'utente è presente puo accedere altrimenti no quindi mi creo un ciclo di ricerca
for (let index=0; index < emailAccess.length; index++) {
    // console.log(emailAccess[index]);

    if (questionUser == emailAccess[index]){  // se l'email è stata trovata allora:
        // console.log(`Accesso e-mail valido!`);
        emailFound = true;
        emailFound = `E-mail valida per l'accesso in chat`;
        console.log([index] + " - " + emailAccess[index]); //visualizzo in console la posizione della email e l'email inserita.
    } else{

    }

}

console.log(emailFound); //altrimenti risulterà false cioè non trovata. 
alert(emailFound);  
