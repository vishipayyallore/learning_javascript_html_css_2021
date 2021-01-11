'use strict';

const TAX_RATE = 1.8;

// 1. Accepts Nothing and returns Nothing
function sayHello() {
    const userName = getElementById('txtUserName').value;

    console.log(`Hello: ${userName}`);
}

// 2. Accepts parameters and returns value
function getTotalBill(billAmount) {

    const totalBill = billAmount + (billAmount * (TAX_RATE / 100));
    console.log(`Total Bill: ${totalBill}`);

    return totalBill;
}

function calcualteTotalBill() {
    const billAmount = +getElementById('txtBillAmount').value;
    const lblTotalBillAmount = getElementById('lblTotalBillAmount');

    lblTotalBillAmount.innerText = `Total Bill: ${getTotalBill(billAmount)}`;
}

// 3. Accepts Nothing and returns value
function getTodayValue() {
    return new Date().toUTCString();
}

function getToday() {

    getElementById('lblToday').innerText = getTodayValue();
}

// 4. Accepts Parameter and returns Nothing
function greetUser(userName) {

    console.log(`Hello (V2): ${userName}`);
}

function sayHelloV2() {
    greetUser(getElementById('txtUserNamev2').value);
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

