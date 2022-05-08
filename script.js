const btnNewGame = document.querySelector('.btn-new');
const btnRollDice = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const dice = document.querySelector('.dice');
let gameStatusActive = true;

let score = [0,0];
let currentScore = 0;
let activePlayer = Math.round(Math.random());
let activePlayerPanel = document.querySelector(`.player-${activePlayer}-panel`);
        activePlayerPanel.classList.add('active');
let activePlayerCurrentScore = document.querySelector('.active .player-current-score');

// Reusabale functions
const playerChange = () => {
    activePlayerPanel.classList.remove('active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayerPanel = document.querySelector(`.player-${activePlayer}-panel`);
    activePlayerPanel.classList.add('active');
    activePlayerCurrentScore = document.querySelector('.active .player-current-score');
}
const resetCurrentScore = () => {
    currentScore = 0;
    activePlayerCurrentScore.textContent = 0;
}

const change = () => {
    resetCurrentScore()    
    playerChange()
}

//BTN Roll

const rollResult = () => {
    let randomNumber = Math.ceil(Math.random() * 6);
    dice.src = `img/dice-${randomNumber}.png`;
    currentScore += randomNumber;
    randomNumber === 1 ? change() : activePlayerCurrentScore.textContent = currentScore;
}

btnRollDice.addEventListener('click', () => gameStatusActive ? rollResult() : alert("Game is Over"))

//BTN Hold

const updatePlayerMainScore = () => {
    score[activePlayer] += currentScore;
    document.querySelector('.active .player-score').textContent = score[activePlayer];
}
const showWinner = () => {
    document.querySelector('.active .player-name').textContent = 'winner';
    dice.style.display = 'none';
    activePlayerPanel.classList.remove('active');
    resetCurrentScore();
}

const checkWinner = () => {
    if (score[activePlayer] >= 20){
        showWinner ();
        gameStatusActive = false;
    } else {
        resetCurrentScore();
        change();
    }
}

btnHold.addEventListener('click', () => { 
    if (gameStatusActive){   
        updatePlayerMainScore();
        checkWinner()
    } else {
        alert("Game is Over")
    }
})

//BTN New game 

const resetMainScore = () => {
    score = [0,0];
    [...document.querySelectorAll(".player-score")].forEach(el => el.textContent=0);

}  

btnNewGame.addEventListener('click', () => {
    resetMainScore();
    resetCurrentScore();
    gameStatusActive = true; 
    playerChange()

})


