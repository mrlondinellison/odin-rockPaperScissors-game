function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection,cpuSelection) {
    function uppercase(word) {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    };
    playerSelection = prompt('Rock, Paper or Scissors?: ', '').toLowerCase();
    cpuSelection = getComputerChoice();
    
    if ((playerSelection === 'rock' && cpuSelection === 'scissors') || 
        (playerSelection === 'paper' && cpuSelection === 'rock') || 
        (playerSelection === 'scissors' && cpuSelection === 'paper')) {
        return ['w', console.log(`You Won This Round! ${uppercase(playerSelection)} Beats ${uppercase(cpuSelection)}.`)];
    } else if ((playerSelection === 'scissors' && cpuSelection === 'rock') || 
        (playerSelection === 'rock' && cpuSelection === 'paper') || 
        (playerSelection === 'paper' && cpuSelection === 'scissors')) {
        return ['l', console.log(`You Lost This Round :( ${uppercase(playerSelection)} Cant Beat ${uppercase(cpuSelection)}.`)];
    } else if (playerSelection === cpuSelection) {
        return ['t', console.log('Its a Tie!')];
    } else {
        return ['x', console.log('Invalid Entry! Please Try Again.')];
    };  
};

function playGame() {
    let playerScore = 0;
    let cpuScore = 0;
    
    for (let roundsPlayed = 1; roundsPlayed <= 5; roundsPlayed += 1) {
        let result = playRound()[0];
        if (result == 'w') {
            playerScore += 1; 
        } else if (result == 'l') {
            cpuScore += 1;
        } else if (result == 't' || result == 'x') {
            roundsPlayed -= 1;
        };
    
        if (roundsPlayed == 5) {
            (playerScore > cpuScore) ? 
            console.log('You Win The Game!!') : 
            console.log('You Lost The Game :(');
        };
        console.log(`Score - You: ${playerScore} CPU: ${cpuScore}`);
    };
};

playGame();