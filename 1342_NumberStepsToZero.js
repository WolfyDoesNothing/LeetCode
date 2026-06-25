/**
 * @param {number} num
 * @return {number}
 */
num = 123;

// Regular Old Solution
var numberOfSteps = function (num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num >> 1;
    } else {
      num = num - 1;
    }
    steps++;
  }
  return steps;
};

console.log(numberOfSteps(num));
