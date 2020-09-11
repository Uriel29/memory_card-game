const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let blockBoard = false;

function fli(card){
      card.classList.add('flip');
     if (card === firstCard) return;

}
function flipCard() {
      if (blockBoard) return;
     
    fli(this)
     
     if(!hasFlippedCard) {
          hasFlippedCard = true;
          firstCard = this;
          return;
     }

     secondCard = this;
     hasFlippedCard = false;
     checkForMath();
}


function checkForMath() {
     if (firstCard.dataset.card === secondCard.dataset.card) {
          disabledCards();
          return;
     }

     unflipCarsd();
}

function disabledCards(){
     firstCard.removeEventListener('click',flipCard)
     secondCard.removeEventListener('click',flipCard)
     resetBoard();
}

function unflipCarsd() {
     blockBoard = true;
     setTimeout(()=>{
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');

         resetBoard();
     },1500)
}

function resetBoard() {
     [hasFlippedCard,blockBoard] = [false,false];
     [firstCard,secondCard] =  [null,null];
}

(function shuffle() {
     cards.forEach((card) => {
          let randomPosition = Math.floor(Math.random() * 12);
          card.style.order = randomPosition;
     })
})()

cards.forEach((card) => {
     card.addEventListener('click', flipCard)
});