/**
 * @param {string} s
 * @return {number}
 */
s = "DCCCLXIX";

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;
  let previous = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let current = map[s[i]];

    if (current < previous) {
      num -= current;
    } else {
      num += current;
    }
    previous = current;
  }

  return num;
};

console.log(romanToInt(s));
