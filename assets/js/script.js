const blueEssence = document.getElementById('blue-essence-structure');
let clickPower = document.getElementById('click-power');
let parsedClickPower = parseInt(clickPower.innerText.slice(12));
let coinsNumber = document.getElementById('coins-number');
let parsedCoinsNumber = parseInt(coinsNumber.innerText);

class Upgrade {

    constructor({ elementID, elementCountID, elementCostID, inicialElementCost, elementClickPowerID }) {
        this.element = document.getElementById(elementID);
        this.elementCost = document.getElementById(elementCostID);
        this.parsedElementCost = parseInt(this.elementCost.innerText);
        this.inicialElementCost = inicialElementCost;
        this.elementCount = document.getElementById(elementCountID);
        this.parsedElementCount = parseInt(this.elementCount.innerText);
        this.elementClickPower = document.getElementById(elementClickPowerID);
        this.parsedElementClickPower = parseInt(this.elementClickPower.innerText.slice(12))
        this.init();
    }

    init() {
        this.element.addEventListener('click', () => {
            this.upgradeClickPower()
            this.increaseCost()
        })
    }

    upgradeClickPower() {

        if (parsedCoinsNumber >= this.parsedElementCost) {

              // Aumenta o poder de clique
            parsedClickPower += this.parsedElementClickPower;
            clickPower.innerText = "Click Power: " + parsedClickPower;

             // Aumenta a contagem de upgrades
            this.parsedElementCount++;
            this.elementCount.innerText = this.parsedElementCount;

            // Deduz o custo das moedas
            parsedCoinsNumber -= this.parsedElementCost;
            coinsNumber.innerText = Math.round(parsedCoinsNumber);

            // Recalcula o custo baseado no número de upgrades comprados
            this.parsedElementCost = Math.ceil(this.inicialElementCost * Math.pow(1.15, this.parsedElementCount));
            this.elementCost.innerText = this.parsedElementCost;
        }
    }

}

let minionUpgrade = new Upgrade({
    elementID: 'upgrade-minion',
    elementCostID: 'upgrade-cost-minion',
    inicialElementCost: 15,
    elementCountID: 'upgrade-quantity-counter-minion',
    elementClickPowerID: 'upgrade-minion-click-power',
});

let acuaminaUpgrade = new Upgrade({
    elementID: 'upgrade-acuamina',
    elementCostID: 'upgrade-cost-acuamina',
    inicialElementCost: 100,
    elementCountID: 'upgrade-quantity-counter-acuamina',
    elementClickPowerID: 'upgrade-acuamina-click-power',
})

let jinxUpgrade = new Upgrade({
    elementID: 'upgrade-jinx',
    elementCostID: 'upgrade-cost-jinx',
    inicialElementCost: 1100,
    elementCountID: 'upgrade-quantity-counter-jinx',
    elementClickPowerID: 'upgrade-jinx-click-power',
})

let ryzeUpgrade = new Upgrade({
    elementID: 'upgrade-ryze',
    elementCostID: 'upgrade-cost-ryze',
    inicialElementCost: 12000,
    elementCountID: 'upgrade-quantity-counter-ryze',
    elementClickPowerID: 'upgrade-ryze-click-power',
})

let brandUpgrade = new Upgrade({
    elementID: 'upgrade-brand',
    elementCostID: 'upgrade-cost-brand',
    inicialElementCost: 130000,
    elementCountID: 'upgrade-quantity-counter-brand',
    elementClickPowerID: 'upgrade-brand-click-power',
})

let reiPoroUpgrade = new Upgrade({
    elementID: 'upgrade-rei-poro',
    elementCostID: 'upgrade-cost-rei-poro',
    inicialElementCost: 1400000,
    elementCountID: 'upgrade-quantity-counter-rei-poro',
    elementClickPowerID: 'upgrade-rei-poro-click-power',
})

function showUpgrade() {

    const upgrades = [minionUpgrade, acuaminaUpgrade, jinxUpgrade, ryzeUpgrade, brandUpgrade]
    upgrades.forEach(upgrade => {

        if (parsedCoinsNumber >= upgrade.parsedElementCost) {
            upgrade.element.style.opacity = '1';
        }
    })

}

// const audio = new Audio('assets/sounds/pop-sound.mp3');
blueEssence.addEventListener('click', function () {
    // audio.play();
    parsedCoinsNumber += parsedClickPower;
    coinsNumber.innerText = Math.round(parsedCoinsNumber);
    showUpgrade();
})

// setInterval(() => {

//     parsedCoinsNumber += 1;
//     coinsNumber.innerText = parsedCoinsNumber;

// }, 1000)