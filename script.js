const rockButton = document.querySelector('.js-rock-btn');
const paperButton = document.querySelector('.js-paper-btn');
const scissorsButton = document.querySelector('.js-scissors-btn');
const displayText = document.querySelector('.js-display-score');
const resetButton = document.querySelector('.js-reset-button');

let score = {
    wins : 0,
    losses : 0,
    ties: 0
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

function play(userMove){
    let result = '';
    const computerMove = pickComputerMove();

    if(userMove === computerMove){
        result = 'Tie';
    }else{
        if(userMove === 'Rock'){
            if(computerMove === 'Paper'){
                result = 'You Lose!';
            }else{
                result = 'You Win!';
            }
        }else if(userMove === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'You Win!';
            }else{
                result = 'You Lose!';
            }
        }else{
            if(computerMove === 'Rock'){
                result = 'You Lose!';
            }else{
                result = 'You Win!';
            }
        }
    }

    console.log(userMove);
    console.log(computerMove);
    
    
    console.log(result);
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

function reset(){

}