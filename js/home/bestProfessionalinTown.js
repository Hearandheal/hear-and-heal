const bestProfessionalinTown = document.getElementById('bestProfessionalinTown');
const rect = bestProfessionalinTown.getBoundingClientRect();

document.addEventListener('scroll', () => {
    const clientHeight = document.documentElement.clientHeight;
    
    if(clientHeight + window.scrollY <= rect.top) {
        bestProfessionalinTown.style.opacity = 1;
    }
})