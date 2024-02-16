let secretNumber;
let remainingAttempts;


function toggleGame() {
    const button = document.getElementById("gameButton");
    if (button.textContent === "Start Game") {
        startGame();
    } else {
        endGame();
    }
}

function startGame() {
    const button = document.getElementById("gameButton");
    button.textContent = "Leave Game";
    /* asking the user to choose difficulty */
    const difficulty = prompt("Choose difficilty :\n1: Easy\n2: Medium\n3: Hard").toLowerCase();
    let max;
    switch (difficulty) {
        case '1':
            remainingAttempts = 7;
            max = 30;
            break;
        case '2':
            remainingAttempts = 5;
            max = 50;
            break;
        case '3':
            remainingAttempts = 3;
            max = 70;
            break;
        default:
            alert("Invalid difficulty.");
            toggleGame();
            return;
    }
    /* choosing a secret number */
    secretNumber = Math.floor(Math.random() * max) + 1;
    console.log("Secret number:", secretNumber);
    alert("You have " + remainingAttempts + ' attempts\n ' +
        'The number is between ' + 1 + ' and ' + max);
    document.querySelector("#gameInput").classList.remove('hidden');
    document.querySelector("#guessInput").focus();
    console.log("Starting game with difficulty: " + difficulty);
}

function endGame() {
    document.querySelector("#gameInput").classList.add('hidden');
    document.querySelector("#guessInput").value = "";
    const button = document.getElementById("gameButton");
    button.textContent = "Start Game";
}

function checkGuess() {
    const guess = parseInt(document.querySelector("#guessInput").value);
    if (isNaN(guess)) {
        alert("Enter a valid number!");
        return;
    }
    remainingAttempts--;
    if (guess === secretNumber) {
        alert("Congrats! You guessed the correct number.");
        endGame();
    } else if (guess < secretNumber) {
        alert("The secret number is higher. Remaining attempts: " + remainingAttempts);
    } else {
        alert("The secret number is lower. Remaining attempts: " + remainingAttempts);
    }
    if (remainingAttempts === 0) {
        alert("Out of attempts! The secret number was " + secretNumber);
        endGame();
    }
    document.querySelector("#guessInput").value = "";
    document.querySelector("#guessInput").focus();
}