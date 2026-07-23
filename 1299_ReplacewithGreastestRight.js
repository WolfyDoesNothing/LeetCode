/**
 * @param {number[]} arr
 * @return {number[]}
 */
arr = [17, 18, 5, 4, 6, 1];

var replaceElements = function (arr) {
  let r = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let c = arr[i];
    arr[i] = r;
    r = Math.max(r, c);
  }
  return arr;
};

console.log(replaceElements(arr));
