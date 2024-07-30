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

//  self-esteem 
const selfEsteemCardContainer = document.getElementById('selfEsteemCardContainer');
function selfEsteemCardTransition() {
    selfEsteemCardContainer.style.right = "17.9%";
    selfEsteemCardContainer.style.opacity = 1;
}

// Anxity
const anxityCardContainer = document.getElementById('anxityCardContainer');
function anxityCardTransition() {
    anxityCardContainer.style.left = "24.6%";
    anxityCardContainer.style.opacity = 1;
}


//  Companion 
const companionCardContainer = document.getElementById('companionCardContainer');
function companionCardTransition() {
    companionCardContainer.style.right = "23.3%";
    companionCardContainer.style.opacity = 1;
}


// Hyper-active disorder
const hyperActiveCardContainer = document.getElementById('hyperActiveCardContainer');
function hyperActiveCardTransition() {
    hyperActiveCardContainer.style.bottom = "157px";
    hyperActiveCardContainer.style.opacity = 1;
}


//  Anger Issue 
const angerIssueCardContainer = document.getElementById('angerIssueCardContainer');
function angerIssueCardTransition() {
    angerIssueCardContainer.style.bottom = "192px";
    angerIssueCardContainer.style.opacity = 1;
}



heroimageTrasition();
risingYourMindTrasition();
depresssionCardTransition();
boostingEnergyCardTransition();
selfEsteemCardTransition();
anxityCardTransition();
companionCardTransition();
hyperActiveCardTransition();
angerIssueCardTransition();