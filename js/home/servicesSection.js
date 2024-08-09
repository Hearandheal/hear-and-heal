
const physiotherapy = document.getElementById('physiotherapy');
const cuppyTherapy = document.getElementById('cuppyTherapy');
const dietAndNeutrition = document.getElementById('dietAndNeutrition');
const sleepTherapy = document.getElementById('sleepTherapy');

const physiotherapyVerticalBar = document.querySelector('#physiotherapy .verticalBar');
const cuppyTherapyVerticalBar = document.querySelector('#cuppyTherapy .verticalBar');
const dietAndNeutritionVerticalBar = document.querySelector('#dietAndNeutrition .verticalBar');
const sleepTherapyVerticalBar = document.querySelector('#sleepTherapy .verticalBar');

const physiotherapyButton = document.querySelector('#physiotherapy button');
const cuppyTherapyButton = document.querySelector('#cuppyTherapy button');
const dietAndNeutritionButton = document.querySelector('#dietAndNeutrition button');
const sleepTherapyButton = document.getElementById('sleepTherapy');


const physioImg = document.getElementById('physioImg');
const cuppingImg = document.getElementById('cuppingImg');
const dietImg = document.getElementById('dietImg');
const sleepImg = document.getElementById('sleepImg');


physiotherapy.addEventListener('mouseover', () => {
    // Background Color
    physiotherapyVerticalBar.style.backgroundColor = '#256FB3';
    cuppyTherapyVerticalBar.style.backgroundColor = '#F2F4F7';
    dietAndNeutritionVerticalBar.style.backgroundColor = '#F2F4F7';
    sleepTherapyVerticalBar.style.backgroundColor = "#F2F4F7"

    // Button
    physiotherapyButton.style.paddingRight = '10px';
    cuppyTherapyButton.style.paddingRight = '0';
    dietAndNeutritionButton.style.paddingRight = '0';
    sleepTherapyButton.style.paddingRight = "0"

    // Service image 
    physioImg.style.opacity = 1;
    physioImg.style.zIndex= 1;
    physioImg.style.visibility = "visible";
    cuppingImg.style.opacity = 0;
    cuppingImg.style.zIndex= -1;
    cuppingImg.style.visibility = "hidden";
    dietImg.style.opacity = 0;
    dietImg.style.zIndex= -1;
    dietImg.style.visibility = "hidden";
    sleepImg.style.opacity = 0;
    sleepImg.style.zIndex= -1;
    sleepImg.style.visibility = "hidden";
})

cuppyTherapy.addEventListener('mouseover', () => {
    // Background Color
    physiotherapyVerticalBar.style.backgroundColor = '#F2F4F7';
    cuppyTherapyVerticalBar.style.backgroundColor = '#256FB3';
    dietAndNeutritionVerticalBar.style.backgroundColor = '#F2F4F7';
    sleepTherapyVerticalBar.style.backgroundColor = "#F2F4F7"

    // Button
    physiotherapyButton.style.paddingRight = '0';
    cuppyTherapyButton.style.paddingRight = '10px';
    dietAndNeutritionButton.style.paddingRight = '0';
    sleepTherapyButton.style.paddingRight = "0"

    // Service image 
    physioImg.style.opacity = 0;
    physioImg.style.zIndex = -1;
    physioImg.style.visibility = "hidden";
    cuppingImg.style.opacity = 1;
    cuppingImg.style.zIndex = 1;
    cuppingImg.style.visibility = "visible";
    dietImg.style.opacity = 0;
    dietImg.style.zIndex = -1;
    dietImg.style.visibility = "hidden";
    sleepImg.style.opacity = 0;
    sleepImg.style.zIndex = -1;
    sleepImg.style.visibility = "hidden";
})

dietAndNeutrition.addEventListener('mouseover', () => {
    // Background Color
    physiotherapyVerticalBar.style.backgroundColor = '#F2F4F7';
    cuppyTherapyVerticalBar.style.backgroundColor = '#F2F4F7';
    dietAndNeutritionVerticalBar.style.backgroundColor = '#256FB3';
    sleepTherapyVerticalBar.style.backgroundColor = "#F2F4F7"

    // Button
    physiotherapyButton.style.paddingRight = '0';
    cuppyTherapyButton.style.paddingRight = '0';
    dietAndNeutritionButton.style.paddingRight = '10px';
    sleepTherapyButton.style.paddingRight = "0"

    // Service image 
    physioImg.style.opacity = 0;
    physioImg.style.zIndex = -1;
    physioImg.style.visibility = "hidden";
    cuppingImg.style.opacity = 0;
    cuppingImg.style.zIndex = -1;
    cuppingImg.style.visibility = "hidden";
    dietImg.style.opacity = 1;
    dietImg.style.zIndex = 1;
    dietImg.style.visibility = "visible";
    sleepImg.style.opacity = 0;
    sleepImg.style.zIndex = -1;
    sleepImg.style.visibility = "hidden";
})

sleepTherapy.addEventListener('mouseover', () => {
    // Background Color
    physiotherapyVerticalBar.style.backgroundColor = '#F2F4F7';
    cuppyTherapyVerticalBar.style.backgroundColor = '#F2F4F7';
    dietAndNeutritionVerticalBar.style.backgroundColor = '#F2F4F7';
    sleepTherapyVerticalBar.style.backgroundColor = "#256FB3"

    // Button
    physiotherapyButton.style.paddingRight = '0';
    cuppyTherapyButton.style.paddingRight = '0';
    dietAndNeutritionButton.style.paddingRight = '0';
    sleepTherapyButton.style.paddingRight = "10px"

    // Service image 
    physioImg.style.opacity = 0;
    physioImg.style.zIndex = -1;
    physioImg.style.visibility = "hidden";
    cuppingImg.style.opacity = 0;
    cuppingImg.style.zIndex = -1;
    cuppingImg.style.visibility = "hidden";
    dietImg.style.opacity = 0;
    dietImg.style.zIndex = -1;
    dietImg.style.visibility = "hidden";
    sleepImg.style.opacity = 1;
    sleepImg.style.zIndex = 1;
    sleepImg.style.visibility = "visible";
})

