// Source : https://leetcode.com/problems/find-smallest-letter-greater-than-target//
// Author : Pradeep Kumar Balan
// Date   : 2023-06-09

/*****************************************************************************************************
744. Find Smallest Letter Greater Than Target

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
******************************************************************************************************/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
  const code = (s) => s.charCodeAt(0) - 97;

  const targetCode = code(target);

  for (let l of letters) {
    if (code(l) > targetCode) {
      return l;
    }
  }

  return letters[0];
};

module.exports = nextGreatestLetter;
