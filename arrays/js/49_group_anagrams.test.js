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

const groupAnagrams = require("./49_group_anagrams");

describe("Test Cases", () => {
  it("Example 1", () => {
    const anagrams = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(anagrams).toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
  });

  it("Example 2", () => {
    const anagrams = groupAnagrams([""]);
    expect(anagrams).toEqual([[""]]);
  });

  it("Example 3", () => {
    const anagrams = groupAnagrams(["a"]);
    expect(anagrams).toEqual([["a"]]);
  });
});
