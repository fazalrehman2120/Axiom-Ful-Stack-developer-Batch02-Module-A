// Get DOM Elements
const baseCurrency = document.getElementById('base-currency');
const targetCurrency = document.getElementById('target-currency');
const baseAmount = document.getElementById('base-amount');
const targetAmount = document.getElementById('target-amount');
const exchangeRate = document.getElementById('xrate');
const flipBtn = document.getElementById('flip');

// Function to fetch exchange rates from API and update DOM
function calculate() {
    // Get the currency codes for base and target currencies
    const baseCode=baseCurrency.value;
    const targetCode=targetCurrency.value;

   // Execute Fetch API
   fetch(`https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/latest/${baseCode}`)
   .then( res => res.json() )
   .then( data => {
       console.log(data); 
       //get the exchange rate from base currency to targe currency
       const rate=data.conversion_rates[targetCode];
       // update DOM with exchange rate
       exchangeRate.innerText = `1 ${baseCode} = ${rate} ${targetCode}`;
       //calculate amount of target currency base on exchange rate
       targetAmount.value=(baseAmount.value*rate).toFixed(2);
    })

};
//Event listners
// 1.listen for change to base currency
baseCurrency.addEventListener('change',calculate);
// 2.listen for input base amount in input field
baseAmount.addEventListener('input',calculate);
// 3. Listen for change to target currency select box
targetCurrency.addEventListener('change',calculate);
// 4. Listen for change to target amount input field
targetAmount.addEventListener('input',calculate);
// 5. Listen for the click on flip button
flipBtn.addEventListener('click', () => {
    //save the value of base currency in the temp variable 
    const tempCurerncy=baseCurrency.value;
    // Reassign base currency using target currency
    baseCurrency.value=targetCurrency.value;
    // Reassign target currency using the original base currency
    targetCurrency.value=tempCurerncy;
     // Recalculate exchange rate and update DOM 
    calculate();

})




//initial calculation 
calculate();