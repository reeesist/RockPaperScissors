const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[(Math.random() * choice.length) | 0];
    
}

playerCount = 0
computerCount = 0



function playRound(playerChoice, computerSelection) {
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
    if (playerCount > computerCount && playerCount == 5) {
       finalResult.textContent = "You won!";
       buttons.forEach((button) => {
        button.disabled = true;
       });
    } else if (computerCount > playerCount && computerCount == 5) {;
       finalResult.textContent = "You lost!";
       buttons.forEach((button) => {
        button.disabled = true;
       }); 
    }
    else finalResult.textContent = ''
}

const body = document.querySelector('body');

    const rock = document.createElement('button');
    rock.classList.add('rock');
    rock.textContent = 'ROCK';
    body.appendChild(rock);

    const paper = document.createElement('button');
    paper.classList.add('paper');
    paper.textContent = 'PAPER';
    body.appendChild(paper);

    const scissors = document.createElement('button');
    scissors.classList.add('scissors');
    scissors.textContent = 'SCISSORS';
    body.appendChild(scissors);

const buttons = document.querySelectorAll('button.rock, button.scissors, button.paper');

rock.addEventListener('click', () => {
    playRound('rock')
    score.textContent = `Players score: ${playerCount} Computer score: ${computerCount}`;
    whoWon();
})

paper.addEventListener('click', () => {
    playRound('paper');
    score.textContent = `Players score: ${playerCount} Computer score: ${computerCount}`;
    whoWon();
})

scissors.addEventListener('click', () => {
    playRound('scissors');
    score.textContent = `Players score: ${playerCount} Computer score: ${computerCount}`;
    whoWon();
})

var score = document.createElement('div');
score.classList.add('score');
body.appendChild(score);

var finalResult = document.createElement('div');
finalResult.classList.add('result');
body.appendChild(finalResult);

const playAgain = document.createElement('button');
playAgain.classList.add('again');
playAgain.textContent = "Play again";
body.appendChild(playAgain)

function restart() {
    buttons.forEach((button) => {
        button.disabled = false;
       });
       playerCount = 0;
       computerCount = 0;
       score.textContent = "";
       finalResult.textContent = "";
       
}

playAgain.addEventListener('click', restart)