const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('you clicked ' + button.textContent)
    })
})

// rock.addEventListener('click', () => {
//     alert("You clicked Rock!");
// });


function getComputerChoice(){
    // Random number between 1-3 to represent Rock, Paper, scissors
    let random = Math.floor(Math.random()*3) + 1;
    // create variable computerChoice containing ""
    let computerChoice = "";
    if (random == 1)
        computerChoice = "Rock";
    else if (random == 2) 
        computerChoice = "Paper";
    else if (random == 3)
        computerChoice = "Scissors";
    return computerChoice
}

function getPlayerChoice(){
    let playerInput = prompt("Please enter Rock, Paper, or Scissors:");
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
//  if playerChoice is a winning combo
    if (player == "Scissors" && comp == "Paper" || 
    player == "Paper" && comp == "Rock" ||
    player == "Rock" && comp == "Scissors") {
        alert("You win! " + player + " beats " + comp + ".");
        // 1 will be current placeholder for "player win" 
        return 1 
    }
// In all other cases
    else {
        alert("You Lose! " + comp + " beats " + player + ".");
        // 2 will be current placeholder for "player win" 
        return 2 
    }
}

// create new function game
// make and set variable compScore to 0
// make and set variable playerScore to 0
// set variable i = 0, while loop i <= 4 or thereabouts
function game() {
    let scoreComp = 0;
    let scorePlayer = 0;
    for (let i = 1; i < 6; i ++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let victOrDefeat = rpsRound(computerChoice, playerChoice);
        if (victOrDefeat == 1){
            scorePlayer++;
        }
        if (victOrDefeat == 2){
            scoreComp++;
        }
        else {
            scorePlayer++;
            scoreComp++;
        }
    }
    if (scoreComp == scorePlayer) {
        alert("It's a tie! " + scoreComp + " to " + scorePlayer + ".")
    }
    if (scoreComp > scorePlayer) {
        alert("You Lose! " + scoreComp + " to " + scorePlayer + ".")
    }
    if (scoreComp < scorePlayer) {
        alert("You Win! " + scorePlayer + " to " + scoreComp + ".")
    }
    scoreComp = 0;
    scorePlayer = 0;
}

// game();
// run playround, incrementing playerScore and compScore accordingly
// i++
// if playerScore is greater than compScore, log "you win!"
// if playerScore is less than compScore, log "you lose!"
// if playerScore ie equal to compScore, log "It's a tie!"