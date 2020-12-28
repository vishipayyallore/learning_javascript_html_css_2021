const NUMBER_OF_DECIMALS = 2;

const currency = getElementById('currency');
const lblErrorMessage = getElementById('lblErrorMessage');

currency.addEventListener("change", function () {
    showErrorMessage(this, lblErrorMessage);
});

function getCalculateBillAmount() {
    let billAmount = +getElementById('txtBillAmount').value;
    const taxRate = +getElementById('txtTaxRate').value;

    showErrorMessage(currency, lblErrorMessage);

    if (currency.selectedIndex <= 0) {
        return;
    }

    console.log(`${typeof (billAmount)} ${typeof (taxRate)}`);

    if (billAmount > 50) {
        billAmount += (billAmount * (taxRate / 100))
    }

    let lblTotalBillAmount = getElementById('lblTotalBillAmount');
    lblTotalBillAmount.innerText = `Total Bill: ${formatToMoney(billAmount, currency.value)}`;

}

function formatToMoney(amount, symbol,) {
    return `${symbol}${amount.toFixed(NUMBER_OF_DECIMALS)}`;
}

function showErrorMessage(selectControl, lableControl) {
    lableControl.style.visibility = (selectControl.selectedIndex <= 0) ? 'visible' : 'hidden';
}

function getElementById(elementId) {
    return document.getElementById(elementId);
}
