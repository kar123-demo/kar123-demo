let bs = 0;
let rs = 0;
let flippedCards = [];
let lockBoard = false;
let initialColor = "";
const leftSemiCircle = document.querySelector(".semi-circle");
const rightSemiCircle = document.querySelector(".semi-circle1");

function setRandomBackgroundColor() {
  const colors = ['rgb(255, 99, 71)', 'rgb(123, 168, 212)'];
  initialColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = initialColor;
  highlightScoreBox();
  leftSemiCircle.style.transform = initialColor === "rgb(255, 99, 71)" ? "translateX(0%)" : "translateX(-100%)";
  rightSemiCircle.style.transform = initialColor === "rgb(255, 99, 71)" ? "translateX(100%)" : "translateX(0%)";
}

function highlightScoreBox() {
  const redForm = document.getElementById("scor");
  const blueForm = document.getElementById("move");

  redForm.style.boxShadow = "";
  blueForm.style.boxShadow = "";

  if (initialColor === 'rgb(255, 99, 71)') {
    redForm.style.boxShadow = "0px 0px 10px 5px rgba(17, 26, 18, 0.7)";
  } else {
    blueForm.style.boxShadow = "0px 0px 10px 5px rgba(15, 22, 18, 0.7)";
  }
}

function flipCard(card) {
  if (lockBoard || flippedCards.includes(card) || card.classList.contains('matched')) return;

  card.classList.add('flip');
  flippedCards.push(card);
  card.style.boxShadow = "0px 5px 0px 0px yellow";
  highlightScoreBox();

  if (flippedCards.length === 2) {
    lockBoard = true;

    if (flippedCards[0].querySelector('.card-back img').src === flippedCards[1].querySelector('.card-back img').src) {
      flippedCards[0].classList.add('matched');
      flippedCards[1].classList.add('matched');
      flippedCards[0].style.boxShadow = "0px 0px 5px 0px green";
      flippedCards[1].style.boxShadow = "0px 0px 5px 0px green";
     
      if (document.body.style.backgroundColor === 'rgb(255, 99, 71)') {
        rs += 10;
        document.getElementById("m1").textContent = "RedScore→" + rs;
      } else {
        bs += 10;
        document.getElementById("s1").textContent = "BlueScore→" + bs;
      }

      flippedCards = [];
      lockBoard = false;

      if (checkAllCardsMatched()) {
        setTimeout(showPopup, 500);
      }
    } else {
      setTimeout(() => {
        flippedCards[0].classList.remove('flip');
        flippedCards[1].classList.remove('flip');
        flippedCards[0].style.boxShadow = "";
        flippedCards[1].style.boxShadow = "";
        flippedCards = [];
        lockBoard = false;

        if (initialColor === 'rgb(255, 99, 71)') {
          rs -= 2.5;
          document.getElementById("m1").textContent = "RedScore→" + rs;
        } else {
          bs -= 2.5;
          document.getElementById("s1").textContent = "BlueScore→" + bs;
        }

        highlightScoreBox();
        toggleBackgroundColor();
      }, 1000);
    }
  }
}

function checkAllCardsMatched() {
  const cards = document.querySelectorAll('.card2');
  return Array.from(cards).every(card => card.classList.contains('matched'));
}

function showPopup() {
  let message = "";
  if (rs > bs) {
    message = `Red wins with ${rs} points!`;
  } else if (bs > rs) {
    message = `Blue wins with ${bs} points!`;
  } else {
    message = `It's a tie with ${rs} points each!`;
  }

  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = ` 
    <p>${message}</p>
    <p>Red Score: ${rs}</p>
    <p>Blue Score: ${bs}</p>
    <button class="replay-btn">Replay</button>
  `;

  document.body.appendChild(popup);

  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "rgb(240, 240, 240)";
  popup.style.padding = "40px";
  popup.style.borderRadius = "15px";
  popup.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.5)";
  popup.style.fontSize = "24px";
  popup.style.textAlign = "center";
  popup.style.zIndex = "1000";
  popup.style.width = "400px";
  popup.style.height = "auto";
  popup.style.maxWidth = "90%";

  const replayButton = popup.querySelector('.replay-btn');
  replayButton.addEventListener('click', restartGame);
}

function restartGame() {
  const cards = document.querySelectorAll('.card2');
  cards.forEach(card => card.classList.remove('flip', 'matched'));

  rs = 0;
  bs = 0;
  document.getElementById("m1").textContent = "RedScore→" + rs;
  document.getElementById("s1").textContent = "BlueScore→" + bs;

  setRandomBackgroundColor();
  shuffleCards();

  const popup = document.querySelector('.popup');
  if (popup) {
    document.body.removeChild(popup);
  }

  flippedCards = [];
  lockBoard = false;
}

function shuffleCards() {
  const cards = document.querySelectorAll('.card2');
  const cardArray = Array.from(cards);
  for (let i = cardArray.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }
  for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].style.boxShadow = "";
  }
  const main = document.querySelector('.main');
  cardArray.forEach(card => main.appendChild(card));
}

function toggleBackgroundColor() {
  if (initialColor === 'rgb(255, 99, 71)') {
    document.body.style.backgroundColor = 'rgb(123, 168, 212)';
    initialColor = 'rgb(123, 168, 212)';
    leftSemiCircle.style.transform = "translateX(-100%)";
    rightSemiCircle.style.transform = "translateX(0%)";
  } else {
    document.body.style.backgroundColor = 'rgb(255, 99, 71)';
    initialColor = 'rgb(255, 99, 71)';
    leftSemiCircle.style.transform = "translateX(0%)";
    rightSemiCircle.style.transform = "translateX(100%)";
  }

  highlightScoreBox();
}

window.onload = function () {
  document.body.style.zoom = window.innerWidth < 1921 ? "76%" : "100%";
  shuffleCards();
  setRandomBackgroundColor();
  document.querySelectorAll('.card2').forEach(card => {
    card.addEventListener('click', function () {
      flipCard(card);
    });
  });
};
