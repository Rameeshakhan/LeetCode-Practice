//First Method
//for lower to upper use this dictionary like this -> "a" : "A" .....
function convertToLowerCase(inputString) {
  const uppercaseToLowerCase = {
    'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g',
    'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n',
    'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u',
    'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z'
  };

  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (uppercaseToLowerCase.hasOwnProperty(char)) {
      // If the character is an uppercase letter, use the dictionary to map it to lowercase
      result += uppercaseToLowerCase[char];
    } else {
      // Leave other characters unchanged
      result += char;
    }
  }

  return result;
}


//Second Method
// for lower to upper use the range 97 to 122 and subtract 32 
function convertToLowerCase(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Convert uppercase to lowercase by adding 32 to the character code
      result += String.fromCharCode(charCode + 32);
    } else {
      // Leave other characters unchanged
      result += inputString.charAt(i);
    }
  }
  return result;
}

// Example usage:
const inputStr = "Hello World";
const outputStr = convertToLowerCase(inputStr);
console.log(outputStr); // Output: "hello world"
