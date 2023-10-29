const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const turnNo = document.querySelector("#turnNo");
const turnText = document.getElementById('turnText');

const p1Count = document.querySelector("#p1Cards");
const p2Count = document.querySelector("#p2Cards");
const middleCount = document.querySelector("#middleCards");

let turn = 2;
const totalPack = ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC',
    '1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD',
    '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH',
    '1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS',];

function shuffle(arr) {
    //Fisher–Yates shuffle Algorithm
    for (let i = arr.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        let temp = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = temp;
    }
}

shuffle(totalPack);
let P1Cards = totalPack.slice(0, 26);
let P2Cards = totalPack.slice(26, 52);

let middleDeck = [];

//to update number of cards in each deck after each move
function updateCardCount() {
    p1Count.innerText = P1Cards.length;
    p2Count.innerText = P2Cards.length;
    middleCount.innerText = middleDeck.length;
}
function turnChange() {
    if (turn === 1) {
        turn = 2;
        turnNo.innerText = "You";
    } else {
        turn = 1;
        turnNo.innerText = "Computer";
    }
    
}

const imageHolder1=document.querySelector("#imageHolder1");
const imageHolder2=document.querySelector("#imageHolder2");
function play1() {
    let card = P1Cards.pop();
    if (middleDeck.length != 0 && card[0] === middleDeck[middleDeck.length - 1][0]) {
        middleDeck.push(card);
        P1Cards = P1Cards.concat(middleDeck);
        // concat returns a new array but it doesnt change it in original array;
        // console.log("Concatinating in p1");
        // console.log(P1Cards);
        shuffle(P1Cards);
        middleDeck = [];

        alert("Its a match for computer");
        imageHolder1.innerHTML="";
        imageHolder2.innerHTML="";
        setTimeout(play1, 700);
    } else {
        //adding image in middle row
        const img=document.createElement('img');
        img.src=`./cards/${card[0]}-${card[1]}.png`;
        img.classList.add("newimg");
        imageHolder1.innerHTML=imageHolder2.innerHTML;
        imageHolder2.innerText="";
        imageHolder2.append(img);
        
        turnChange();
        p2.addEventListener('click', play2);
        middleDeck.push(card);
        console.log(middleDeck);
    }
    updateCardCount();
    checkWin();

}

function play2() {
    let card = P2Cards.pop();
    if (middleDeck.length != 0 && card[0] === middleDeck[middleDeck.length - 1][0]) {
        middleDeck.push(card);
        P2Cards = P2Cards.concat(middleDeck);
        shuffle(P2Cards);
        middleDeck = [];
        alert("Its a match for you");
        imageHolder1.innerHTML="";
        imageHolder2.innerHTML="";
    } else {
        //adding image in middle row
        const img=document.createElement('img');
        img.src=`./cards/${card[0]}-${card[1]}.png`;
        img.classList.add("newimg");
        imageHolder1.innerHTML=imageHolder2.innerHTML;
        imageHolder2.innerText="";
        imageHolder2.append(img);

        turnChange();
        p2.removeEventListener('click', play2);
        middleDeck.push(card);
        console.log(middleDeck);
        setTimeout(play1, 700);
    }
    updateCardCount();
    checkWin();

}

//to check if someone wins,and updating the display text
function checkWin() {
    if (P1Cards.length === 0) {
        p1.removeEventListener('click', play1);
        p2.removeEventListener('click', play2);
        turnText.innerText = "You Wins!!";
        console.log("2 wins");
    }
    else if (P2Cards.length === 0) {
        p1.removeEventListener('click', play1);
        p2.removeEventListener('click', play2);
        turnText.innerText = "Computer Wins!!";
        console.log("1 wins");
    }
}


//initial calls

// let p1Name=prompt("Name of Player 1","Player1");
// let p2Name=prompt("Name of Player 2","Player2");

updateCardCount();
// p1.addEventListener('click', play1);
// p2.addEventListener('click', play2);

p2.addEventListener("click",play2);

//Code for Shuffle button
const shuffle2 = document.querySelector("#shuffle-2");

shuffle2.addEventListener('click',()=>{
    for (let i = P2Cards.length - 1; i >= 0; i--) {
        // console.log(i);
        let randomIndex = Math.floor(Math.random() * i);
        // console.log('random: ',randomIndex);
        let temp = P2Cards[randomIndex];
        P2Cards[randomIndex] = P2Cards[i];
        P2Cards[i] = temp;
    }
})

