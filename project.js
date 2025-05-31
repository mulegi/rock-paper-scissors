document.addEventListener('DOMContentLoaded', function() {
    let choices = ['rock', 'paper', 'scissors'];
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = '';

    let container = document.getElementById('container');

    let displayChoices = document.createElement('p');
    displayChoices.className = 'display-choices';
    container.appendChild(displayChoices);

    let result = document.createElement('p');
    result.className = 'result';
    container.appendChild(result);

    let score = document.createElement('p');
    score.className = 'score';
    container.appendChild(score);

    let resetButton = document.createElement('button');
    resetButton.textContent = "Reset";
    resetButton.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        displayChoices.textContent = '';
        result.textContent = '';
        score.textContent = `You're score:${humanScore}, Computer score:${computerScore}`;
    });
    container.appendChild(resetButton);

    for (let i = 0; i < choices.length; i++) {
        let button = document.createElement('button');
        button.textContent = choices[i];
        button.id = choices[i];
        button.addEventListener('click', buttonClick);
        container.appendChild(button);
    }

    function getComputerChoice(stringArray) {
        let randomIndex = Math.floor(Math.random() * stringArray.length);
        return stringArray[randomIndex];
    }

    function buttonClick(e) {
        humanSelection = e.target.id;
        const computerSelection = getComputerChoice(choices);
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanChoice, computerChoice) {
        displayChoices.textContent = `Computer's Choice: ${computerChoice}, Your choice: ${humanChoice}`;

        const winConditions = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        if (humanChoice === computerChoice) {
            result.textContent = `It's a draw`;
        } else if (winConditions[humanChoice] === computerChoice) {
            humanScore++;
            result.textContent = 'You win';
        } else {
            computerScore++;
            result.textContent = 'You lose';
        }

        score.textContent = `You're score: ${humanScore}, Computer score: ${computerScore}`;
    }
});