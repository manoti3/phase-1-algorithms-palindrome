function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
function isPalindrome(str) {
  // Remove any non-alphabet characters and convert to lowercase
  str = str.replace(/[^a-z]/g, '').toLowerCase();

  // Initialize two pointers, one at the beginning and one at the end
  let left = 0;
  let right = str.length - 1;

  // Compare characters while moving the pointers towards each other
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // If characters don't match, it's not a palindrome
    }
    left++;
    right--;
  }

  return true; // If the loop completes, it's a palindrome
}

// Test cases
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("robot"));  // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
