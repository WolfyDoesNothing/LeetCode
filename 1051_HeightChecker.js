/**
 * @param {number[]} heights
 * @return {number}
 */
heights = [1, 1, 4, 2, 1, 3];

var heightChecker = function (heights) {
  const expected = [...heights].sort((a, b) => a - b);
  let m = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      m++;
    }
  }
  return m;
};

console.log(heightChecker(heights));
