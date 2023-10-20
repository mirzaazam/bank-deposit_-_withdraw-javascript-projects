//for personal deposit
document.getElementById('submit-btn').addEventListener('click', function(){

    //input field
    const depositInputElement = document.getElementById('deposit-input');
    const depositInputElementString = document.getElementById('deposit-input').value;
    const depositInputValue = parseFloat(depositInputElementString);
    depositInputElement.value = '';

    //logic for Nagetive value problem.
    if ( depositInputValue < 0 ){
        alert('Plase enter positive ammount!')
        return;
    }

    //logic for NAN problem
    if(isNaN(depositInputValue)){
        alert('please write a current ammount!');
        return;
    }

    // deposit box
    const depositTextElement = document.getElementById('depost-value');
    const depositTextStringValue = document.getElementById('depost-value').innerText;
    const depositTextValue = parseFloat(depositTextStringValue);
    const totalDepositValue = depositInputValue + depositTextValue;

    // set the value in deposit house
    depositTextElement.innerText = totalDepositValue;

    //balance set value
    const balanceTextElement = document.getElementById('balance-value');
    const balanceTextElementString = document.getElementById('balance-value').innerText;
    const balanceValue = parseFloat(balanceTextElementString);
    const totalBalance = depositInputValue + balanceValue;
    balanceTextElement.innerText = totalBalance;
}); 

//for personal withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    //withdraw input field
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputElementString = document.getElementById('withdraw-input').value;
    const withdrawInputValue = parseFloat(withdrawInputElementString);
    withdrawInputElement.value = '';
    
    //logic for NAN problem
    if (isNaN(withdrawInputValue)){
        alert('Plase write the ammount!');
        return;
    }
    if ( withdrawInputValue < 0 ){
        alert('Plase enter your right ammount!')
        return;
    }

    //get balance elements
    const balanceTextElement = document.getElementById('balance-value');
    const balanceTextElementString = document.getElementById('balance-value').innerText;
    const balanceValue = parseFloat(balanceTextElementString);

    //logic for banalce er cheye Taka beshi uthate parbe nah ttai deya
    if( withdrawInputValue > balanceValue ){
        alert("You don't have enough money!");
        return;
    }

    //balance subtruct
    const withdrawBalance = balanceValue - withdrawInputValue;
    balanceTextElement.innerText = withdrawBalance;

    //withdraw box 
    const withTextElement = document.getElementById('withdraw-value');
    const withTextElementString = document.getElementById('withdraw-value').innerText;
    const withdrawTextValue = parseFloat(withTextElementString);

    //withdraw box calculate
    const withdrawCalculate = withdrawInputValue + withdrawTextValue;
    withTextElement.innerText = withdrawCalculate;

});