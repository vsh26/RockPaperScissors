const rockButton = document.querySelector('.js-rock-btn');
const paperButton = document.querySelector('.js-paper-btn');
const scissorsButton = document.querySelector('.js-scissors-btn');
const displayText = document.querySelector('.js-display-score');
const resetButton = document.querySelector('.js-reset-btn');


const storedScore = JSON.parse(localStorage.getItem('score'));

const score =  storedScore || {
    wins : 0,
    losses : 0,
    ties: 0
}

if(storedScore){
    displayText.innerText = `
    Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

rockButton.addEventListener('click', (event) => {
    // console.log(event);
    play('Rock');
});

paperButton.addEventListener('click', (event) => {
    play('Paper');
});

scissorsButton.addEventListener('click', (event) => {
    play('Scissors');
});

resetButton.addEventListener('click', () => {
    resetScore();
});

function play(userMove){
    let result = '';
    const computerMove = pickComputerMove();

    if(userMove === computerMove){
        result = 'Tie';
        score.ties += 1;
    }else{
        if(userMove === 'Rock'){
            if(computerMove === 'Paper'){
                result = 'You Lose!';
                score.losses += 1;
            }else{
                result = 'You Win!';
                score.wins += 1;
            }
        }else if(userMove === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'You Win!';
                score.wins += 1;
            }else{
                result = 'You Lose!';
                score.losses += 1;
            }
        }else{
            if(computerMove === 'Rock'){
                result = 'You Lose!';
                score.losses += 1;
            }else{
                result = 'You Win!';
                score.wins += 1;
            }
        }
    }

    localStorage.setItem('score', JSON.stringify(score));

    displayScore(userMove, computerMove, result);

    // console.log(userMove);
    // console.log(computerMove);
    // console.log(result);
}

function pickComputerMove(){

    let computerMove = '';
    const randomNum = Math.random();

    if(randomNum >= 0 && randomNum < 1/3){
        computerMove = 'Rock';
    }else if(randomNum >= 1/3 && randomNum < 2/3){
        computerMove = 'Paper';
    }else{
        computerMove = 'Scissors';
    }

    return computerMove;
}

function displayScore(userMove, computerMove, result){
    displayText.innerText = `Your move: ${userMove}, Computer move: ${computerMove}
    Result: ${result}
    Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.setItem('score', JSON.stringify(score));
    displayResetScore();
}

function displayResetScore(){
    displayText.innerText = `Score reset successful!
    Score - Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}