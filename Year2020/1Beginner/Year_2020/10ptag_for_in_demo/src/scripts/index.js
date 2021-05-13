'use strict';

// Global Variables.
function showForInLoop() {

    const pTag = getElementById('forth-p-tag');
    for (const property in pTag) {

        console.log(`Property Name: ${property} | Value: ${pTag[property]}`);
        if (pTag.hasOwnProperty(property)) {
            const element = pTag[property];
            console.log(`${element}`);
        }
    }
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

