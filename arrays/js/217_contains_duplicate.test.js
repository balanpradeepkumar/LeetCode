// Source : https://leetcode.com/problems/contains-duplicate/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-03

/*****************************************************************************************************
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
******************************************************************************************************/

const containsDuplicate = require("./217_contains_duplicate");

describe("Test Cases", () => {
  it("Example 1", () => {
    const isDuplicate = containsDuplicate([1, 2, 3, 1]);
    expect(isDuplicate).toBe(true);
  });

  it("Example 2", () => {
    const isDuplicate = containsDuplicate([1, 2, 3, 4]);
    expect(isDuplicate).toBe(false);
  });

  it("Example 3", () => {
    const isDuplicate = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(isDuplicate).toBe(true);
  });
});
