// Source : https://leetcode.com/problems/longest-consecutive-sequence/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-14

/*****************************************************************************************************
128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
******************************************************************************************************/

const longestConsecutiveSequence = require("./128_longest_consecutive_sequence");

describe("Test Cases", () => {
  it("Example 1", () => {
    const sequence = longestConsecutiveSequence([100, 4, 200, 1, 3, 2]);
    expect(sequence).toBe(4);
  });

  it("Example 2", () => {
    const sequence = longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
    expect(sequence).toBe(9);
  });
});
