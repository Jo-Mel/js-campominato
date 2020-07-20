// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, 
// sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile numeri consentiti.
// Al termine della partita il software deve comunicare 
// il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numeriPc = [];
for (var i = 0; numeriPc.length < 16; i++){
    var randomPc = generaRandom(1,100);
    // if (!inArray(randomPc,numeriPc)) // nel caso in cui usassi la funzione
    if (!numeriPc.includes(randomPc)) { // la condizione per evitare i duplicati nella lista numeri del pc
        numeriPc.push(randomPc)
    }
}
console.log(numeriPc);

var numeriUtente = [];

//********Primo test con ciclo for (poco convincente) *********/
// for (var i = 0; i < (100-numeriPc.length); i++){
//     var inputUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
//     if (inputUtente >= 1 && inputUtente <= 100 && !numeriUtente.includes(inputUtente)){
//         if (numeriPc.includes(inputUtente)){
//             alert('Boom! Hai perso :\'(');
//             i = 1000; // escamotage per interrompere il ciclo
//         } else {
//             numeriUtente.push(inputUtente);
//         }
        
//     } else {
//         alert('Attenzione: inserisci un numero compreso fra 1 e 100. Assicurati di non averlo già inserito preceentemente')
//         i--;     // compenso i tentativi falliti mantenendo lo stesso numero di possibilità di inserimento
//     }
    
// }
// console.log(numeriUtente);

var perso = false;
var i = 0;
while (i < (100 - numeriPc.length) && perso == false ){
    var inputUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
    if (inputUtente >= 1 && inputUtente <= 100 && !numeriUtente.includes(inputUtente)) {
        if (numeriPc.includes(inputUtente)){
            perso = true;
            alert('Boom! Hai perso :\'(')
        } else {
            numeriUtente.push(inputUtente);
        }
    } else {
        alert('Attenzione: inserisci un numero compreso fra 1 e 100. Assicurati di non averlo già inserito preceentemente')
        i--;    // compenso i tentativi falliti mantenendo lo stesso numero di possibilità di inserimento
    }
    i++;
} 

if (!perso) {
    alert('hai vinto!');
}

alert('Hai inserito ' + numeriUtente.length + ' numeri validi')
console.log(numeriUtente);



//*** Funzioni ***//
function generaRandom(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// function inArray (needle,haystack){ // funzione 'verifica duplicato'
//     return haystack.includes(needle);
// }