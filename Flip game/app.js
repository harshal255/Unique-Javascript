console.log("~Dev aman");
const reset = document.querySelector(".reset-btn");
document.addEventListener("DOMContentLoaded", () => {
  const cardsArray = [
    {
      name: "fries",
      img: "image/fries.png",
    },
    {
      name: "cheeseburger",
      img: "image/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "image/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "image/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "image/milkshake.png",
    },
    {
      name: "pizza",
      img: "image/pizza.png",
    },
    {
      name: "fries",
      img: "image/fries.png",
    },
    {
      name: "cheeseburger",
      img: "image/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "image/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "image/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "image/milkshake.png",
    },
    {
      name: "pizza",
      img: "image/pizza.png",
    },
  ];
  cardsArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  const score = document.querySelector("#score");
  const displayResult = document.querySelector(".resultDisplay");

  const createBoard = () => {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "image/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  };

  function flipCard() {
    let cardID = this.getAttribute("data-id");
    cardsChosen.push(cardsArray[cardID].name);
    cardsChosenId.push(cardID);
    this.setAttribute("src", cardsArray[cardID].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll("img");

    const optionOne = cardsChosenId[0];
    const optionTwo = cardsChosenId[1];
    if (optionOne == optionTwo) {
      display("You clicked same cards", "info");
      cards[optionOne].setAttribute("src", "image/blank.png");
      cards[optionTwo].setAttribute("src", "image/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      display("you have found a match", "success");
      cards[optionOne].setAttribute("src", "image/white.png");
      cards[optionTwo].setAttribute("src", "image/white.png");
      cards[optionOne].removeEventListener("click", flipCard);
      cards[optionTwo].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOne].setAttribute("src", "image/blank.png");
      cards[optionTwo].setAttribute("src", "image/blank.png");
      //  alert("Sorry, try again");
      display("Sorry, try again", "danger");
    }

    function display(msg, type) {
      displayResult.textContent = msg;
      displayResult.classList.add(`alert-${type}`);

      // remove alert
      setTimeout(function () {
        displayResult.textContent = "";
        displayResult.classList.remove(`alert-${type}`);
      }, 1500);
    }

    cardsChosen = [];
    cardsChosenId = [];
    score.textContent = cardsWon.length;

    if (cardsWon.length === cardsArray.length / 2) {
      score.textContent = "You Win 🏆";
      display("You Won ✌️🏆", "win");
    }
  }

  createBoard();
});

reset.addEventListener("click", () => {
  window.location.reload();
});
