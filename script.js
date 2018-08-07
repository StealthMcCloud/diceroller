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



// let total3 = document.getElementById("total3");
// let result3 = document.createTextNode(dice2);
// total3.appendChild(result3);
