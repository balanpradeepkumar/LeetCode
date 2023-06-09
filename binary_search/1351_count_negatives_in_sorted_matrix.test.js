// Source : https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-08

/*****************************************************************************************************
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
******************************************************************************************************/

const countNegatives = require("./1351_count_negatives_in_sorted_matrix");

describe("Test Cases", () => {
  it("Example 1", () => {
    const negatives = countNegatives([
      [4, 3, 2, -1],
      [3, 2, 1, -1],
      [1, 1, -1, -2],
      [-1, -1, -2, -3],
    ]);
    expect(negatives).toBe(8);
  });

  it("Example 2", () => {
    const negatives = countNegatives([
      [3, 2],
      [1, 0],
    ]);
    expect(negatives).toBe(0);
  });
});
