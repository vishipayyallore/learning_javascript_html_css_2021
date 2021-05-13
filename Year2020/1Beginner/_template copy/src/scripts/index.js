'use strict';


const person = {
    name: 'Manish',
    age: 18
};


/*
const person = new Object();
person.name = 'Manish Agarwal';
person.age = 21;
*/

function showPersonDetails(){
    const personName = getElementById('personName');
    const personAge = getElementById('personAge');
    
    personName.innerText = person.name;
    personAge.innerText = person.age;

}


function getElementById(elementId) {

    return document.getElementById(elementId);
}

