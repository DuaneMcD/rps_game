const APP = {
    weapons: document.querySelector('.weapons'),
    prompt: document.querySelector('#prompt'),
    init () {
        promptReset();
        APP.weapons.addEventListener("click", (e) => {
        promptUser(e);
        })
    }
}
function promptReset() {
    APP.prompt.textContent = "Select Your Weapon...";
}
function promptUser(e) {
    playerChoice = e.target.title;
    APP.prompt.textContent = "You have selected "+playerChoice+"!";
    setTimeout(countDown, 1600, playerChoice);
}
function countDown (playerChoice) {
    let seconds = 3;
    (function countdown() {
        APP.prompt.textContent = seconds
        if(seconds -->0)
            setTimeout(countdown, 55);
        else updateScore(playerChoice);
    }
    )()
}
function updateScore(playerChoice) {
    result = gameResult(playerChoice);
    APP.prompt.textContent = result;
    // let w;
    // for (w = 0; result == "Win!"; w++) {
    //     document.querySelector(".winScore").textContent = w;
    //     break
    // }
    // let l;
    // for (l = 0; result == "Loss!"; APP.l++) {
    //     document.querySelector(".lossScore").textContent = l;
    //     break
    // }
    // let d;
    // for (d = 0; result == "Draw!"; APP.d++) {
    //     document.querySelector(".drawScore").textContent = d;
    //     break
    // }
}
function gameResult(playerChoice) {
    computerChoice = computerSelect();
    setTimeout(promptReset, 4200)
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
    let choice = Math.floor(Math.random()* 10);
    switch (choice) {
        case 0:
            return computerSelect();
        case 1:
            return "hammer";
        case 2:
            return "hammer";
        case 3:
            return "hammer";
        case 4:
            return "shield";
        case 5:
            return "shield";
        case 6:
            return "shield";
        case 7:
            return "sword";
        case 8:
            return "sword";
        case 9:
            return "sword";
    }
}
document.addEventListener('DOMContentLoaded', APP.init());