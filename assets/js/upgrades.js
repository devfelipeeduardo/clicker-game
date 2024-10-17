// variáveis

const clickPower = document.getElementById('power-counter');

const upgradeA = document.getElementById('upgrade-a');
upgradeA.addEventListener('click', function() {
    let parsedClickPower = parseInt(clickPower.innerText);
    parsedClickPower++;
    clickPower.innerText = parsedClickPower;
    alert('a');
})
