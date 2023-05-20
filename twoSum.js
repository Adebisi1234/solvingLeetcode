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
