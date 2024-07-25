
// Function that randomly choose between Rock Paper Scissors (For the computer choice)

function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}


// Function that receive the imput from the player, and store it in a variable

function getHumanChoice(){
    let humanChoice = prompt("Your choice! Make it right!").toLowerCase();
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


// Creation of 2 variables to keep track of the current score, starting with the value 0
// Function that takes the choice of the computer and the player, and defines who wins
// Creating the logic of the rules of the game
// Annouce the winner of the round
// Adding the score to the variables created to do so
// Function that "plays" 5 times the rounds, using loops
// After the 5 rounds, calculate who win with the help of the scores stored
// Message showing who wins, and end of game.
