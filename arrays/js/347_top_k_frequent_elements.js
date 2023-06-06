// Source : https://leetcode.com/problems/top-k-frequent-elements/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-05

/*****************************************************************************************************
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,2], k = 2
Output: [1,2]

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
******************************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const cnt = {};

  // Step 1:
  for (let i of nums) {
    cnt[i] = cnt[i] ? cnt[i] + 1 : 1;
  }

  // Step 2:
  const cntArray = Object.entries(cnt).map(([k, v]) => [k, v]);

  // Step 3:
  const sortedArray = cntArray.sort((a, b) => b[1] - a[1]);

  // Step 4:
  const kArray = sortedArray.slice(0, k).map((i) => +i[0]);

  return kArray;
};

module.exports = topKFrequent;
