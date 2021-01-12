'use strict';


function showNumericConversions(){

    const paraForNumerics = getElementById('paraForNumerics');

    paraForNumerics.innerText += `Boolean(0): ${Boolean(0)}\n`;
    paraForNumerics.innerText += `Boolean(-0): ${Boolean(-0)}\n`;
    paraForNumerics.innerText += `Boolean(0.1): ${Boolean(0.1)}\n`;
    paraForNumerics.innerText += `Boolean(-125): ${Boolean(-125)}\n`;

}

function showStringConversions(){

    const paraForStrings = getElementById('paraForStrings');

    paraForStrings.innerText += `Boolean(''): ${Boolean('')} \n`;
    paraForStrings.innerText += `Boolean(' '): ${Boolean(' ')} \n`;
    paraForStrings.innerText += `Boolean('false'): ${Boolean('false')} \n`;
    paraForStrings.innerText += `Boolean('true'): ${Boolean('true')} \n`;
    paraForStrings.innerText += `Boolean('Ankur'): ${Boolean('Ankur')} \n`;
}

function showOtherConversions(){

    const paraForOthers = getElementById('paraForOthers');
    
    paraForOthers.innerText += `Boolean(null): ${Boolean(null)} \n`;
    paraForOthers.innerText += `Boolean(undefined): ${Boolean(undefined)} \n`;
    paraForOthers.innerText += `Boolean(NaN): ${Boolean(NaN)} \n`;
    paraForOthers.innerText += `Boolean('FALSE'): ${Boolean('FALSE')} \n`;
    paraForOthers.innerText += `Boolean('flase'): ${Boolean('flase')} \n`;
    paraForOthers.innerText += `Boolean('False'): ${Boolean('False')} \n`;
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}
