/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
nums = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;

var removeElement = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] == val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }
  return left;
};

console.log(removeElement(nums, val));
