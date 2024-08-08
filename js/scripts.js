/* document.addEventListener('DOMContentLoaded', function(){
    const salutationSelect = document.getElementById('salutation-value');
    const genderGroup = document.getElementById('genderGroup');
    const calculateBtn = document.getElementById('calButton');

    salutationSelect.addEventListener('change', function(){
        if(this.value === 'Prof' || this.value === 'Dr'){
            genderGroup.style.visibility = "hidden";
        }
        else{
                genderGroup.style.visibility="visible";
            }
    });
    calculateBtn.addEventListener('click', calculateBMI);
}); */ 

function markGender(genVal){
    //var sal = get.documentElementById("salutation-value");
    if(genVal.value == "Dr" || genVal.value == "Prof"){
        document.getElementById("gender").disabled = false;
    }
    else{
        document.getElementById("gender").disabled = true;
    } 
}

function calculateBMI() {
    const salutation = document.getElementById('salutation-value').value;
    const fullName = document.getElementById('full-name').value;
    const age = document.getElementById('age-number').value;
    const height = document.getElementById('height-value').value;
    const weight = document.getElementById('weight-value').value;
    const bmiField = document.getElementById('bmi-value');
    const descriptionField = document.getElementById('description');
    const gender = document.getElementById('gender').value;

    /* function displayDisabledRadio(this){
        if(this.salutation == "Prof"|| this.salutation == "Dr"){
            genderGroup.style.display = 'flex';
        }
        else{
            genderGroup.style.display = 'none';
        }
    } */

    
    // Validations
    if (salutation == "" || !salutation) {
        alert('Please select a salutation.');
        return;
    }

    if (!fullName) {
        alert('Please enter your full name.');
        return;
    }

    if (!age || isNaN(age) || age < 10 || age > 100) {
        alert('Please enter a valid age between 10 and 100.');
        return;
    }

    if (!height || isNaN(height) || height < 50 || height > 250) {
        alert('Please enter a valid height between 50 and 250 centimeters.');
        return;
    }

    if (!weight || isNaN(weight) || weight < 30 || weight > 200) {
        alert('Please enter a valid weight between 30 and 200 kilograms.');
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    bmiField.value = bmi;

    // Determine BMI category and description
    let description = '';
    if (salutation === 'Mr' || (salutation === 'Prof.' && gender === 'male')|| (salutation === 'Dr.' && gender === 'male')) {
        if (bmi < 20.7) {
            description = 'Underweight';
        } else if (bmi <= 26.4) {
            description = 'Ideal weight';
        } else if (bmi <= 27.8) {
            description = 'Marginally overweight';
        } else if (bmi <= 31.1) {
            description = 'Overweight';
        } else if (bmi <= 45.4) {
            description = 'Very overweight or obese';
        } else {
            description = 'Extremely obese';
        }
    } else {
        if (bmi < 19.1) {
            description = 'Underweight';
        } else if (bmi <= 25.8) {
            description = 'Ideal weight';
        } else if (bmi <= 27.3) {
            description = 'Marginally overweight';
        } else if (bmi <= 32.2) {
            description = 'Overweight';
        } else if (bmi <= 44.8) {
            description = 'Very overweight or obese';
        } else {
            description = 'Extremely obese';
        }
    }
    descriptionField.value = description;
}