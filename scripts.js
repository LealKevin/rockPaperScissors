
// Function that randomly choose between Rock Paper Scissors (For the computer choice)

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}


// Function that receive the imput from the player, and store it in a variable

function getHumanChoice(choice){
    let humanChoice = choice;
    return humanChoice;
}

// Creation of 2 variables to keep track of the current score, starting with the value 0

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

// Function that takes the choice of the computer and the player, and defines who wins
// Creating the logic of the rules of the game

const divResult = document.querySelector("#result");
const displayRounds = document.querySelector("#rounds");
const displayHumanScore = document.querySelector("#displayHumanScore");
const displayComputerScore = document.querySelector("#displayComputerScore");

function playRound(getComputerChoice, HumanChoice){

    rounds ++;
    let humanChoice = HumanChoice;
    let computerChoice = getComputerChoice();
    
  
    
    

    if (computerChoice === humanChoice){
// Annouce the winner of the round
        let result = "It's a draw! " + computerChoice + " it's the same of " + humanChoice;
        // return result;
        console.log(result);
    }

    else if (computerChoice === "rock" && humanChoice === "scissors" ||
         computerChoice === "scissors" && humanChoice === "paper" ||
          computerChoice === "paper" && humanChoice === "rock"){
// Adding the score to the variables created to do so
        computerScore++;
// Annouce the winner of the round
        let result = computerChoice + " beats " + humanChoice + ", You loose!";
        // return result;
        console.log(result);
    }
    else{
// Adding the score to the variables created to do so
        humanScore++;
// Annouce the winner of the round
        let result = humanChoice + " wins " + computerChoice + ", You win!";
        // return result;
        console.log(result);
    } 

    if (humanScore === 5 || computerScore === 5){
      
        choices.style.display=("none");
        
    
        if(humanScore === 5){
            divResult.style.display=("");
            divResult.textContent=("Human wins!");
        }
        else{
            divResult.style.display=("");
            divResult.textContent=("Computer wins!");
        }
    }
    displayRounds.textContent = (rounds);
    displayComputerScore.textContent = (computerScore);
    displayHumanScore.textContent = (humanScore);
}





// Function that "plays" 5 times the rounds, using loops
// After the 5 rounds, calculate who win with the help of the scores stored
// Message showing who wins, and end of game.


// function playGame(){


    
    
//     for (let numberRounds = 1; numberRounds <= 5; numberRounds++){
//         rounds.textContent=("Rounds:" + numberRounds);
//         // result.textContent=(playRound(getComputerChoice, getHumanChoice));
//         hScore.textContent=("Human score: " + humanScore);
//         cScore.textContent=("Computer score: " + computerScore);
//     }
//     if (humanScore > computerScore){
//         winningResult.textContent=("You win congratz!")
//     }
//     else{
//         winningResult.textContent=("You loose, sorry!")
//     }
// }



const body = document.querySelector("body");

const btnPaper = document.createElement("button");
const btnRock = document.createElement("button");
const btnScissors = document.createElement("button");
const divChoice = document.querySelector("#choices")


btnPaper.textContent=("Paper")
btnRock.textContent=("Rock")
btnScissors.textContent=("Scissors")

btnPaper.addEventListener("click",() => {playRound(getComputerChoice,"paper")});
btnRock.addEventListener("click",() => {playRound(getComputerChoice,"rock")});
btnScissors.addEventListener("click",() => {playRound(getComputerChoice,"scissors")});

divChoice.appendChild(btnPaper);
divChoice.appendChild(btnRock);
divChoice.appendChild(btnScissors);


const btnReplay = document.querySelector("#btnReplay");
btnReplay.textContent=("Replay");
btnReplay.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    choices.style.display=("");
    divResult.style.display=("none");
    displayRounds.textContent =(rounds);
    displayComputerScore.textContent =(computerScore);
    displayHumanScore.textContent = (humanScore);

})




//  playGame();


    




