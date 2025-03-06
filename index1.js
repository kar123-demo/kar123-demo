let v = 150;
let moves = 0;

let sc = 0;

let flippedCards = [];
let lockBoard = false;


function flipCard(card) {
  if (lockBoard || flippedCards.includes(card) || card.classList.contains('matched')) return;

  card.classList.add('flip');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    lockBoard = true;

    if (flippedCards[0].querySelector('.card-back img').src === flippedCards[1].querySelector('.card-back img').src) {
      sc += 10; 
      flippedCards[0].classList.add('matched');
      flippedCards[1].classList.add('matched');
      flippedCards[0].style.boxShadow = "0 0 10px 5px green";
      flippedCards[1].style.boxShadow = "0 0 10px 5px green"; 

      document.getElementById("s1").textContent = "Score→" + sc;

      flippedCards = [];
      lockBoard = false;
   
    
     
    } else {
      setTimeout(() => {
        flippedCards[0].classList.remove('flip');
        flippedCards[1].classList.remove('flip');
        flippedCards = [];
   
      
        lockBoard = false;
      }, 1000);
    }
  }

  moves++;
  if (moves % 2 === 0) {
    c++;
    document.getElementById("m1").textContent = `Moves: ${c}`;
  }
}

function shuffleCards() {
  const cards = document.querySelectorAll('.card2');
  const cardArray = Array.from(cards);

  for (let i = cardArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }

  const main = document.querySelector('.main');
  cardArray.forEach(card => {
    main.appendChild(card);
  });
}

window.onload = shuffleCards;

setInterval(() => {
  if (v > 0) {
    v--;
    document.getElementById("t1").textContent = "Timer→ " + v;
  } else {
    stopfn();
  }
}, 1500);

function stopfn() {
  window.alert("Game over");
  window.onload;
}

const cards = document.querySelectorAll('.card2');
cards.forEach(card => {
  card.addEventListener('click', function () {
    flipCard(card);
  });
});
