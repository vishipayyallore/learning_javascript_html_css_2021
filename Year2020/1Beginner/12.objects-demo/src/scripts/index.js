'use strict';

const person = {
    name: 'Manish',
    age: 18,
    address: {
        street: 'Street 1',
        city: 'Hyd',
        state: 'Telangana'
    },
    certificates: {
        az104: true,
        az900: true,
        mpp: false
    }
}

function showPersonDetails(){
    const personName = getElementById('personName');
    const personAge = getElementById('personAge');
    const personAddress = getElementById('personAddress');
    const personCertificates = getElementById('personCertificates');

    personName.innerText = person.name;
    personAge.innerText = person.age;
    // personAddress.innerText = JSON.stringify(person.address);
    for(let addressPiece in person.address){
        personAddress.innerText += ` ${addressPiece}: ${person.address[addressPiece]} | `;
    }
    personCertificates.innerText = JSON.stringify(person.certificates);

}


function getElementById(elementId) {

    return document.getElementById(elementId);
}

