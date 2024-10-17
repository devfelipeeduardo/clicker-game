// Variáveis 
const clickPower = document.getElementById('power-counter');
const facePerson = document.getElementById('face-person');
const coinsNumber = document.getElementById('coins-number');

facePerson.addEventListener('click', function() {
    
    let parsedClickPower = parseInt(clickPower.innerText);
    let parsedCoinsNumber = parseInt(coinsNumber.innerText);
    
    parsedCoinsNumber += parsedClickPower;
    
    coinsNumber.innerText = parsedCoinsNumber;
})


// +
const plusButton = document.getElementById('plus-upgrade');
plusButton.addEventListener('click', function() {
    
    let parsedClickPower = parseInt(clickPower.innerText);
    parsedClickPower++;
    clickPower.innerText = parsedClickPower;
    
})

// -
const substractButton = document.getElementById('subtract-upgrade');
substractButton.addEventListener('click', function() {
    
    let powerCounterInt = parseInt(clickPower.innerText);

    if (powerCounterInt !== 0) {
        powerCounterInt--;
    }

    clickPower.innerText = powerCounterInt;
})