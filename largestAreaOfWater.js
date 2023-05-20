function largestArea(height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let result = 0;
  while (leftPointer < rightPointer) {
    let area =
      (rightPointer - leftPointer) *
      Math.min(height[leftPointer], height[rightPointer]);
    result = Math.max(result, area);

    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return result;
}

console.log(largestArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
