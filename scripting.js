//Name: Marco
//Date: 9/29/2023
const rollButton = document.getElementById("rollButton");
const roll1Container = document.getElementById("roll1Container");
const roll2Container = document.getElementById("roll2Container");
const diceTotal = document.getElementById("diceTotal");
rollButton.addEventListener("click", rollDice);
/*Changes the content of roll1Container and roll2Container to random dice rolls,
and changes the content of diceTotal to display the combined sum. */
function rollDice(){
    const roll1 = generateRandomDiceNumber();
    const roll2 = generateRandomDiceNumber();
    const rollSum = roll1 + roll2;
    roll1Container.textContent = "Rolled a " + roll1 + "!";
    roll2Container.textContent = " Rolled a " + roll2 + "!";
    diceTotal.textContent = "Total: " + rollSum;
}
//Generates a random number from 1 to 6
function generateRandomDiceNumber() {
    return Math.floor((Math.random() * 6) + 1);
}
