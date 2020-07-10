let userInput = document.querySelector('.foodAmount');
let badServiceOption = document.querySelector('#badService');
let okayServiceOption = document.querySelector('.okayService');
let goodServiceOption = document.querySelector('.goodService');
let excellentServiceOption = document.querySelector('.excellentService');
let resetButton = document.querySelector('.reset');
let billTotal = document.querySelector('.billTotal');
let tipTotal = document.querySelector('.tipTotal');


badServiceOption.addEventListener("click", numValidate);
okayServiceOption.addEventListener("click", numValidate);
goodServiceOption.addEventListener("click", numValidate);
excellentServiceOption.addEventListener("click", numValidate);
resetButton.addEventListener("click", resetValues);


function numValidate(e) {
    let clickedTipPercentage = parseFloat(this.value);
    let cost = Number(userInput.value);
    let tipAmount = + (cost * clickedTipPercentage).toFixed(2);
    let total = (cost + tipAmount).toFixed(2);
    // let numValidate = tip / 100;

    if (cost === 0 || cost < 0) {
    tipTotal.innerText = `Invalid Input:`
    billTotal.innerText = `Please enter a number higher than 0.`
    } else {
tipTotal.innerText = `You should tip: $${tipAmount}`
billTotal.innerText = `Bill Total with tip: $${total}`
    }
}

function resetValues () {
    document.querySelector('.foodAmount').value = "0.00";
    tipTotal.innerText = `You should tip:`
    billTotal.innerText = `Bill Total with tip:  `
}