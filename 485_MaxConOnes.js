/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1, 0, 1, 1, 0, 1];

var findMaxConsecutiveOnes = function (nums) {
  maxCount = 0;
  currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};

console.log(findMaxConsecutiveOnes(nums));
