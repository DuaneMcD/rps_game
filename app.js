const weapons = document.querySelector('.weapons');
const prompt = document.querySelector('#prompt');
let win = 0;
let loss = 0;
let draw = 0;

function init () {
    promptReset();
    weapons.addEventListener("click", (e) => {
    promptUser(e);
    })
}

function promptReset() {
    prompt.textContent = "Select Your Weapon...";
}

function promptUser(e) {
    playerChoice = e.target.title;
    prompt.textContent = "You have selected "+playerChoice+"!";
    setTimeout(countDown, 1600, playerChoice);
}

function countDown (playerChoice) {
    let seconds = 3;
    (function countdown() {
        prompt.textContent = seconds
        if(seconds -->0)
            setTimeout(countdown, 500);
        else updateScore(playerChoice);
    }
    )()
}

function updateScore(playerChoice) {
    result = gameResult(playerChoice);
    prompt.textContent = result;
    switch (result) {
        case "Win!":
            win++;
            document.querySelector('#winScore').textContent = `${win}`;
        break; 
        case "Loss!":
            loss++;
            document.querySelector('#lossScore').textContent = `${loss}`;
        break;
        case "Draw!":
            draw++;
            document.querySelector('#drawScore').textContent = `${draw}`; 
        break;
    }
}

function gameResult(playerChoice) {
    const computerChoice = computerSelect();
    setTimeout(promptReset, 4300)
        switch (computerChoice+playerChoice) {
            case "hammershield":
               return "Win!"
            case "hammersword":
               return "Loss!"
            case "shieldsword":
               return "Win!"
            case "shieldhammer":
               return "Loss!"
            case "swordhammer":
               return "Win!"
            case "swordshield":
               return "Loss!"
        default:
           return "Draw!"
        }
}

function computerSelect () {
    const gameWeapons = ['hammer', 'shield', 'sword']
    return gameWeapons[Math.floor(Math.random() * gameWeapons.length)];
}

document.addEventListener('DOMContentLoaded', init());