
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

const serviceImg = document.getElementById('serviceImg');


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
    serviceImg.setAttribute("src", './assets/home/image/jpeg/Physio image.jpg');
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
    serviceImg.setAttribute("src", './assets/home/image/jpeg/Cupping Image.jpg');
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
    serviceImg.setAttribute("src", './assets/home/image/jpeg/Diet and nutrition image.jpg');
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
    serviceImg.setAttribute("src", './assets/home/image/jpeg/sleepTherapy.jpg');
})

