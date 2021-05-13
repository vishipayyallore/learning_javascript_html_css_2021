'use strict';

function getCalculateBillAmount(){

    let billAmount = +getElementById('txtBillAmount').value;
    const taxRate = +getElementById('txtTaxRate').value;

    console.log(`${typeof(billAmount)} ${typeof(taxRate)}`);

    if(billAmount > 50){
        billAmount += (billAmount * (taxRate/100))
    }

    console.log(`billAmount: ${billAmount}`);
    console.log('Direct Numeric: ' + billAmount);
    console.log(`String(billAmount): ${String(billAmount)}`);
    console.log(`true: ${true}`);

    let lblTotalBillAmount = getElementById('lblTotalBillAmount');
    lblTotalBillAmount.innerText = `Total Bill: $${billAmount.toFixed(2)}`;

    console.log(`Boolean(0): ${Boolean(0)}`);
    console.log(`Boolean(0.1): ${Boolean(0.1)}`);
    console.log(`Boolean(-125): ${Boolean(-125)}`);

    console.log('@@@@@@@@@@@@@@@@@@@@@');
    console.log(`Boolean(''): ${Boolean('')}`);
    console.log(`Boolean(' '): ${Boolean(' ')}`);
    console.log(`Boolean(null): ${Boolean(null)}`);
    console.log(`Boolean(undefined): ${Boolean(undefined)}`);
    console.log(`Boolean('FALSE'): ${Boolean('FALSE')}`);
    console.log(`Boolean('flase'): ${Boolean('flase')}`);
    console.log(`Boolean('False'): ${Boolean('False')}`);
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

