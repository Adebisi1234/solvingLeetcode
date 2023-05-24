/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let index = 0;
  while (num != 0) {
    num % 2 === 0 ? (num = num / 2) : (num = num - 1);
    index++;
  }
  return index;
};
