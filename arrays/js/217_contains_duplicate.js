// Source : https://leetcode.com/problems/contains-duplicate/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-03

/*****************************************************************************************************
217. Contains Duplicate

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

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const countObject = {};
  let isDuplicate = false;
  nums.forEach((i) => {
    if (countObject[i] != undefined) {
      isDuplicate = true;
      return;
    } else {
      countObject[i] = 1;
    }
  });
  return isDuplicate;
};

module.exports = containsDuplicate;
