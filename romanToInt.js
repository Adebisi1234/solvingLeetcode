/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const romanValue = {
    default: 0,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const present = s[i];
    const previous = i != 0 ? s[i - 1] : "default";
    const next = s[i + 1];

    if (romanValue[present] < romanValue[next]) {
      continue;
    } else if (romanValue[present] > romanValue[previous]) {
      result += romanValue[present] - romanValue[previous];
    } else {
      result += romanValue[present];
    }
  }
  return result;
};
