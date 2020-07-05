let userInput = document.querySelector('.foodAmount');
let badServiceOption = document.querySelector('#badService');
let okayServiceOption = document.querySelector('.okayService');
let goodServiceOption = document.querySelector('.goodService');
let excellentServiceOption = document.querySelector('.excellentService');
let resetButton = document.querySelector('.reset');
let billTotal = document.querySelector('.billTotal');
let tipTotal = document.querySelector('.tipTotal');


badServiceOption.addEventListener("click", ServiceTip);
okayServiceOption.addEventListener("click", ServiceTip);
goodServiceOption.addEventListener("click", ServiceTip);
excellentServiceOption.addEventListener("click", ServiceTip);
resetButton.addEventListener("click", resetValues);


function ServiceTip () {
    let buttonValue = this.value;
    let cost = Number(userInput.value);
    let badService = badServiceOption.value;
    let okayService = okayServiceOption.value;
    let goodService = goodServiceOption.value;
    let excellentService = excellentServiceOption.value;

    if (buttonValue == 5) {
        numValidate(badService);
    } else if (buttonValue == 10) {
        numValidate(okayService);
    } else if (buttonValue == 15) {
        numValidate(goodService);
    } else if (buttonValue == 20) {
        numValidate(excellentService);
    }
}


function numValidate (tip) {
    let cost = Number(userInput.value);
    let serviceTip = tip / 100;

    if (cost == 0 || cost < 0) {
    tipTotal.innerText = `Invalid Input:`
    billTotal.innerText = `Please enter a number higher than 0.`
    } else {
tipTotal.innerText = `You should tip: $${(cost * serviceTip).toFixed(2)}`
billTotal.innerText = `Bill Total with tip: $${(cost * (serviceTip + 1)).toFixed(2)}`
    }
}

function resetValues () {
    document.querySelector('.foodAmount').value = "0.00";
    tipTotal.innerText = `You should tip:`
    billTotal.innerText = `Bill Total with tip:  `
}