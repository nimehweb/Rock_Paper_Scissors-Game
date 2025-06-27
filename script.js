const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("resultText");
const computerChoiceDisplay = document.getElementById("computerChoice");
const playAgainButton = document.getElementById("playAgain");

// function to get a random choice for the computer
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// function to check if player's choice matches computer's choice and display the result
 function playgame(playerChoice) {
    const computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = `${computerChoice}`;
    if (playerChoice === computerChoice){
        result.textContent = "Draw";
    }
    else if((playerChoice === "rock" && computerChoice === "scissors") ||
             (playerChoice === "paper" && computerChoice === "rock") ||
             (playerChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = "You win!";
    }else{
        result.textContent = "You lose!";
    }
}

rock.addEventListener("click", function(){
    let choice = "rock";
    playgame(choice);
    updateScores();
       
});
paper.addEventListener("click", function(){
    let choice = "paper";
    playgame(choice);
    updateScores();
      
}); 
scissors.addEventListener("click", function(){
    let choice = "scissors";
    playgame(choice);
    updateScores();
       
});
// update scores 
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore"); 
let playerScoreCount = 0;
let computerScoreCount = 0; 
function updateScores(){
    if (result.textContent === "You win!") {
        playerScoreCount++;
        playerScore.textContent = ` ${playerScoreCount}`;  
    }
    else if (result.textContent === "You lose!") {
        computerScoreCount++;
        computerScore.textContent = ` ${computerScoreCount}`;  
    }
}
