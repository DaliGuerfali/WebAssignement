let secretNumber;
let remainingAttempts;


function toggleGame() {
    const button = document.getElementById("startButton");
    if (button.textContent === "Start Game") {
        button.textContent = "Leave Game";
        startGame();
    } else {
        button.textContent = "Start Game";
        endGame();
    }
}

function startGame() {
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
}

function checkGuess() {
    const guess = parseInt(document.querySelector("#guessInput").value);
    if (isNaN(guess)) {
        alert("Enter a valid number!");
        return;
    }
    remainingAttempts--;
    if (guess === secretNumber) {
        alert("Congrats! You guessed the corect number.");
        toggleGame();
    } else if (guess < secretNumber) {
        alert("The secret number is higher. Remaining attempts: " + remainingAttempts);
    } else {
        alert("The secret number is lower. Remaining attempts: " + remainingAttempts);
    }
    if (remainingAttempts === 0) {
        alert("Out of attempts! The secret number was " + secretNumber);
        toggleGame();
    }
    document.querySelector("#guessInput").value = "";
    document.querySelector("#guessInput").focus();
}