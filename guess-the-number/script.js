'use strict';

let upperLimit = prompt('Enter the upper limit'); //limited to borowser
// console.log('here is the value');
 //console.log(score);
// console.log(typeof score); //string prompt automatically converts any value to string to perform any mathematical operation we will have to conert them to int
if (upperLimit === '') {
    upperLimit = 20;
}

let remainingAttempts = 10;
let highscore = 0 ;
let randomNumber = Math.trunc(Math.random() * upperLimit) + 1;
//console.log(randomNumber);
const limitText = document.querySelector('.between');
const userEnteredNumber = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const body = document.querySelector('body'); //element ka naam likhna ka liya . ya # ka zarurat nhi hai 
const hiddenNumber = document.querySelector('.number');
const remainingAttemptsElement = document.querySelector('.score');
const tryagainbtn = document.querySelector('.again');
const highscoreLabel = document.querySelector('.highscore');

limitText.textContent = `<Between 1 and ${upperLimit}>`;

//event listener 

checkButton.addEventListener('click', function () {

    let value = userEnteredNumber.value;
    value = Number(value);
    //alert('Number is '+ value );
    if (value === randomNumber && remainingAttempts > 1) {
        message.textContent = 'You Won !';
        body.style.background = '#60b347';
        if (remainingAttempts > highscore){
            highscore = remainingAttempts;
            highscoreLabel.textContent = highscore ;
        }
    }
    else if (value > randomNumber && remainingAttempts > 1) {
        message.textContent = 'Entered value is greater ';
        remainingAttempts = remainingAttempts - 1;
        remainingAttemptsElement.textContent = remainingAttempts;
    }
    else if (value < randomNumber && remainingAttempts > 1) {
        message.textContent = 'entered value is lesser';
        remainingAttempts = remainingAttempts - 1;
        remainingAttemptsElement.textContent = remainingAttempts;
    } else {
        message.textContent = 'You lost the Game ';
        body.style.background = 'red';
        remainingAttemptsElement.textContent = 0;
    }
});

tryagainbtn.addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random() * upperLimit) + 1;
    body.style.background = '#263238';
    hiddenNumber.textContent = '?';
    message.textContent = 'Start guessing ...';
    remainingAttempts = 10;
    remainingAttemptsElement.textContent = remainingAttempts;
});

hiddenNumber.addEventListener('click', function () {
    hiddenNumber.textContent = randomNumber;
});


