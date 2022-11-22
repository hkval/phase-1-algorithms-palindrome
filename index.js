function isPalindrome(word) {
  const array1 = word.split('')
  return word === reverse(array1).join('') ? true : false
}  
  
function reverse(array){
  const revArray = []
  let e = 0
  let i = array.length - 1
  while (i >= 0){
    revArray[i] = array[e]
    i--
    e++
  }
  return revArray
}

/* 
  Add your pseudocode here
  Take input, reverse the order, and check if the reversal matches the input.

  1. Turn the input into an array of letters.
  2. Count the number of letters.
  3. Return a new array, with the original letters assigned new indexes.
      Something like, "For each letter, add it to the new array with index of
          len(input)" and each loop reduces the index.
*/

/*
I converted the input string into an array, created a new array with the elements
reversed, and compared the new array (as a string) to the original input.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
