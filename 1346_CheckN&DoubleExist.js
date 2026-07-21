/**
 * @param {number[]} arr
 * @return {boolean}
 */
arr = [10, 2, 5, 3];

var checkIfExist = function (arr) {
  const seen = new Map();

  for (let num of arr) {
    if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) return true;
    if (!seen.has(num)) {
      seen.set(num, 1);
    }
  }
  return false;
};

console.log(checkIfExist(arr));
