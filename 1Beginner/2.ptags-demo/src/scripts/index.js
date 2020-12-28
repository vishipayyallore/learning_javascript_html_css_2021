'use strict';

// Global Variables.
const para1Content = `
                    This is the Para 1 content. 
                    This is second line.
                    `;

const para2Content = `
                    This is the Para 2 content. 
                    This is second line.
                    `;

function showParaDemo(){
    const para1 = getElementById('para1');
    const para2 = getElementById('para2');

    para1.innerText = para1Content;
    para2.innerText = para2Content;
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

