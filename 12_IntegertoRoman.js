/**
 * @param {number} num
 * @return {string}
 */
num = 3749;

var intToRoman = function (num) {
  const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let answer = "";

  for (let i = 0; i < value.length; i++) {
    while (num >= value[i]) {
      answer += roman[i];
      num -= value[i];
    }
  }
  return answer;
};

console.log(intToRoman(num));
