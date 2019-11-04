function calcTip(){
  x = pretax.value  // read pretax from element with id="pretax"
  y = taxrate.value  // read taxrate from element with id="taxrate"
  console.log("x="+x)
  console.log("y="+y)
  console.log("Hi Mabel!!")
  tip = x*y  // calculate the tip
  Tip.innerHTML =    // write into label element with id "Tip"
      "Your total tip is "
      +tip.toFixed(1)  // round Tip to 1 decimal place
}
