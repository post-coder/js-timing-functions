

console.log("primo log");


// setTimeout NON BLOCCA l'esecuzione delle altre righe di codice
// programmazione asincrona
setTimeout(funzioneDaChiamare, 2000);
// setTimeout ordina al browser di memorizzarsi in una specie di lista d'attesa una cosa:
    // chiamare la funzione indicata (funzioneDaChiamare) dopo tot millisecondi




// se abbiamo bisogno di passare un parametro
// dobbiamo dichiarare dentro il timeout una funzione anonima
setTimeout(function() {
    // chiamiamo la funzione che ci interessa al suo interno, passandole i parametri
    secondaFunzione("Testo da stampare");
}, 2000);



// Funzioni

function funzioneDaChiamare() {
    console.log("Funzione chiamata nel timeout");
}

// questa funzione ha bisogno di un parametro text
function secondaFunzione(text) {

    console.log(text)
}