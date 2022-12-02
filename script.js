// create function getComputerChoice
function getComputerChoice(){
// create variable random in function
// set random to a random number between 1 and 3
    let random = Math.floor(Math.random()*3) + 1;
    let computerChoice = "";
    if (random == 1)
        computerChoice = "Rock";
    else if (random == 2) 
        computerChoice == "Paper";
    else if (random == 3)
        computerChoice = "Scissors";
    return computerChoice
}

let computerChoice = getComputerChoice();

// create variable computerChoice containing ""
// if random equals 1, set computerChoice to Rock
// if random equals 2, set computerChoice to Paper
// if random equals 3, set computerChoice to Scissors
// return computerChoice from getComputerChoice

// create function getPlayerChoice
// create variable playerInput set equal to ""
// prompt user for input on command line, save to playerInput
// set playerInput to lowercase
// capitalize first letter of playerInput, save new string to playerChoice
// if playerInput does not equal "Rock", "Paper", or 
//     "Scissors", respond "Invalid input" and return to 
//     beginning of function? 
// return playerChoice

// create function to play a round of rps called playRound
//     with two parameters, (computerChoice, playerChoice)
// compare playerChoice to computerChoice
//     if playerChoice strict equals computerChoice, return tie
//     if playerChoice is scissors
//         if computerChoice is rock, return "You lose! computerChoice beats playerChoice"
//         else if computerChoice is paper, return "You win! playerChoice beats computerChoice"
//     repeat if statement for paper and rock
// function ends
// ***NTS: May want to change return to a win or lose variable instead for
    // scorekeeping purposes

// create new function game
// make and set variable compScore to 0
// make and set variable playerScore to 0
// set variable i = 0
// while loop i <= 4
// run playround, incrementing playerScore and compScore accordingly
// i++
// if playerScore is greater than compScore, log "you win!"
// if playerScore is less than compScore, log "you lose!"
// if playerScore ie equal to compScore, log "It's a tie!"