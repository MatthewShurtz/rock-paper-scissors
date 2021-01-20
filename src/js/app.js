// Rock, Paper, Scissors

// Selectors
const rk = document.getElementById("rock");
const pa = document.getElementById("paper");
const sc = document.getElementById("scissors");
const opt = document.querySelector(".options")
let computerScoreSelector = document.querySelector(".computer-score");
let playerScoreSelector = document.querySelector(".player-score");

// Assigning choices to variable
const R = "Rock"
const P = "Paper"
const S = "Scissors"
const computerChoices = [R, P, S];

let cScore = 0;
let uScore = 0;

gameplay = () => {
// If the user chooses rock.
        rk.addEventListener("click", rockEval = () => {
        let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            alert("The computer chose " + computerRandomChoice)
        if (computerRandomChoice == R) {
            alert("It's a tie -_-")
        }
        else if (computerRandomChoice == P) {
            alert("You Lose :-(")
            cScore++;
            return cScore
        }
        else if (computerRandomChoice == S) {
            alert("You Win :-)")
            uScore++;
            return uScore
        }
})

// If the user chooses paper.
        pa.addEventListener("click", paperEval = () => {
        let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            alert("The computer chose " + computerRandomChoice)
        if (computerRandomChoice == R) {
        alert("You Win! :-)")
            uScore++;
        }
        else if (computerRandomChoice == P) {
            alert("It's a tie -_-")
        }
        else if (computerRandomChoice == S) {
            alert("You Lose :-(") 
            cScore++;
    }
})

// If the user chooses scissors.
        sc.addEventListener("click", scissorsEval = () => {
        let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            alert("The computer chose " + computerRandomChoice)
        if (computerRandomChoice == R) {
            alert("You Lose :-(")
            cScore++

        }
        else if (computerRandomChoice == P) {
            alert("You Win :-)")
            uScore++;
        }
        else if (computerRandomChoice == S) {
            alert("It's a tie -_-")
        }
})
console.log(cScore);
console.log(uScore);
}
gameplay();

