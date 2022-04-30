game();

function game() {
    console.log("welcome to the rock, paper, scissors console game")
    playerSelection = prompt("Please select rock, paper or scissors to start playing").toLowerCase()

    let playerWins = 0,
    computerWins = 0;

    const elements = ["rock", "paper", "scissors"]

    console.log(playRound(playerSelection, computerPlay()))

    for (i = 0; i < 4; i++){
        playerSelection = prompt("Another Round!").toLowerCase();
        console.log(playRound(playerSelection, computerPlay()));

        if (i == 3){

            let winner = playerWins > computerWins ? "You are the ultimate winner" : "I am the ultimae winner"
            console.log(`That's it. Game over. ${winner}`)
        }
    }
}

//Method for choosing a random element from the array above for the computer to use
function computerPlay() {
    let rndNumber = Math.floor(Math.random()*3)+1;
    
    let gameElement = elements[rndNumber-1];
    console.log(gameElement);

    return gameElement;
}

/*Method for playing a single round of rock, paper, scissors. depending on the computer selection,
it evaluates the user selection. E.g.: if the computer selects rock, the function evaluates wether
the user selected paper or scissors, and returns a string accordigly*/

function playRound(playerSelection, computerSelection) {
    let returnString = "It's a tie"

    if (computerSelection == "rock"){
        if (playerSelection == "paper"){
            returnString = "You win. Congratulations! Paper beats Rock"
            playerWins++
        }
        else if (playerSelection == "scissors"){
            returnString = "Ha! I win. Rock beats Scissors"
            computerWins++
        }
    }
    else if (computerSelection == "paper"){
        if (playerSelection == "rock"){
            returnString = "Ha! I win. Paper beats Rock"
            computerWins++
        }
        else if(playerSelection == "scissors") {
            returnString = "You win. Congratulations! Scissors beats Paper"
            playerWins++
        }
    }
    else {
        if (playerSelection == "rock"){
            returnString = "You win. Congratulations! Rock beats Scissors"
            playerWins++
        }
        else if (playerSelection == "paper"){
            returnString = "Ha! I win. Scissors beat Paper"
            computerWins++
        }
    }

    return returnString
}