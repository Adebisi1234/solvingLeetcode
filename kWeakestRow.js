var kWeakestRows = function (mat, k) {
  let map = new Map();
  let arr = [];
  let result = [];
  for (let i = 0; i < mat.length; i++) {
    let sum = mat[i].reduce((acc, c) => acc + c, 0);
    map.has(sum)
      ? Array.isArray(map.get(sum))
        ? map.set(sum, [...map.get(sum), i])
        : map.set(sum, [map.get(sum), i])
      : map.set(sum, i);
    arr.push(sum);
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
  for (let j = 0; j < k; j++) {
    // console.log("first");
    if (Array.isArray(map.get(arr[j]))) {
      result.push(...map.get(arr[j]));
      //   console.log(...map.get(arr[j]));
      console.log(j);
      j += map.get(arr[j]).length - 1;
      console.log(j);
    } else {
      result.push(map.get(arr[j]));
      console.log(map.get(arr[j]));
      console.log("first");
    }
  }

  return result.slice(0, k);
};

// Faster Solution I'll look through later
var kWeakestRows = function (mat, k) {
  const rows = new Set();
  const colsCount = mat[0].length;
  const rowsCount = mat.length;

  for (let col = 0; col < colsCount; col++) {
    for (let row = 0; row < rowsCount; row++) {
      if (!mat[row][col]) rows.add(row);
      if (rows.size === k) break;
    }

    if (rows.size === k) break;
  }

  if (rows.size === 0) return [0];

  if (rows.size < k) {
    for (let row = 0; row < rowsCount; row++) {
      rows.add(row);
      if (rows.size === k) break;
    }
  }

  return Array.from(rows);
};
