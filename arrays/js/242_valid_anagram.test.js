// Source : https://leetcode.com/problems/valid-anagram/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-06

/*****************************************************************************************************
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
******************************************************************************************************/

const isAnagram = require("./242_valid_anagram");

describe("Test Cases", () => {
  it("Example 1", () => {
    const validAnagram = isAnagram("anagram", "nagaram");
    expect(validAnagram).toBe(true);
  });

  it("Example 2", () => {
    const validAnagram = isAnagram("rat", "car");
    expect(validAnagram).toBe(false);
  });
});
