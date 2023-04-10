const letterCombinations = (digits) => {
  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  
  const result = [];
  
  const generateCombinations = (index, combination) => {
    if (index === digits.length) {
      result.push(combination);
      return;
    }
    
    const letters = map[digits[index]];
    
    for (let i = 0; i < letters.length; i++) {
      generateCombinations(index + 1, combination + letters[i]);
    }
  };
  
  if (digits.length > 0) {
    generateCombinations(0, "");
  }
  
  return result;
};
console.log(letterCombinations("234"))