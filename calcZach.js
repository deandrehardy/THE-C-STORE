function calcMPG(){
  d = distance.value  // read weight from element with id="weight"
  g = gas.value  // read height from element with id="height"
  mpg = d/g  // calculate the Body Mass Index
  MPG.innerHTML =    // write into label element with id "BMI"
      "Your MPG is "
      +mpg.toFixed(1)  // round BMI to 1 decimal place
}
