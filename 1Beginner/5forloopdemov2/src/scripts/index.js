'use strict';

const _txtName = 'txtName';
const txtName = getElementById(_txtName);

txtName.value = userName;   // undefined (var hoisting)

var userName = "Shiva"; 
// txtName.value = userName;   // Shiva

// txtName.value = userName1;  // Error
let userName1 = "Shiva New";
txtName.value = userName1;     // Shiva New

function getElementById(elementId) {

    return document.getElementById(elementId);
}

