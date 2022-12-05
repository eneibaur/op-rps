// create function getComputerChoice, which sets computer choice to one of the three possibilities
function getComputerChoice(){
    // create variable random in function
    // set random to a random number between 1 and 3
    let random = Math.floor(Math.random()*3) + 1;
    // create variable computerChoice containing ""
    let computerChoice = "";
    // if random equals 1, set computerChoice to Rock
    if (random == 1)
        computerChoice = "Rock";
    // if random equals 2, set computerChoice to Paper
    else if (random == 2) 
        computerChoice = "Paper";
    // if random equals 3, set computerChoice to Scissors
    else if (random == 3)
        computerChoice = "Scissors";
    // return computerChoice from getComputerChoice
    return computerChoice
}

// create function getPlayerChoice to get possible choices from user
function getPlayerChoice(){
    // create variable playerInput set equal to ""
    // prompt user for input on command line, save to playerInput
    let playerInput = prompt("Please enter Rock, Paper, or Scissors:");
    // set playerInput to lowercase
    playerInput = playerInput.toLowerCase();
    // capitalize first letter of playerInput
    playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    let playerChoice = playerInput;
    return playerChoice;
    }

// create function to play a round of rps called playRound
//     with two parameters, (computerChoice, playerChoice)
function rpsRound (comp, player){
//  compare playerChoice to computerChoice
//  if playerChoice strict equals computerChoice, return tie
    if (comp === player) {
        alert("It's a tie!")
        // 3 will be current placeholder for "tie" 
        return 3 
    }
//  if playerChoice is scissors
    if (player == "Scissors" && comp == "Paper") {
        alert("You win! ${player} beats ${comp}")
        // 1 will be current placeholder for "player win" 
        return 1 
    }
//         if computerChoice is rock, return "You lose! computerChoice beats playerChoice"
//         else if computerChoice is paper, return "You win! playerChoice beats computerChoice"
//     repeat if statement for paper and rock
// function ends
// ***NTS: May want to change return to a win or lose variable instead for
    // scorekeeping purposes
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
console.log(playerChoice);
console.log(computerChoice);
rpsRound(computerChoice, playerChoice);

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