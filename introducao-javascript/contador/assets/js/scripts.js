var currentNumberWrapper = document.getElementById("currentNumber");
var incrementButton = document.getElementsByName("somar");
var decrementButton = document.getElementsByName("subtrair");

var currentNumber = 0;

function increment() {

    if (currentNumber < 10) {
        currentNumber++;
    }
    updateNumber();
}

function decrement() {
    if (currentNumber > -10) {
        currentNumber--;
    }
    updateNumber();
}

function updateNumber() {
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) { currentNumberWrapper.style.color = "red"; }
    else { currentNumberWrapper.style.color = "white"; }
}

incrementButton[0].addEventListener("click", increment);
decrementButton[0].addEventListener("click", decrement);