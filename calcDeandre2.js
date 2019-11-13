function calcAREA(){
  a = aTF.value  // read height from element with id="height"
  b = bTF.value // calculate the Body Mass Index
  c = cTF.value
  s= (a+b+c)/2
  area= Math.sqrt(s*(s-a)*(s-c))
  AREA.innerHTML =    // write into label element with id "BMI"
      "The area of the triangle is "
      +AREA.toFixed(1)  // round BMI to 1 decimal place
