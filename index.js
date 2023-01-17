let messageEL = document.getElementById('message-el');
let sumEL = document.getElementById('sum-el');
let cardsEL = document.getElementById('cards-el');

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
    return randomNumber
    }
}

function startGame() {
    renderGame();
}

function renderGame() {
    sumEL.textContent = "Sum: " + sum;
    cardsEL.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " "
    }

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
    cards.push(newCard)
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i])
    }
    renderGame()
}

/* console.log(message)
console.log(firstCard, secondCard)
console.log(hasBlackJack)
console.log(isAlive) */