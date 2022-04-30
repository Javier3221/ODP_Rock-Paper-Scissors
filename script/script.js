const elements = ["rock", "paper", "scissors"]

function computerPlay() {
    let rndNumber = Math.floor(Math.random()*3)+1;
    
    let gameElement = elements[rndNumber-1];
    
    return gameElement;
}

computerPlay();