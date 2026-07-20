/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [555, 901, 482, 1771];

var findNumbers = function (nums) {
  let evenCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let numString = String(nums[i]);
    let numCount = numString.length;

    if (numCount % 2 === 0) {
      evenCount++;
    }
  }
  return evenCount;
};

console.log(findNumbers(nums));
