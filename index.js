const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[(Math.random() * choice.length) | 0];
    
}

playerCount = 0
computerCount = 0

function playRound(playerChoice, computerSelection) {
    if (playerChoice == computerSelection)
    return "It's a tie"
    else if (playerChoice == "rock" && computerSelection == "scissors")
    return "You won, rock beats scissors"
    else if (playerChoice == "scissors" && computerSelection == "paper")
    return "You won, scissors beats paper"
    else if (playerChoice == "paper" && computerSelection == "rock")
    return "You won, paper beats rock"
    else if (playerChoice == "rock" && computerSelection == "paper")
    return "You lost, paper beats rock"
    else if (playerChoice == "scissors" && computerSelection == "rock")
    return "You lost, rock beats scissors"
    else if (playerChoice == "paper" && computerSelection == "scissors")
    return "You lost, scissors beats paper"
    else
     return "O.O"
}

const playerChoice = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerChoice, computerSelection))

function game() {
    for (i = 0; i < 5; i++)
    playRound()
}


// Funkcija game
// 5 kartus playRound paleisti
// kas daugiau pergaliu turi paskelbti nugaletoju