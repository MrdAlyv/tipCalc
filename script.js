function updateTipPercentage() {
    var tipPercentage = document.getElementById('tipPercentage').value;
    document.getElementById('tipPercentageValue').innerHTML = tipPercentage + '%';
}
function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Duzgun daxil ed');
        return;
    }
    var tipAmount = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + tipAmount;
    document.getElementById('totalAmount').innerHTML = 'Tip Amount: $' + tipAmount.toFixed(2) + '<br>Total Bill with Tip: $' + totalAmount.toFixed(2);
}
