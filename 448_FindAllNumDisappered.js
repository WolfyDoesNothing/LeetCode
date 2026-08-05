/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDisappearedNumbers = function (nums) {
  const missing = [];

  for (let i = 0; i < nums.length; i++) {
    let targetIndex = Math.abs(nums[i]) - 1;

    if (nums[targetIndex] > 0) {
      nums[targetIndex] = -nums[targetIndex];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }
  return missing;
};

console.log(findDisappearedNumbers(nums));
