var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber > 0) {

        currentNumberWrapper.style.color = 'blue';
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function reset() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber === 0) {

        currentNumberWrapper.style.color = 'black';
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {

        currentNumberWrapper.style.color = 'red';
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
}