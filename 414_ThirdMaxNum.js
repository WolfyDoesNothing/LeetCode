/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [3, 2, 1];

var thirdMax = function (nums) {
  let f = -Infinity;
  let s = -Infinity;
  let t = -Infinity;

  for (let n of nums) {
    if (n === f || n === s || n === t) {
      continue;
    }

    if (n > f) {
      [t, s, f] = [s, f, n];
    } else if (n > s) {
      [t, s] = [s, n];
    } else if (n > t) {
      t = n;
    }
  }

  return t === -Infinity ? f : t;
};

console.log(thirdMax(nums));
