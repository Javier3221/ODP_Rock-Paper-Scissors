
const rock = document.querySelector(".rock"),
    paper = document.querySelector(".paper"),
    scissors = document.querySelector(".scissors");

let computerWins = 0,
    playerWins = 0;
    roundsPlayed = 0;

rock.addEventListener("click", () => {
    checkPlayerSelection("rock");
})

paper.addEventListener("click", () => {
    checkPlayerSelection("paper");
})

scissors.addEventListener("click", () => {
    checkPlayerSelection("scissors");
})

function checkPlayerSelection(string) {
    game(string);
}

//The game method loops through the game 5 times, and decides a winner at the end
function game(playerSelection) {
    console.log("welcome to the rock, paper, scissors console game")

    const div = document.querySelector(".game-history")

    const result = document.createElement("p");
    result.textContent = playRound(playerSelection, computerPlay())

    if (roundsPlayed == 5) {
        if (computerWins > playerWins) {
            result.textContent = "The computer wins! Reload the page to keep playing";
        }
        else if (computerWins < playerWins) {
            result.textContent = "You win! Reload the page to keep playing";
        }
        else {
            result.textContent = "I'ts a tie. Reload the page to keep playing"
        }

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    div.appendChild(result);
    roundsPlayed++;

}

//Method for choosing a random element from the "elements" array for the computer to use
function computerPlay() {
    let rndNumber = Math.floor(Math.random() * 3);

    const elements = ["rock", "paper", "scissors"]

    let gameElement = elements[rndNumber];
    console.log(gameElement);

    return gameElement;
}

/*Method for playing a single round of rock, paper, scissors. depending on the computer selection,
it evaluates the user selection. E.g.: if the computer selects rock, the function evaluates wether
the user selected paper or scissors, and returns a string accordigly*/
function playRound(playerSelection, computerSelection) {
    let returnString = "It's a tie"

    if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            returnString = "You win. Congratulations! Paper beats Rock"
            playerWins++;
        }
        else if (playerSelection == "scissors") {
            returnString = "Ha! I win. Rock beats Scissors"
            computerWins++;
        }
    }
    else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            returnString = "Ha! I win. Paper beats Rock"
            computerWins++;
        }
        else if (playerSelection == "scissors") {
            returnString = "You win. Congratulations! Scissors beats Paper"
            playerWins++;
        }
    }
    else {
        if (playerSelection == "rock") {
            returnString = "You win. Congratulations! Rock beats Scissors"
            playerWins++;
        }
        else if (playerSelection == "paper") {
            returnString = "Ha! I win. Scissors beat Paper"
            computerWins++;
        }
    }

    return returnString
}