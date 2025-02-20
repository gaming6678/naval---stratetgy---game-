let money = 1000;
let fleet = 0;
let turn = 1;

let enemies = [
    { name: "China", fleet: 2 },
    { name: "USA", fleet: 3 },
    { name: "Russia", fleet: 1 }
];

function updateUI() {
    document.getElementById("money").innerText = money;
    document.getElementById("fleet").innerText = fleet;
    let enemyDiv = document.getElementById("enemies");
    enemyDiv.innerHTML = "";
    enemies.forEach((enemy, index) => {
        enemyDiv.innerHTML += `<div class="country">
            <p><strong>${enemy.name}</strong></p>
            <p>Fleet: ${enemy.fleet} 🚢</p>
            <button onclick="attack(${index})">Attack</button>
        </div>`;
    });
}

function buildShip() {
    if (money >= 200) {
        money -= 200;
        fleet += 1;
        updateUI();
    } else {
        alert("Not enough money!");
    }
}

function attack(enemyIndex) {
    if (fleet > 0) {
        fleet -= 1;
        enemies[enemyIndex].fleet -= 1;
        if (enemies[enemyIndex].fleet <= 0) {
            alert(`You defeated ${enemies[enemyIndex].name}!`);
            enemies.splice(enemyIndex, 1);
        }
        updateUI();
    } else {
        alert("No ships to attack!");
    }
}

function endTurn() {
    money += 300;
    turn++;
    updateUI();
}

updateUI();
