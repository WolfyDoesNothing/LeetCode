/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  let result = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] ** 2;
      left++;
    } else {
      result[i] = nums[right] ** 2;
      right--;
    }
  }
  return result;
};

console.log(sortedSquares(nums));
