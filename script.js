let money = document.querySelector('.clickable-money')
let counter = 0
let amount = document.querySelector('.amount')
money.addEventListener('click',function () {
    counter++
    amount.textContent =  `Money: ${counter}`
})