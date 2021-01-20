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

gameplay = () => {     
        let cScore = 0;
        let uScore = 0; 
// If the user chooses rock.
        rk.addEventListener("click", rockEval = () => {
        let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            alert("The computer chose " + computerRandomChoice)
        if (computerRandomChoice == R) {
            alert("It's a tie -_-")
        }
        else if (computerRandomChoice == P) {
            cScore++;
            alert("You Lose :-(")
        }
        else if (computerRandomChoice == S) {
            uScore++;
            alert("You Win :-)")
        }
    playerScoreSelector.textContent = uScore;
    computerScoreSelector.textContent = cScore;
    if (uScore == 5 || cScore == 5) {
    alert("Game Over! Chick a weapon to start a new game!")
    uScore = 0
    cScore = 0
}
})

// If the user chooses paper.
        pa.addEventListener("click", paperEval = () => {
        let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            alert("The computer chose " + computerRandomChoice)
        if (computerRandomChoice == R) {
            uScore++;
            alert("You Win! :-)")
        }
        else if (computerRandomChoice == P) {
            alert("It's a tie -_-")
        }
        else if (computerRandomChoice == S) {
            cScore++;
            alert("You Lose :-(") 
    }
    playerScoreSelector.textContent = uScore;
    computerScoreSelector.textContent = cScore;
    if (uScore == 5 || cScore == 5) {
    alert("Game Over! Chick a weapon to start a new game!")
    uScore = 0
    cScore = 0
}
})

// If the user chooses scissors.
        sc.addEventListener("click", scissorsEval = () => {
        let computerRandomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            alert("The computer chose " + computerRandomChoice)
        if (computerRandomChoice == R) {
            cScore++;
            alert("You Lose :-(")
        }
        else if (computerRandomChoice == P) {
            uScore++;
            alert("You Win :-)")
        }
        else if (computerRandomChoice == S) {
            alert("It's a tie -_-")
        }
    playerScoreSelector.textContent = uScore;
    computerScoreSelector.textContent = cScore;
    if (uScore == 5 || cScore == 5) {
    alert("Game Over! Chick a weapon to start a new game!")
    uScore = 0
    cScore = 0
}
})
}
gameplay();

