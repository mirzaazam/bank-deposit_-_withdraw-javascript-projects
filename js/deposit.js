//for personal deposit and withdraw
document.getElementById('submit-btn').addEventListener('click', function(){

    //input field
    const depositInputElement = document.getElementById('deposit-input');
    const depositInputElementString = document.getElementById('deposit-input').value;
    const depositInputValue = parseFloat(depositInputElementString);

    // deposit box
    const depositTextElement = document.getElementById('depost-value');
    const depositTextStringValue = document.getElementById('depost-value').innerText;
    const depositTextValue = parseFloat(depositTextStringValue);
    const totalDepositValue = depositInputValue + depositTextValue;

    // set the value in deposit house
    depositTextElement.innerText = totalDepositValue;
    depositInputElement.value = '';

    //balance set value
    const balanceTextElement = document.getElementById('balance-value');
    const balanceTextElementString = document.getElementById('balance-value').innerText;
    const balanceValue = parseFloat(balanceTextElementString);
    const totalBalance = depositInputValue + balanceValue;
    balanceTextElement.innerText = totalBalance;
}); 