// Source : https://leetcode.com/problems/two-sum/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-11

/*****************************************************************************************************
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
******************************************************************************************************/

const twoSum = require("./1_two_sum");

describe("Test Cases", () => {
  it("Example 1", () => {
    const sum = twoSum([2, 7, 11, 15], 9);
    expect(sum).toEqual([0, 1]);
  });

  it("Example 2", () => {
    const sum = twoSum([3, 2, 4], 6);
    expect(sum).toEqual([1, 2]);
  });

  it("Example 3", () => {
    const sum = twoSum([3, 3], 6);
    expect(sum).toEqual([0, 1]);
  });
});
