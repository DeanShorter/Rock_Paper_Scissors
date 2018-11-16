const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');     
let youChose = document.querySelector('#youChose');             // Pushes user selection to DOM
let opponentChose = document.querySelector('#opponentChose');    // Pushes computer selection to DOM
let outcome = document.querySelector('#outcome');
                                        
const optionList = ['rock', 'paper', 'scissors'];                  // Array of options for computer selection to cycle through
let userSelection;
let opponentSelection;

rockBtn.addEventListener('click', rock); 
paperBtn.addEventListener('click', paper);
scissorsBtn.addEventListener('click', scissors);

function rock(){
    userSelection = "rock";
    opponentSelection = getRandomOption(optionList);
    getResult();
    youChose.innerHTML = userSelection;
    opponentChose.innerHTML = opponentSelection;
}

function paper(){
    userSelection = "paper";
    opponentSelection = getRandomOption(optionList);
    getResult();
    youChose.innerHTML = userSelection;
    opponentChose.innerHTML = opponentSelection;
}

function scissors(){
    userSelection = "scissors";
    opponentSelection = getRandomOption(optionList);
    getResult();
    youChose.innerHTML = userSelection;
    opponentChose.innerHTML = opponentSelection;
}

function getRandomOption(options){
    let randomOption = Math.floor(Math.random() * options.length);  
    return options[randomOption];    
}


// Determines all possible outcomes

function getResult(){
    
    if(userSelection == "rock" && opponentSelection == "scissors") {
        outcome.innerHTML = "You Won!";
    }
    else if(userSelection == "rock" && opponentSelection == "paper"){
        outcome.innerHTML = "You Lost!";
    }
    else if(userSelection == "scissors" && opponentSelection == "paper"){
        outcome.innerHTML = "You Won!";
    }
    else if(userSelection == "scissors" && opponentSelection == "rock"){
        outcome.innerHTML = "You Lost!";
    }
    else if(userSelection == "paper" && opponentSelection == "rock"){
    outcome.innerHTML = "You Won!";
    }
    else if(userSelection == "paper" && opponentSelection == "scissors"){
    outcome.innerHTML = "You Lost!";
    }
    else if(userSelection == opponentSelection){
    outcome.innerHTML = "Draw!";
    }
    else {
        outcome.innerHTML = "I dunno";
    }

}



