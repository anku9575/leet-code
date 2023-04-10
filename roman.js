function romanToNumbers(romanValue) {

  let obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  
  let value = 0;
  for (let i = 0; i < romanValue.length; i++) {
    
    if (obj[romanValue[i]] < obj[romanValue[i+1]]) {
      value = value - obj[romanValue[i]];
    } else {
      value = value + obj[romanValue[i]];
    }
  }
  return value;
}
  
console.log(romanToNumbers("MCMXCIV"));
console.log(romanToNumbers("LVIII"));
console.log(romanToNumbers("III"));