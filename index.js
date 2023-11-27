let options = ["rock", "paper", "scissors"];

function computerChoice() {
    let randomIndex = Math.round(Math.random() * options.length)
    let randomChoice = options[randomIndex];
    return randomChoice
}

const rules = choice => {
    const lowerCaseChoice = choice.toLowerCase();
    let defeat
    switch (lowerCaseChoice) {
        case "rock":
            defeat = "paper";
            break;
        case "paper":
            defeat = "scissors";
            break;
        case "scissors":
            defeat = "rock";
            break;
        default:
            defeat = "tie";
    }
    return defeat;
};

function playRound() {
    let playerChoice = prompt("What's your move? Rock, Paper or scissors?").toLowerCase()
    const playerSelection = playerChoice;
    const computerSelection = computerChoice();
    const beatsPlayerSelection = rules(playerSelection);
    const beatsComputerSelection = rules(computerSelection)

    if (playerSelection === beatsComputerSelection) {
        console.log(`${playerSelection} beats ${computerSelection}, you wins!`);
    } else if (computerSelection === beatsPlayerSelection) {
        console.log(`${computerSelection} beats ${playerSelection}, computer wins!`)
    } else {
        console.log("it's a tie!")
    }
}

function game() {
    let i = 0;
    while (i < 5) {
        playRound();
        i++;
    }
}

console.log(game())
