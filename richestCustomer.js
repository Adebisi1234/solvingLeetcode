/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  // Quick notes
  // Create an res
  // loop through the array then reduce to one then
  // if res = Math.max(res, result)
  let res = 0;
  for (let i = 0; i < accounts.length; i++) {
    let result = accounts[i].reduce((acc, c) => acc + c, 0);
    res = Math.max(res, result);
  }
  return res;
};
