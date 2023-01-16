let messageEL = document.getElementById('message-el');
let sumEL = document.getElementById('sum-el');
let cardsEL = document.getElementById('cards-el');

let firstCard = Math.floor(Math.random() * 12)
let secondCard = Math.floor(Math.random() * 12)

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""

function startGame() {
    sumEL.textContent = "Sum: " + sum;
    cardsEL.textContent = "Cards: " + firstCard + " " + secondCard;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    } 

    messageEL.textContent = message;
}

function newCard() {
    let newCard = Math.floor(Math.random() * 12)
    sum += newCard;
    
    startGame();
}

/* console.log(message)
console.log(firstCard, secondCard)
console.log(hasBlackJack)
console.log(isAlive) */