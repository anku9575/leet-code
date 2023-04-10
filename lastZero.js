// internet solution
const lastZero = (inputArray) => {

  // Filter out the non-zero elements from the input array
  let nonZeros = inputArray.filter(num => num !== 0);

  // Create an array of the same length as the input array, but filled with zeros
  let zeros = Array(inputArray.length - nonZeros.length).fill(0);

  // Concatenate the non-zero elements with the zeros array
  let output = nonZeros.concat(zeros);

  return output;

}
console.log(lastZero([0, 0, 0, 1, 0, 3, 12])); 

// my solution
const lastZeros = (inputArray) => {

  let zerosCount = 0
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      zerosCount++;
    } else {
      if (zerosCount > 0) {
        inputArray[i - zerosCount] = inputArray[i];
        inputArray[i] = 0;
      }
    }
  }

  return inputArray;

}

console.log(lastZeros([0, 0, 0, 1, 0, 3, 12]));
