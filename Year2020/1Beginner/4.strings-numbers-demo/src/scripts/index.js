'use strict';

// Global Variables.
let firstName = "Shiva";
let lastName = 'Sai';
let fullName = `${firstName} ${lastName}`;

const TAX_RATE = 1.26;
let billAmount = 123.48;
let billAmountString = String(billAmount);

const stringData = getElementById('string-data');

writeIntoPara(fullName);
writeIntoPara(`\nTax Amount: ${(billAmount * TAX_RATE).toFixed(2)}`);

writeIntoPara(`\n (${firstName} ${billAmount})`);
writeIntoPara(`\n (${billAmountString + billAmount})`);
writeIntoPara(`\n (${+billAmountString + billAmount})`);

function writeIntoPara(content) {
    stringData.innerText += content;
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

let stringSalary = "12345.67890";
console.log(`${stringSalary}`);
console.log(typeof stringSalary);
console.log(`${(+stringSalary).toFixed(2)}`);
console.log(typeof +stringSalary);

console.log(`${+"A125.68"}`);
