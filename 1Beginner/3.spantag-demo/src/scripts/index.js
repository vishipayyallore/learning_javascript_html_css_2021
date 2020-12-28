'use strict';

// Global Variables.
let _name = "Sourabh";
let friend = 'Apaar';
let qaTeam1 = 'Anusha Battu';
let closeFriends = `Ankur
                Nikhil`;
let QaTeam1 = 'Anusha Battu';
let $special = 'Apple';

let fullTeam = `
                ${_name}
                ${friend}
                ${qaTeam1}
                ${closeFriends}
                `;

console.log(fullTeam);
console.log(_name + ' ' + qaTeam1 );
console.log(friend, _name, qaTeam1);
console.log(closeFriends);
console.log(qaTeam1, QaTeam1);
console.log($special);

function getElementById(elementId) {

    return document.getElementById(elementId);
}

