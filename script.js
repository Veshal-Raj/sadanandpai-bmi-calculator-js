const heightInput = document.querySelector('#height-input');
const weightInput = document.querySelector('#weight-input');
const calcBmibtn = document.querySelector('#calculate-bmi-btn');
const bmiResult = document.querySelector('#bmi-result');

calcBmibtn.addEventListener('click', calculateBMI);

function calculateBMI() {
    let height = heightInput.value;
    let weight = weightInput.value;
    height = (height / 100) * (height / 100);
    let bmi = weight / height;
    bmiResult.textContent = bmi.toFixed(2);
}