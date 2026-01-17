let youScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const youScorePara = document.querySelector("#youscore");
const compScorePara = document.querySelector("#compscore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor="black";
};

const showWinner = (youWin, userChoice, compChoice) => {
    if (youWin) {
        youScore++;
        youScorePara.innerText = youScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let youWin = true;

        if (userChoice === "rock") {
            youWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            youWin = compChoice === "rock";
        } else {
            youWin = compChoice === "paper";
        }

        showWinner(youWin, userChoice, compChoice);
    }
};
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", () => {
    youScore = 0;
    compScore = 0;

    youScorePara.innerText = youScore;
    compScorePara.innerText = compScore;

    msg.innerText = "Play your move";
});

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

