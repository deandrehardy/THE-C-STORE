function calcTax(){
  c = parseFloat(costs.value)  // read weight from element with id="weight"
  t = parseFloat(tax.value)  // read height from element with id="height"
  totalCost = c*t+c  // calculate the Body Mass Index
  Total.innerHTML =    // write into label element with id "BMI"
      "it costs <br>"
      + totalCost.toFixed(2)  // round BMI to 1 decimal place
}
