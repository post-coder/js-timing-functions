

const timerElement = document.querySelector("#timer");



const clock = setInterval(countEverySecond, 1000);

let seconds = 0;
timerElement.innerText = seconds + " secondi";

function countEverySecond() {
    seconds++;

    timerElement.innerText = seconds + " secondi";


    if(seconds > 60) {
        seconds = 0;
    }

}


document.querySelector("button").addEventListener("click", function() {
    clearInterval(clock);
})