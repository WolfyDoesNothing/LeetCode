/**
 * @param {number} n
 * @return {string[]}
 */
n = 30;

var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      6;
      answer.push(i.toString());
    }
  }
  return answer;
};

console.log(fizzBuzz(n));
