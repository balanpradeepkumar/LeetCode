// Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-07

/*****************************************************************************************************
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
******************************************************************************************************/

const twoSum2 = require("./167_two_sum_ii_input_array_sorted");

describe("Test Cases", () => {
  it("Example 1", () => {
    const indexes = twoSum2([2, 7, 11, 15], 9);
    expect(indexes).toEqual([1, 2]);
  });

  it("Example 2", () => {
    const indexes = twoSum2([2, 3, 4], 6);
    expect(indexes).toEqual([1, 3]);
  });

  it("Example 3", () => {
    const indexes = twoSum2([-1, 0], -1);
    expect(indexes).toEqual([1, 2]);
  });

  it("Example 4", () => {
    const numbers = [
      2, 2, 2, 3, 3, 7, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 12, 12, 12, 12, 13, 14,
      17, 17, 17, 18, 18, 20, 20, 20, 20, 20, 20, 21, 22, 22, 22, 22, 23, 23,
      24, 24, 27, 27, 27, 27, 28, 28, 28, 28, 33, 33, 33, 35, 38, 38, 38, 39,
      39, 39, 39, 39, 40, 40, 41, 43, 43, 44, 47, 47, 47, 47, 51, 51, 51, 52,
      53, 54, 54, 54, 56, 56, 56, 56, 56, 56, 57, 58, 59, 59, 59, 61, 62, 63,
      64, 64, 65, 66, 67, 67, 67, 70, 70, 70, 70, 70, 71, 71, 71, 73, 73, 73,
      73, 74, 75, 75, 75, 76, 76, 77, 78, 78, 79, 81, 81, 81, 82, 83, 83, 84,
      84, 84, 84, 84, 86, 88, 89, 89, 89, 89, 91, 91, 92, 92, 92, 93, 93, 94,
      95, 95, 96, 97, 99, 102, 102, 102, 104, 105, 107, 108, 108, 108, 109, 109,
      110, 110, 113, 115, 117, 117, 117, 118, 119, 121, 121, 122, 123, 124, 125,
      125, 125, 126, 126, 127, 127, 128, 129, 129, 130, 130, 131, 131, 131, 131,
      132, 132, 132, 132, 133, 133, 136, 137, 138, 138, 139, 141, 142, 144, 144,
      147, 147, 147, 147, 148, 148, 149, 150, 150, 150, 150, 150, 151, 151, 152,
      152, 152, 152, 153, 154, 155, 155, 156, 157, 158, 158, 158, 158, 159, 159,
      160, 160, 161, 162, 163, 163, 164, 164, 166, 167, 167, 168, 168, 169, 169,
      171, 172, 173, 173, 173, 174, 174, 175, 177, 177, 177, 178, 178, 178, 180,
      180, 182, 182, 184, 184, 184, 185, 185, 186, 187, 188, 189, 190, 190, 190,
      191, 191, 191, 191, 191, 192, 192, 193,
    ];
    const indexes = twoSum2(numbers, 28);
    expect(indexes).toEqual([6, 34]);
  });
});
