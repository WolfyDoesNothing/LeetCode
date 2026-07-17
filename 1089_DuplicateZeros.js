/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
arr = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function (arr) {
  let zeros = 0;
  const a = arr.length;

  for (let i = 0; i < a; i++) {
    if (arr[i] === 0) {
      zeros++;
    }
  }

  let i = a - 1;
  let j = a + zeros - 1;

  while (i >= 0) {
    if (j < a) {
      arr[j] = arr[i];
    }

    if (arr[i] === 0) {
      j--;
      if (j < a) {
        arr[j] = 0;
      }
    }

    i--;
    j--;
  }
};

console.log(duplicateZeros(arr));
