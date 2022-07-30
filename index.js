const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[(Math.random() * choice.length) | 0];
    
}

playerCount = 0
computerCount = 0



function playRound(playerChoice, computerSelection) {
    playerChoice = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
    computerSelection = getComputerChoice();
    result = ""
    if (playerChoice == computerSelection) {
    return result = "It's a tie"
    } else if (playerChoice == "rock" && computerSelection == "scissors" ||
                playerChoice == "scissors" && computerSelection == "paper" ||
                playerChoice == "paper" && computerSelection == "rock") {
                    playerCount += 1
                   return result = `You won, ${playerChoice} beats ${computerSelection}`
                }
                else {
                    computerCount += 1
                   return result = `You lost ${computerSelection} beats ${playerChoice}`
                }
}

function whoWon() {
    result = ""
    if (playerCount > computerCount) {
    return result = "You won"
    } else if (computerCount > playerCount) {
      return result = "You lost"
    } else 
    return result = "It's a tie"
}

function game() {
    for (i = 0; i < 5; i++) {
    playRound()
    console.log(playerCount)
    console.log(computerCount) }
    console.log(whoWon())
}