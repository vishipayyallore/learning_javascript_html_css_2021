'use strict';

// Input/Output Method 1
function sayHello(){
    const txtName = document.getElementById('txtName');

    console.log(`Hello ${txtName.value}`);
}

// Input/Output Method 2
function showInputOutput() {

    const userName = prompt('Enter Your Name: ');

    alert(`Hello ${userName}`);
}
