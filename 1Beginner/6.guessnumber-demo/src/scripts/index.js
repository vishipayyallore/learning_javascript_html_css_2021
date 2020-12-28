'use strict';

// Variables.
const _originalNumber = 'txtOriginalNumber';
const _guessNumber = 'txtGuessNumber';
const _results = 'lblResults';
const _attempts = 'lblAttempts';

const maxAttempts = 5;
let attempts = maxAttempts;

// Guess Number Verification
function verifyNumber(){

    const txtGuessNumber = getElementById(_guessNumber);
    const txtOriginalNumber = getElementById(_originalNumber);
    const lblResults = getElementById(_results);

    console.log(`${txtGuessNumber.value} === ${txtOriginalNumber.value} = ${txtGuessNumber.value === txtOriginalNumber.value}`);

    if(attempts <= 0 || (!txtGuessNumber.value)){
        alert('Please use "Generate Number" to (re)start the Game.');
        return;
    } 

    if(+txtGuessNumber.value === +txtOriginalNumber.value){
        lblResults.innerHTML = `<B style="color:green">You have guessed it right ${txtGuessNumber.value} </B>`;
        attempts = 1;
    } else {

        if(+txtGuessNumber.value < +txtOriginalNumber.value){
            lblResults.innerText = `You missed it ${txtGuessNumber.value} is less than the number to be gussed.`;
        } else {
            lblResults.innerText = `You missed it ${txtGuessNumber.value} is more than the number to be gussed.`;
        }
    }

    attempts--;
    if(attempts === 0){
        lblResults.innerHTML += ` <span>Game Over !!!<span>`;
    } 
 
    lblAttempts.innerText = `You have ${attempts} attempts.`;

}

function generateNumber(){

    const txtOriginalNumber = getElementById(_originalNumber);
    txtOriginalNumber.value = Math.floor(Math.random() * 100) + 1;

    const lblAttempts = getElementById(_attempts);
    attempts = maxAttempts;
    lblAttempts.innerText = `You have ${attempts} attempts.`;

    const lblResults = getElementById(_results);
    lblResults.innerText = '';
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

