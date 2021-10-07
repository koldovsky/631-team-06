
async function convertCurrency(){
    const convertTo=document.querySelector('.currency').value;
  const currencies = await getJson('https://api.exchangerate-api.com/v4/latest/USD');
  const rate= currencies.rates[converTo];
document.querySelector('.convert')
 .addEventListener('click',convertCurrency)}
 setInterval(function () {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
}, 1000);