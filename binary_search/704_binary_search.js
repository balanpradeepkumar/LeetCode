// Source : https://leetcode.com/problems/binary-search/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-10

/*****************************************************************************************************
704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
******************************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let arr = nums.map((v, i) => [v, i]);
  const value = (i) => arr[i][0];
  const index = (i) => arr[i][1];

  while (arr.length > 0) {
    const midPoint = Math.ceil(arr.length / 2) - 1;
    const v = value(midPoint);

    if (v === target) {
      return index(midPoint);
    }

    if (v < target) {
      arr = arr.slice(midPoint + 1);
    } else {
      arr = arr.slice(0, midPoint);
    }
  }

  return -1;
};

module.exports = search;
