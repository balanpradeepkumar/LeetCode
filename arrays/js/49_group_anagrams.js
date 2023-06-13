// Source : https://leetcode.com/problems/group-anagrams/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-13

/*****************************************************************************************************
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Constraints:
* 1 <= strs.length <= 104
* 0 <= strs[i].length <= 100
* strs[i] consists of lowercase English letters.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
******************************************************************************************************/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const count = {};

  for (let i of strs) {
    const sorted = i.split("").sort();
    if (count[sorted]) {
      count[sorted].push(i);
    } else {
      count[sorted] = [i];
    }
  }

  return Object.values(count);
};

module.exports = groupAnagrams;
