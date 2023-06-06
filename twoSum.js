const arr = [12, 22, 54, 32, 13];
const target = 25;
let index = 0;

//  My Solution
function twoSum(arr, pointer) {
  if (index === arr.length) {
    console.log("No result");
    return;
  }
  const lastNumber = target - pointer;
  const lastIndex = arr.findIndex((el) => el === lastNumber);

  if (lastIndex === -1 || lastIndex === index) {
    index = index + 1;
    twoSum(arr, arr[index]);
  } else {
    const result = [index, lastIndex];
    console.log(result);
  }
}

twoSum(arr, arr[0]);

// Real Solution
const twoSum = function(nums, target) {
    if(nums.length == 2) return [0, 1];

    let hash = {};

    for(let i = 0 ; i < nums.length; i ++) {
        if(hash[target - nums[i]] || hash[target - nums[i]] == 0) {
            return [hash[target - nums[i]], i]
        }
        hash[nums[i]] = i;
    }
};