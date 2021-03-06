
const hammer = document.querySelector('#hammer');
const sword = document.querySelector('#sword');
const shield = document.querySelector('#shield');


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
    APP.prompt.textContent = "You have selected "+e.target.title+"!";
    setTimeout(countDown, 1600)
    setTimeout(APP.prompt.textContent = "Computer Selected", 41000);
    //setTimeout(computerSelect,5400);

}
function countDown () { 
    let seconds = 3;
    (function countdown() {
        APP.prompt.textContent = seconds
        if(seconds -->1)
            setTimeout(countdown, 800);
    }
    )()
}
function computerSelect() {
    setTimeout(APP.prompt.textContent = "Rock", 12000);
    return;
}

document.addEventListener('DOMContentLoaded', APP.init());