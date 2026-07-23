/**
 * @param {number[]} arr
 * @return {boolean}
 */
arr = [0, 3, 2, 1];

var validMountainArray = function (arr) {
  const n = arr.length;
  let i = 0;

  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === n - 1) {
    return false;
  }

  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === n - 1;
};

console.log(validMountainArray(arr));
