var images = [
    "https://images.unsplash.com/photo-1693495430456-25c0a37ec5dc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1564053489984-317bbd824340?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1481819613568-3701cbc70156?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1720878792027-f112f4ceff54?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];


var firstCard = null
var secondCard = null
var canFlip = true
var matches = 0
var moves = 0
var seconds = 0
var timerRunning = false
var timerInterval;


function startGame() {
    var gameBoard = document.getElementById("gameBoard")
    gameBoard.innerHTML = ""

    var cardImages = images.concat(images)

    cardImages.sort(function () {
        return Math.random() - 0.5
    })

    for (var i = 0; i < cardImages.length; i++) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-front"><i class="fas fa-star"></i></div>
            <div class="card-back"><img src="${cardImages[i]}" alt=""></div>
        `
    card.onClick = flipCard;
    card.dataset.image = cardImages[i]
    gameBoard.appendChild(card)
    }

    firstCard = null;
    secondCard = null;
    canFlip = true;
    matches = 0;
    moves = 0;
    seconds = 0
    timerRunning = false


    updateStats()
    clearInterval(timerInterval)    
}


function flipCard() {
    if (!canFlip) return

    if(this.classList.contains("flipped")) return
    if(this.classList.contains("matched")) return

    if (!timerRunning) {
        startTimer()
    }
     
    this.classList.add("flipped")

    if (firstCard === null) {
        firstCard = this
    } else {
        secondCard = this;
        canFlip = false;
        moves++
        updateStats()
        checkForMatch()
    }
}

function checkForMatch() {
    var match = firstCard.dataset.image == secondCard.dataset.image;

    if (match) {
        setTimeout(() => {
            firstCard.classList.add("matched")
            secondCard.classList.add("matched")
             matches++
             updateStats()
             resetCards()

             if(matches = 8) {
                endGame()
             }
        }, 500);
    }else {
        setTimeout(() => {
            firstCard.classList.remove("flipped")
            secondCard.classList.remove("flipped")
            resetCards()
        }, 1000);
    }

}

 
function resetCards() {
    firstCard = null
    secondCard = null
    canFlip = true
}


function startTimer() {

}



































    const cardHTML = <div class="card-front"><i class="fas fa-star"></i></div>
                <div class="card-back"><img src="" alt=""></div>``