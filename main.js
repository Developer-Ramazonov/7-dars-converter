var form = document.getElementById('convert')
var amountOfMoney = document.querySelector('#amount')
var typeOfMoney = document.getElementById('type')
var lastResult = document.getElementById('result')


form.addEventListener('submit', function(event){
    event.preventDefault();
    lastResult.textContent = amountOfMoney.value / typeOfMoney.value;
})




// var type;
// if(typeOfMoney.value==='10800'){
//     type='USD'
// }else if(typeOfMoney.value==='11900'){
//     type='EURO'
// }
// else type='RUB'




// var form = document.querySelector('#credit')
// var amount = document.getElementById('credit_amount')
// var percent = document.getElementById('percent')

// var result = document.getElementById('result')

// form.addEventListener('submit', function(event){
//     event.preventDefault()
//     result.textContent =  Math.round(amount.value * (percent.value/100 + 1))
// })









// amount.addEventListener('keyup', function(){
//     result.textContent =  Math.round(amount.value * (percent.value/100 + 1))
// })
// percent.addEventListener('change', function(event){
//     result.textContent =  Math.round(amount.value * (percent.value/100 + 1))
// // })

// const a = {};
// var b = {}
// a=b
// console.log(a)