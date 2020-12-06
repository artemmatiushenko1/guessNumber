'use strict';

let answerNumber = Math.floor(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const changeBackColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function () {
    let guessNumber = Number(document.querySelector('.guess').value);

    if (!guessNumber) {
        displayMessage("⛔You didn't enter a number!");
    } else if (guessNumber === answerNumber) {
        document.querySelector('.number').textContent = answerNumber;
        displayMessage("You won! Congratulations!🎉");
        changeBackColor('#8bd44c');

        if (score > highScore) {
            highScore = score;
            document.querySelector('.record').textContent = highScore;
        }
    } else {
        if (score > 1) {
            displayMessage(guessNumber > answerNumber ? "Too high! Try again" : "Too low! Try again");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game💥');
            changeBackColor('#ff7842');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Again mode
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    answerNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    changeBackColor('#222');
    document.querySelector('.guess').value = ''
})