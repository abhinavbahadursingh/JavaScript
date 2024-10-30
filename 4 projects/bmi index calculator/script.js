const form = document.querySelector('#bmiForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    // Validate height
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height value.";
    } 
    // Validate weight
    else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight value.";
    } 
    else {
        // Correct calculation of BMI
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2); // Convert height from cm to meters
        result.innerHTML = `Your BMI is: <span>${bmi}</span>`;
    }
});
