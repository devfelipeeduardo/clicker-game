const blueEssence = document.getElementById('blue-essence-structure');
let coinsNumber = document.getElementById('coins-number');
let parsedCoinsNumber = parseInt(coinsNumber.innerText);
let clickPower = document.getElementById('click-power');
let parsedClickPower = parseInt(clickPower.innerText.slice(12));
let dpsPower = document.getElementById('dps-power');
let parsedDpsPower = parseInt(dpsPower.innerText.slice(11));

class Upgrade {
    constructor({ elementID, elementCountID, elementCostID, inicialElementCost, elementClickPowerID, elementDpsPowerID }) {
        this.element = document.getElementById(elementID);
        this.elementCost = document.getElementById(elementCostID);
        this.parsedElementCost = parseInt(this.elementCost.innerText);
        this.inicialElementCost = inicialElementCost;
        this.elementCount = document.getElementById(elementCountID);
        this.parsedElementCount = parseInt(this.elementCount.innerText);
        this.elementClickPower = document.getElementById(elementClickPowerID);
        this.parsedElementClickPower = parseInt(this.elementClickPower.innerText.slice(12));
        this.elementDpsPower = document.getElementById(elementDpsPowerID);
        this.parsedElementDpsPower = parseInt(this.elementDpsPower.innerText.slice(11));

        this.init();
    }

    init() {
        this.element.addEventListener('click', () => {
            this.upgradeClickPower()
            this.increaseCost()
            this.upgradeDpsPower()
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

        }
    }

    increaseCost() {
        // Recalcula o custo baseado no número de upgrades comprados
        this.parsedElementCost = Math.ceil(this.inicialElementCost * Math.pow(1.15, this.parsedElementCount));
        this.elementCost.innerText = this.parsedElementCost;
    }

    upgradeDpsPower() {

        // Aumenta o poder de clique
        parsedDpsPower += this.parsedElementDpsPower;
        dpsPower.innerText = "Dps Power: " + parsedDpsPower;
    }

}

let minionUpgrade = new Upgrade({
    elementID: 'upgrade-minion',
    elementCostID: 'upgrade-cost-minion',
    inicialElementCost: 15,
    elementCountID: 'upgrade-quantity-counter-minion',
    elementClickPowerID: 'upgrade-minion-click-power',
    elementDpsPowerID: 'upgrade-minion-dps-power',
});

let acuaminaUpgrade = new Upgrade({
    elementID: 'upgrade-acuamina',
    elementCostID: 'upgrade-cost-acuamina',
    inicialElementCost: 100,
    elementCountID: 'upgrade-quantity-counter-acuamina',
    elementClickPowerID: 'upgrade-acuamina-click-power',
    elementDpsPowerID: 'upgrade-acuamina-dps-power',
})

let jinxUpgrade = new Upgrade({
    elementID: 'upgrade-jinx',
    elementCostID: 'upgrade-cost-jinx',
    inicialElementCost: 1100,
    elementCountID: 'upgrade-quantity-counter-jinx',
    elementClickPowerID: 'upgrade-jinx-click-power',
    elementDpsPowerID: 'upgrade-jinx-dps-power',
})

let ryzeUpgrade = new Upgrade({
    elementID: 'upgrade-ryze',
    elementCostID: 'upgrade-cost-ryze',
    inicialElementCost: 12000,
    elementCountID: 'upgrade-quantity-counter-ryze',
    elementClickPowerID: 'upgrade-ryze-click-power',
    elementDpsPowerID: 'upgrade-ryze-dps-power',
})

let brandUpgrade = new Upgrade({
    elementID: 'upgrade-brand',
    elementCostID: 'upgrade-cost-brand',
    inicialElementCost: 130000,
    elementCountID: 'upgrade-quantity-counter-brand',
    elementClickPowerID: 'upgrade-brand-click-power',
    elementDpsPowerID: 'upgrade-brand-dps-power',
})

let reiPoroUpgrade = new Upgrade({
    elementID: 'upgrade-rei-poro',
    elementCostID: 'upgrade-cost-rei-poro',
    inicialElementCost: 1400000,
    elementCountID: 'upgrade-quantity-counter-rei-poro',
    elementClickPowerID: 'upgrade-rei-poro-click-power',
    elementDpsPowerID: 'upgrade-rei-poro-dps-power',
})

function showUpgrade() {
    const upgrades = [minionUpgrade, acuaminaUpgrade, jinxUpgrade, ryzeUpgrade, brandUpgrade, reiPoroUpgrade]
    upgrades.forEach(upgrade => {

        if (parsedCoinsNumber >= upgrade.parsedElementCost) {
            upgrade.element.style.opacity = '1';
        }
    })
}

let coinsNumberAchievedList = [100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000];

function showAchievement() {
    const achievementValue = document.getElementById('achievement-value');
    const achievementAlert = document.querySelector('.structure-achievement-alert');

    // Itera sobre os marcos e quando alcançar, transiciona a opacidade 0-1-0 e mostra o marco.
    let highestNumberAchieved = 0;
    coinsNumberAchievedList.forEach(function (coinsNumberAchieved) {
        if (parsedCoinsNumber >= coinsNumberAchieved) {
            highestNumberAchieved = coinsNumberAchieved;
            achievementValue.innerText = highestNumberAchieved;
            achievementAlert.style.opacity = '1';
            setTimeout(() => {
                achievementAlert.style.opacity = '0';
            }, 1250);
            coinsNumberAchievedList.shift();
        }
    });
}

// Dinâmica do Click
blueEssence.addEventListener('click', function () {
    parsedCoinsNumber += parsedClickPower;
    coinsNumber.innerText = Math.round(parsedCoinsNumber);
    showUpgrade();
    showAchievement();
})

//Dinâmica do Dps - EM DESENVOLVIMENTO
setInterval(() => {
    parsedCoinsNumber += parsedDpsPower;
    coinsNumber.innerText = parsedCoinsNumber;
}, 1000)