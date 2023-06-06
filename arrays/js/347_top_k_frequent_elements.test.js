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

const topKFrequent = require("./347_top_k_frequent_elements.js");

describe("Test Cases", () => {
  it("Example 1", () => {
    const frequent = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    expect(frequent).toEqual([1, 2]);
  });

  it("Example 2", () => {
    const frequent = topKFrequent([1], 1);
    expect(frequent).toEqual([1]);
  });

  it("Example 3", () => {
    const frequent = topKFrequent([1, 2], 2);
    expect(frequent).toEqual([1, 2]);
  });
});
