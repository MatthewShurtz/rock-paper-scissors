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

// Array for computer choice.
const computerChoices = [R, P, S];

// Welcome
let intro = alert("Welcome to Rock, Paper, Scissors");

// User chooses between Rock, Paper, and Scissors, then made lower case.
let userChoice = prompt("Choose between Rock, Paper, or Scissors").toLowerCase();

// Computer randomly selects from choices
let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
let computerChoice = alert("The computer choose " + computerRandomChoice );

// If the user types something other than Rock, Paper, or Scissors.
nonRPS = () => {
if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    alert("That's not a choice O.o");
}
}

userNonRPS = nonRPS();

restartGame = () => {
    if (userNonRPS) {
      return userChoice
    }
}

restartGame()
// If the user chooses rock.
rockEval = () => {
    if (userChoice == "rock" && computerRandomChoice == R) {
        return ("It's a tie -_-")
    }
    else if (userChoice == "rock" && computerRandomChoice == P) {
        return ("You Lose :-(")
    }
    else if (userChoice == "rock" && computerRandomChoice == S) {
        return ("You Win :-)")
    }
}

// If the user chooses paper.
paperEval = () => {
    if (userChoice == "paper" && computerRandomChoice == R) {
        return ("You Win! :-)")
    }
    else if (userChoice == "paper" && computerRandomChoice == P) {
        return ("It's a tie -_-")
    }
    else if (userChoice == "paper" && computerRandomChoice == S) {
        return ("You Lose :-(")
    }
}

// If the user chooses scissors.
scissorsEval = () => {
    if (userChoice == "scissors" && computerRandomChoice == R) {
        return ("You Lose :-(")
    }
    else if (userChoice == "scissors" && computerRandomChoice == P) {
        return ("You Win :-)")
    }
    else if (userChoice == "scissors" && computerRandomChoice == S) {
        return ("It's a tie -_-")
    }
}

// User choices stored in variable for gameplay.
userRock = rockEval();
userPaper = paperEval();
userScissors = scissorsEval();

// Game is played.
gamePlay = () => {
    if (userRock) {
        alert(userRock)
    }
    else if (userPaper) {
        alert(userPaper)
    }
    else if (userScissors) {
        alert(userScissors)
    }
}

// console.log(userChoice);
// console.log(gamePlay());


