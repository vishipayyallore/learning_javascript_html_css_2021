"use strict";

/*
    Multi line Comment
*/
function getValue() {

    const guessFieldText = getElementById('guessField');
    let originalValueText = getElementById('originalValue');
    let userAnswerText = getElementById('userAnswer');

    originalValueText.innerText = `Hint: ${guessFieldText.value}`;
    userAnswerText.innerText = `Answer: ${guessFieldText.value}`;
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

function logMethodStarting(methodName) {

    console.log(`***** Starting ${methodName} method *****`);
}

function logMethodEnding(methodName) {

    console.log(`===== Ending ${methodName} method =====`);
}
