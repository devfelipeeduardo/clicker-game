const blueEssence = document.getElementById('blue-essence-structure');
let clickPower = document.getElementById('click-power');
let parsedClickPower = parseInt(clickPower.innerText.slice(12));
let coinsNumber = document.getElementById('coins-number');
let parsedCoinsNumber = parseInt(coinsNumber.innerText);

let upgradeMinionClickPower = 1;
let upgradeAcuaminaClickPower = 10;
let upgradeJinxClickPower = 100;
let upgradeRyzeClickPower = 1000;
let upgradeBrandClickPower = 10000;
let upgradeReiPoro = 100000;

const audio = new Audio('assets/sounds/pop-sound.mp3');

blueEssence.addEventListener('click', function () {

    audio.play();
    
    parsedCoinsNumber += parsedClickPower;
    coinsNumber.innerText = parsedCoinsNumber;
})

class Upgrade {
 
    constructor({ elementID, elementCountID, elementCostID, elementClickPower }) {
        this.element = document.getElementById(elementID);
        this.elementCost = document.getElementById(elementCostID);
        this.parsedElementCost = parseInt(this.elementCost.innerText);
        this.elementCount = document.getElementById(elementCountID);
        this.parsedElementCount = parseInt(this.elementCount.innerText);
        this.elementClickPower = elementClickPower;
        this.init();
    }

    init() {
        this.element.addEventListener('click', () => this.upgradeClickPower())
    }

    upgradeClickPower() {

        if (parsedCoinsNumber >= this.parsedElementCost) {

            parsedClickPower += this.elementClickPower;
            clickPower.innerText = "Click Power: " + parsedClickPower;

            this.parsedElementCount++;
            this.elementCount.innerText = this.parsedElementCount;

            parsedCoinsNumber -= this.parsedElementCost;

            coinsNumber.innerText = parsedCoinsNumber;
        }
    }

}

let minionUpgrade = new Upgrade({
    elementID: 'upgrade-minion',
    elementCostID: 'upgrade-cost-minion',
    elementCountID: 'upgrade-quantity-counter-minion',
    elementClickPower: upgradeMinionClickPower,
});

let acuaminaUpgrade = new Upgrade({
    elementID: 'upgrade-acuamina',
    elementCostID: 'upgrade-cost-acuamina',
    elementCountID: 'upgrade-quantity-counter-acuamina',
    elementClickPower: upgradeAcuaminaClickPower,
})

let jinxUpgrade = new Upgrade({
    elementID: 'upgrade-jinx',
    elementCostID: 'upgrade-cost-jinx',
    elementCountID: 'upgrade-quantity-counter-jinx',
    elementClickPower: upgradeJinxClickPower,
})

let ryzeUpgrade = new Upgrade({
    elementID: 'upgrade-ryze',
    elementCostID: 'upgrade-cost-ryze',
    elementCountID: 'upgrade-quantity-counter-ryze',
    elementClickPower: upgradeRyzeClickPower,
})

let brandUpgrade = new Upgrade({
    elementID: 'upgrade-brand',
    elementCostID: 'upgrade-cost-brand',
    elementCountID: 'upgrade-quantity-counter-brand',
    elementClickPower: upgradeBrandClickPower,
})