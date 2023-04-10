
function reverseInteger(x) {

  let element = "";
  for(let i = x.length - 1; i >= 0 ; i--) {
    element += x[i] 
  }

  return parseInt(element);
  
} 

console.log(reverseInteger("123"));
