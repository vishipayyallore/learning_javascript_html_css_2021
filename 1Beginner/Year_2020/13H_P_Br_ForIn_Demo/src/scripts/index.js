'use strict';

// Global Variables.

function getParaProperties(){
    const firstPara = getElementById('firstPara');

    for(const property in firstPara){
        forInPara.innerText += ` ${property} === ${firstPara[property]} | `;   
    }
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

