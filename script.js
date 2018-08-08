let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function diceRoller1() {
    let rollOfDice = Math.floor((Math.random() * 6) +1);
    document.getElementById("total1").innerHTML = rollOfDice;
    return rollOfDice;
}


function diceRoller2() {
    let rollOfDice = Math.floor((Math.random() * 6) +1);
    document.getElementById("total2").innerHTML = rollOfDice;
    return rollOfDice;
}

let roll3 = 0
for (let i = 0; i < 1000; i++) {
    roll3 = diceRoller1() + diceRoller2();
    count[roll3] = count[roll3] + 1;
    document.getElementById("total3").innerHTML = count;
}

for (let i = 0; i < 13; i++) {
    let graph = document.getElementById('graph');
    let block = document.createElement("div");
    document.createElement("div");
    block.style.backgroundColor = "gray";
    block.style.width = count[i] + "px";
    block.style.height = "20px";
    block.style.marginTop = "2px";
    graph.appendChild(block);
}