// Source : https://leetcode.com/problems/product-of-array-except-self/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-16

/*****************************************************************************************************
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
******************************************************************************************************/

const productExceptSelf = require("./238_product_of_arrays_except_self");
const largeArray = require("./238_product_of_arrays_except_self.testcase");

describe("Test Cases", () => {
  it("Example 1", () => {
    const product = productExceptSelf([1, 2, 3, 4]);
    expect(product).toEqual([24, 12, 8, 6]);
  });

  it("Example 2", () => {
    const product = productExceptSelf([-1, 1, 0, -3, 3]);
    expect(product).toEqual([-0, 0, 9, -0, 0]);
  });

  // Timeout error example
  // it("Example 3", () => {
  //   const product = productExceptSelf(largeArray);
  //   expect(product).toEqual([]);
  // });
});
