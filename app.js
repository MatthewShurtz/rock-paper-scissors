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
let playerChoice = [];
let computerChoice = [];

// Welcome and getting players choice
let intro = alert("Welcome to Rock, Paper, Scissors");
let userChoice = prompt("Choose between Rock, Paper, or Scissors");

// Users choice
userPlay = () => {
    if (userChoice === "Rock") {
    return ("You choose rock")
}
}
console.log(userPlay(userChoice))

// Computer's choice
// computerPlay => (computerChoices) = {

// }

// How each game is evaluated
// gameRound => (playerChoices, computerChoices) = {

// }