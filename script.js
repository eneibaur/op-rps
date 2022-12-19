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

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener('click', () => game(getComputerChoice(), button.textContent));
});

let scorePlayer = 0;
let scoreComp = 0;

const scoreOne = document.querySelector(".scoreOne");
const scoreTwo = document.querySelector(".scoreTwo");

scoreOne.innerText = "0";
scoreTwo.innerText = "0";

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
};

function modifyScorePlayer() {
    scorePlayer++;
    scoreOne.innerText = scorePlayer;
}

function modifyScoreComp() {
    scoreComp++;
    scoreTwo.innerText = scoreComp;
}

function game(comp, player) {
    let playerChoice = player;
    let computerChoice = comp;
    let victOrDefeat = rpsRound(computerChoice, playerChoice);
    if (victOrDefeat == 1){
        modifyScorePlayer();
    }
    if (victOrDefeat == 2){
        modifyScoreComp();
    }
    if (victOrDefeat == 3) {
        modifyScorePlayer();
        modifyScoreComp();
    };
    if (scoreComp == 5 || scorePlayer == 5) {
        if (scoreComp == scorePlayer) {
            alert("It's a tie! " + scoreComp + " to " + scorePlayer + ".")
        };
        if (scoreComp > scorePlayer) {
            alert("You Lose! " + scoreComp + " to " + scorePlayer + ".")
        };
        if (scoreComp < scorePlayer) {
            alert("You Win! " + scorePlayer + " to " + scoreComp + ".")
        };
        scoreComp = 0;
        scorePlayer = 0; 
    };
};

// const rock = document.querySelector('#rock');
// let playerChoice = rock.textContent;
// rock.addEventListener('click', () => rpsRound(getComputerChoice(), rock.textContent));

// function getPlayerChoice(){
//     let playerInput = prompt("Please enter Rock, Paper, or Scissors:");
//     playerInput = playerInput.toLowerCase();
//     // capitalize first letter of playerInput
//     playerInput = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
//     let playerChoice = playerInput;
//     return playerChoice;
//     }

// create new function game
// make and set variable compScore to 0
// make and set variable playerScore to 0
// set variable i = 0, while loop i <= 4 or thereabouts

// game();
// run playround, incrementing playerScore and compScore accordingly
// i++
// if playerScore is greater than compScore, log "you win!"
// if playerScore is less than compScore, log "you lose!"
// if playerScore ie equal to compScore, log "It's a tie!"