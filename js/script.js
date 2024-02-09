

// voglio scrivere ogni secondo la stringa "tick" in console

// questa funzione verrà chiamata ogni tot ALL'INFINITO
const tickContinuo = setInterval(tick, 1000);



document.querySelector("button").addEventListener("click", function() {

    // blocchiamo il setInterval
    // per bloccare un setInterval ci basta memorizzarlo inizialmente in una variabile
    // e poi inserire quella variabile come argomento della funzione "clearInterval"
    clearInterval(tickContinuo);

});


function tick() {

    console.log("tick");

}


function tock() {
    console.log("tock");
}