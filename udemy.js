function bmiCalculator (weight, height) {
    
    var bmi = weight / Math.pow(height,2);
    var interpretation;
    
    if(bmi < 18.5){
        interpretation = "Your BMI is "+bmi+", so you are underweight"; 
    }
    else if(18.5 <= bmi && bmi <= 24.9){
        interpretation = "Your BMI is "+bmi+", so you have a normal weight";
    }
    else if(25 <= bmi && bmi <= 29.9){
        interpretation = "Your BMI is "+bmi+", so you are overweight";
    }
    else if(30 <= bmi && bmi <= 34.9){
        interpretation = "Your BMI is "+bmi+", so you are obese";
    }
    if(bmi >= 35){
        interpretation = "Your BMI is "+bmi+", so you are extremely obese";
    }
    
    return interpretation;
}

console.log(bmiCalculator(60,2));