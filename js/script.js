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
// BONUS: all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var numeriPc = [];

do {
    var level = parseInt(prompt('Scegli il livello di difficoltà: 0, 1 o 2'));
} while (level != 0 && level != 1 && level != 2);
 
var max = 100;

switch (level) {
    case 0:
        max = 100;
        break;
    case 1:
        max = 80;
        break;
    case 2:
        max = 50;
        break;
}
    
while (numeriPc.length < 16){
    var randomPc = generaRandom(1,max);

    // if (!inArray(randomPc,numeriPc)) // nel caso in cui usassi la funzione
    if (!numeriPc.includes(randomPc)) { // la condizione per evitare i duplicati nella lista numeri del pc
        numeriPc.push(randomPc)
    }
}
console.log(numeriPc);

var numeriUtente = [];

// ********Primo test con ciclo for (poco convincente) *********/
// for (var i = 0; i < (max-numeriPc.length); i++){
//     var inputUtente = parseInt(prompt('Inserisci un numero da 1 a max'));
//     if (inputUtente >= 1 && inputUtente <= 100 && !numeriUtente.includes(inputUtente)){
//         if (numeriPc.includes(inputUtente)){
//             alert('Boom! Hai perso :\'(');
//             i = 1000; // escamotage per interrompere il ciclo
//         } else {
//             numeriUtente.push(inputUtente);
//         }
        
//     } else {
//         alert('Attenzione: inserisci un numero compreso fra 1 e ' + max + '.' + 'Assicurati di non averlo già inserito preceentemente')
//         i--;     // compenso i tentativi falliti mantenendo lo stesso numero di possibilità di inserimento
//     }
// }
// console.log(numeriUtente);

var perso = false;
var i = 0;
while (i < (max - numeriPc.length) && perso == false ){
    var inputUtente = parseInt(prompt('Inserisci un numero da 1 a ' + max));
    if (inputUtente >= 1 && inputUtente <= max && !numeriUtente.includes(inputUtente)) {
        if (numeriPc.includes(inputUtente)){
            perso = true;
            alert('Boom! Hai perso :\'(')
        } else {
            numeriUtente.push(inputUtente);
        }
    } else {
        alert('Attenzione: inserisci un numero compreso fra 1 e ' + max + '.' + 'Assicurati di non averlo già inserito preceentemente')
        i--;    // compenso i tentativi falliti mantenendo lo stesso numero di possibilità di inserimento
    }
    i++;
} 

if (!perso) {
    alert('Hai vinto!');
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