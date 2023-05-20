function longestPalindromeSubstring(str) {
  let longestPalindrome = "";
  let longestPalindromeLength = 0;

  for (let i = 0; i < str.length; i++) {
    let leftPointer = i - 1;
    let rightPointer = str.length % 2 !== 0 ? i + 1 : i;
    while (leftPointer >= 0 && rightPointer < str.length) {
      if (str[leftPointer] === str[rightPointer]) {
        longestPalindrome = str.slice(leftPointer, rightPointer + 1);
        longestPalindromeLength = rightPointer - leftPointer + 1;
      }

      leftPointer--;
      rightPointer++;
    }
  }
  return `${longestPalindrome}, ${longestPalindromeLength}`;
}

console.log(longestPalindromeSubstring("Iamaracecar"));

/* 
Pseudocode

**IF ODD**
Well pick a pointer then check if the leftPointer = i-1 and rightPointer = i+1 is equal

Then we slice the string btw i-1 to i+1 and save as the palindrome


*/
