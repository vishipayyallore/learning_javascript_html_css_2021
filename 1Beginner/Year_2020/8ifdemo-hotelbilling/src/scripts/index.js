'use strict';

// Global Variables.
let globalUserName = 'Global User';
const USER_NAME = 'Global User';

const _lblGlobalUser = 'lblGlobalUser';
const _lblFunctionUser = 'lblFunctionUser';
const _lblIfUser = 'lblIfUser';

function getCalculateBillAmount(){

    let billAmount = +getElementById('txtBillAmount').value;
    const taxRate = +getElementById('txtTaxRate').value;

    console.log(`${typeof(billAmount)} ${typeof(taxRate)}`);

    if(billAmount > 50){
        billAmount += (billAmount * (taxRate/100))
    }

    let lblTotalBillAmount = getElementById('lblTotalBillAmount');
    lblTotalBillAmount.innerText = `Total Bill: $${billAmount.toFixed(2)}`;

}

function getUserNames(){
    
    let localUserName = 'Function Scoped Local User';

    const lblGlobalUser = getElementById(_lblGlobalUser);
    lblGlobalUser.innerText = `Global User Name: ${globalUserName}`;
    console.log(`Global Variable: ${globalUserName}`);

    const lblFunctionUser = getElementById(_lblFunctionUser);
    lblFunctionUser.innerHTML = `Local User Name: ${localUserName}`;
    console.log(`Local User: ${localUserName}`)

    if( globalUserName === USER_NAME){

        let localUserName = 'If Scoped User Name';
        const lblIfUser = getElementById(_lblIfUser);
        lblIfUser.innerText = `If Scoped User Name: ${localUserName}`;

        console.log(`Global Variable: ${globalUserName}`);
        console.log(`Local User: ${localUserName}`)
    }

    console.log(`Global Variable: ${globalUserName}`);
    console.log(`Local User: ${localUserName}`)

}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

