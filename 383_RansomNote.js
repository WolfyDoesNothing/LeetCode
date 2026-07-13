/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
ransomNote = "a";
magazine = "ab";

var canConstruct = function (ransomNote, magazine) {
  const inventory = {};

  //(Logical OR) The || operator looks at the value on its left.
  // First time seeing a letter: undefined || 0 evaluates to 0.
  // Second time seeing a letter: 1 || 0 evaluates to 1.
  for (let char of magazine) {
    inventory[char] = (inventory[char] || 0) + 1;
  }

  for (let char of ransomNote) {
    if (!inventory[char]) {
      return false;
    }

    inventory[char]--;
  }
  return true;
};

console.log(canConstruct(ransomNote, magazine));
