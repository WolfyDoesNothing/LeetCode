/**
 * @param {number[][]} accounts
 * @return {number}
 */
accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

var maximumWealth = function (accounts) {
  maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let currentWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      currentWealth += accounts[i][j];
    }
    if (currentWealth > maxWealth) {
      maxWealth = currentWealth;
    }
  }
  return maxWealth;
};

console.log(maximumWealth(accounts));
