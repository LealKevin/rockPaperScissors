
// Function that randomly choose between Rock Paper Scissors (For the computer choice)

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}


// Function that receive the imput from the player, and store it in a variable

function getHumanChoice(){
    let humanChoice = prompt("Your choice! Make it right!").toLowerCase();
    return humanChoice;
}

// Creation of 2 variables to keep track of the current score, starting with the value 0

let humanScore = 0;
let computerScore = 0;

// Function that takes the choice of the computer and the player, and defines who wins
// Creating the logic of the rules of the game

function playRound(getComputerChoice, getHumanChoice){

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
  
    if (computerChoice === humanChoice){
// Annouce the winner of the round
        let result = "It's a draw! " + computerChoice + " it's the same of " + humanChoice;
        return result;
    }

    else if (computerChoice === "rock" && humanChoice === "scissors" ||
         computerChoice === "scissors" && humanChoice === "paper" ||
          computerChoice === "paper" && humanChoice === "rock"){
// Adding the score to the variables created to do so
        computerScore++;
// Annouce the winner of the round
        let result = computerChoice + " beats " + humanChoice + ", You loose!";
        return result;
    
    }
    else{
// Adding the score to the variables created to do so
        humanScore++;
// Annouce the winner of the round
        let result = humanChoice + " wins " + computerChoice + ", You win!";
        return result;
    } 
}
// Function that "plays" 5 times the rounds, using loops
// After the 5 rounds, calculate who win with the help of the scores stored
// Message showing who wins, and end of game.
function playGame(){

    for (let numberRounds = 1; numberRounds <= 5; numberRounds++){
        console.log("Rounds:" + numberRounds);
        console.log(playRound(getComputerChoice, getHumanChoice));
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    if (humanScore > computerScore){
        console.log("You win congratz!")
    }
    else{
        console.log("You loose, sorry!")
    }
}
 playGame();


    




