// This Rock, Paper, Scissors game will be played in the console with prompts.
// Once the page is loaded, the user will be asked to choose between Rock, Paper, and Scissors.
// The user will type their selection in (not case senitive) and will be weight against the computer's selection.
// The program will evaluate each selection and display the results.
// Then the winner will be shown.
// The game will then reset.


// Assigning choices to variable
const R = "Rock"
const P = "Paper"
const S = "Scissors"

// Creating array for user and computer choices
const playerChoices = [R, P, S];
const computerChoices = [R, P, S];


// Welcome and getting players choice
let intro = alert("Welcome to Rock, Paper, Scissors");
let userChoice = prompt("Choose between Rock, Paper, or Scissors");

// Users choice
userPlay = () => {
    if (userChoice == "Rock" || userChoice == "rock") {
        return ("You choose rock")
    }
    else if (userChoice == "Paper" || userChoice == "paper") {
        return ("You choose Paper")
    }
    else if (userChoice == "Scissors" || userChoice == "scissors") {
        return ("You choose Scissors")
    }
    else {
        return ("That's not a choice...")
    }
}

// Computer randomly selects from choices
let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
let computerChoice = alert("The computer choose " + computerRandomChoice );

