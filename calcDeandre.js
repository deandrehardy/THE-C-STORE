function calcAGE(){
  a = age.value  // read height from element with id="height"
  age = 365*a  // calculate the Body Mass Index
  AGE.innerHTML =    // write into label element with id "BMI"
      "Your Age in Days is "
      +age.toFixed(1)  // round BMI to 1 decimal place
}
