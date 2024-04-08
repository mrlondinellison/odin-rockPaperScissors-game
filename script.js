function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection,cpuSelection) {
    playerSelection = prompt('Rock, Paper or Scissors?: ', '').toLowerCase();
    cpuSelection = getComputerChoice();
    function uppercase(word) {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    }
    
    if ((playerSelection === 'rock' && cpuSelection === 'scissors') || (playerSelection === 'paper' && cpuSelection === 'rock') || (playerSelection === 'scissors' && cpuSelection === 'paper')) {
        return `You Win! ${uppercase(playerSelection)} Beats ${uppercase(cpuSelection)}.`;
    } else if ((playerSelection === 'scissors' && cpuSelection === 'rock') || (playerSelection === 'rock' && cpuSelection === 'paper') || (playerSelection === 'paper' && cpuSelection === 'scissors')) {
        return `You Lose! ${uppercase(playerSelection)} Cant Beat ${uppercase(cpuSelection)}.`;
    } else if (playerSelection === cpuSelection) {
        return 'Its a Tie!';
    } else return 'Invalid Entry! Please Try Again.';
}  

console.log(playRound());