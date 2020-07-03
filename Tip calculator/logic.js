let userInput = document.querySelector('.foodAmount');
let badServiceOption = document.querySelector('#badService');
let okayServiceOption = document.querySelector('.okayService');
let goodServiceOption = document.querySelector('.goodService');
let excellentServiceOption = document.querySelector('.excellentService');
let resetbutton = document.querySelector('.reset');


badServiceOption.addEventListener('click', badServiceTip);
okayServiceOption.addEventListener('click', okayServiceTip);
goodServiceOption.addEventListener('click', goodServiceTip);
excellentServiceOption.addEventListener('click', excellentServiceTip);
resetbutton.addEventListener('click', resetValues);


//Function for bad service
function badServiceTip () {
    let cost = Number(userInput.value);
    let badService = Number(userInput.value) * 0.05;
    let badServiceTotal = Number(userInput.value) * 1.05;
    
    let billTotal = document.querySelector('.billTotal');
    let tipTotal = document.querySelector('.tipTotal');

    if (cost == 0 || cost < 0) {
        tipTotal.innerText = `Invalid Input:`
        billTotal.innerText = `Please enter a number higher than 0.`
    } else {
    tipTotal.innerText = `You should tip: $${badService.toFixed(2)}`
    billTotal.innerText = `Bill Total with tip: $${badServiceTotal.toFixed(2)}`
    }
}

// Function for okay service
function okayServiceTip () {
    let cost = Number(userInput.value);
    let okayService = Number(userInput.value) * 0.10;
    let okayServiceTotal = Number(userInput.value) * 1.10;
    
    let billTotal = document.querySelector('.billTotal');
    let tipTotal = document.querySelector('.tipTotal');

    if (cost == 0 || cost < 0) {
        tipTotal.innerText = `Invalid Input:`
        billTotal.innerText = `Please enter a number higher than 0.`
    } else {
    tipTotal.innerText = `You should tip: $${okayService.toFixed(2)}`
    billTotal.innerText = `Bill Total with tip: $${okayServiceTotal.toFixed(2)}`
    }
}


//Function for good service
function goodServiceTip () {
    let cost = Number(userInput.value);
    let goodService = Number(userInput.value) * 0.15;
    let goodServiceTotal = Number(userInput.value) * 1.15;
    
    let billTotal = document.querySelector('.billTotal');
    let tipTotal = document.querySelector('.tipTotal');

    if (cost == 0 || cost < 0) {
        tipTotal.innerText = `Invalid Input:`
        billTotal.innerText = `Please enter a number higher than 0.`
    } else {
    tipTotal.innerText = `You should tip: $${goodService.toFixed(2)}`
    billTotal.innerText = `Bill Total with tip: $${goodServiceTotal.toFixed(2)}`
    }
}

//Function for good service
function excellentServiceTip () {
    let cost = Number(userInput.value);
    let excellentService = Number(userInput.value) * 0.20;
    let excellentServiceTotal = Number(userInput.value) * 1.20;
    
    let billTotal = document.querySelector('.billTotal');
    let tipTotal = document.querySelector('.tipTotal');

    if (cost == 0 || cost < 0) {
        tipTotal.innerText = `Invalid Input:`
        billTotal.innerText = `Please enter a number higher than 0.`
    } else {
    tipTotal.innerText = `You should tip: $${excellentService.toFixed(2)}`
    billTotal.innerText = `Bill Total with tip: $${excellentServiceTotal.toFixed(2)}`
    }
}

function resetValues () {
    let billTotal = document.querySelector('.billTotal');
    let tipTotal = document.querySelector('.tipTotal');

    document.querySelector('.foodAmount').value = "0.00";
    tipTotal.innerText = `You should tip:`
    billTotal.innerText = `Bill Total with tip:  `
}




