/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
nums = [4, 7, 1, 9];
target = 10;

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum(nums, target));
