let money = document.querySelector('.clickable-money')
let counter = 0
let tobuy = document.querySelector('.tobuy')
let images = document.querySelectorAll('.coins-items__element')
let amount = document.querySelector('.amount')

money.addEventListener('click',function () {
    if(counter <=99){
        counter++
        money.src = images[0].src
        money.style.width = '250px'
        money.style.height = '250px'
    }
    else if(counter >= 100 && counter <= 499){
        counter = counter + 5
        money.src = images[1].src
    }
    else if(counter >= 500 && counter <= 1449){
        counter = counter + 10
        money.src = images[2].src
    }
    else if(counter >= 1450 && counter <= 9999){
        counter = counter + 25
        money.src = images[3].src
    }
    else if(counter >= 10000 && counter <= 24999){
        counter = counter + 50
        money.src = images[4].src
        money.style.width = '24%'
        money.style.height = '150px'
    }
    else if(counter >= 25000 && counter <= 79999){
        counter = counter + 200
        money.src = images[5].src
    }
    else if(counter >= 80000 && counter <= 199999){
        counter = counter + 500
        money.src = images[6].src
    }
    else if(counter >= 200000 && counter <= 999999){
        counter = counter + 1000
        tobuy.textContent = `here is a hint!, ???: 1,000,000`
        money.src = images[7].src
    }
    else if(counter >= 1000000){
        counter = counter - counter - 1
        let audio = new Audio('img/what-are-you_-an-idiot-sandwich-made-with-Voicemod.mp3');
        audio.play();
        money.src = 'img/ram.jpeg'
    }
    amount.textContent = `Money: ${counter}`
})
