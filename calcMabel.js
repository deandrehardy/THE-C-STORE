function calcTip(){
  x = pretax.value  // read weight from element with id="weight"
  y = taxrate.value  // read height from element with id="height"
  tip = x*y  // calculate the Body Mass Index
  Tip.innerHTML =    // write into label element with id "BMI"
      "Your total tip is "
      +tip.toFixed(1)  // round BMI to 1 decimal place
}
