/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[l];
      nums[l] = nums[i];
      nums[i] = temp;

      l++;
    }
  }
  return nums;
};

console.log(moveZeroes(nums));
