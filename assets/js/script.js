const blueEssence = document.getElementById('blue-essence-structure');
let coinsNumber = document.getElementById('coins-number');
let clickPower = 1;
let parsedCoinsNumber = parseInt(coinsNumber.innerText);


const upgradeMinion = document.getElementById('upgrade-minion')
let upgradeMinionCount = document.getElementById('upgrade-quantity-counter-minion');
let parsedUpgradeMinionCount = parseInt(upgradeMinionCount.innerText);

let upgradeCostMinion = document.getElementById('upgrade-cost-minion')
let parsedUpgradeCostMinion = parseInt(upgradeCostMinion.innerText)





blueEssence.addEventListener('click', function() {

    parsedCoinsNumber += clickPower;
    coinsNumber.innerText = parsedCoinsNumber;

})

upgradeMinion.addEventListener('click', function() {

    if (parsedCoinsNumber != 0) {
        //Colocar um let para definir o valor adicionado no click power baseado no poder do minion
        clickPower++;
        parsedUpgradeMinionCount++;
        upgradeMinionCount.innerText = parsedUpgradeMinionCount;

        parsedCoinsNumber -= parsedUpgradeCostMinion;

        coinsNumber.innerText = parsedCoinsNumber;
    }
})