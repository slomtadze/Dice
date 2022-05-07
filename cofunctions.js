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
const rollResult = () => {
    let randomNumber = Math.ceil(Math.random() * 6);
    dice.src = `img/dice-${randomNumber}.png`;
    currentScore += randomNumber;
    randomNumber === 1 ? change() : activePlayerCurrentScore.textContent = currentScore;
}