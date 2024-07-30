const heroImageContainer = document.getElementById('heroImageContainer');

function heroimageTrasition() {
    heroImageContainer.style.top = "50%";
    heroImageContainer.style.opacity = "100%";
}

// Rising Your Mind
const risingYourMind = document.getElementById('risingYourMind');
const stat = document.getElementById('stat');
const progressbar = document.getElementById('progressbar');
function risingYourMindTrasition() {
    risingYourMind.style.left = "18.9%";
    risingYourMind.style.opacity = "100%";

    let count = 0;

    setTimeout(() => {
        const intervalId = setInterval(() => {
            count++;
            stat.innerText = `${count}% Done`;
            progressbar.style.width = `${count}%`;
            if(count == 70) clearInterval(intervalId);
        }, 20);
    }, 1500);
}

// depresssionCardContainer
const depresssionCardContainer = document.getElementById('depresssionCardContainer');
function depresssionCardTransition() {
    depresssionCardContainer.style.top = "116px";
    depresssionCardContainer.style.opacity = 1;
}

// Boosting Energy by 100% 
const boostingEnergyCardContainer = document.getElementById('boostingEnergyCardContainer');
const energyBar = document.getElementById('energyBar');
function boostingEnergyCardTransition() {
    boostingEnergyCardContainer.style.opacity = 1;
    boostingEnergyCardContainer.style.scale = 1;
    setTimeout(() => {
        energyBar.style.width = "100%";
    }, 800)
}

heroimageTrasition();
risingYourMindTrasition();
depresssionCardTransition();
boostingEnergyCardTransition();