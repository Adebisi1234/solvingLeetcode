function lengthOfLongestSubstring(str) {
  const charSet = new Set();
  let leftPointer = 0;
  let res = 0;

  for (let i = 0; i < str.length; i++) {
    while (charSet.has(str[i])) {
      charSet.delete(str[leftPointer]);
      leftPointer++;
    }
    charSet.add(str[i]);
    res = Math.max(res, i - leftPointer + 1);
  }
  return res;
}

console.log(lengthOfLongestSubstring("abcejfjbb"));
