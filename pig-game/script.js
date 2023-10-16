'use strict';

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
//both of above methodes are same in above case we have to use # but in second we don't do so..
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

//to hide dice which is initially present on screen with some number
diceEl.classList.add('hidden');

let scores,currentScore,activePlayer,playing;

//setting initially everything
const init = function(){

  scores = [0,0];
  currentScore=0;
  activePlayer=0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');


}

init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore=0;
    activePlayer = activePlayer=== 0 ? 1 : 0;
    //to make background bright of current player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    //toggle will add player--active class if not and can remove if it is present
}

//rolling dice functionality
btnRoll.addEventListener('click',function(){

    //generating a random dice roll
    const dice = Math.trunc(Math.random()*6)+1;

    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    

    //checking for 1
    if (dice!==1){

        //add dice to current score
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        //change player
       switchPlayer();
    }
});
    //adding functionality of hold
    btnHold.addEventListener('click',function(){
      if(playing){
        //1.adding current score to active player's score
        
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2.checking for score >=100
        if(scores[activePlayer]>=100){
            playing= false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    
        }
        else{
            switchPlayer();
        }
    } 
});

btnNew.addEventListener('click',init);
 