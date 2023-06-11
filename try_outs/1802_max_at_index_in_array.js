// Source : https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/
// Author : Pradeep Kumar Balan
// Date   : 2023-06-11

/*****************************************************************************************************
1802. Maximum Value at a Given Index in a Bounded Array

You are given three positive integers: n, index, and maxSum. You want to construct an array nums (0-indexed) that satisfies the following conditions:

- nums.length == n
- nums[i] is a positive integer where 0 <= i < n.
- abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
- The sum of all the elements of nums does not exceed maxSum.
- nums[index] is maximized.
- Return nums[index] of the constructed array.

Note that abs(x) equals x if x >= 0, and -x otherwise.

Example 1:
Input: n = 4, index = 2,  maxSum = 6
Output: 2
Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].

Example 2:
Input: n = 6, index = 1,  maxSum = 10
Output: 3
******************************************************************************************************/

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = (n, index, maxSum) => {
  let maxSumArray = [];

  let e1 = 0;
  let e2 = 1;
  let s = 0;
  while (s < maxSum) {
    const [arr, total] = combinations([e1, e2], n, maxSum);
    if (arr.length > 0) {
      maxSumArray = [...maxSumArray, ...arr];
      s = total;
    }
    e1 += 1;
    e2 += 1;
  }

  console.log(maxSumArray);

  const greatestArr = maxSumArray.map((a) => Math.max(...a));

  return Math.max(...greatestArr);
};

const combinations = (elements, size, maxSum) => {
  const combs = [];
  let total = 0;

  const e1 = elements[0];
  const e2 = elements[1];

  const sum = (arr) => arr.reduce((a, v) => a + v, 0);

  const calculate = (arr) => {
    const sumArray = sum(arr);
    if (sumArray === maxSum) {
      combs.push(arr);
      if (sumArray > total) {
        total = sumArray;
      }
    }
  };

  for (let i = size; i >= 0; i--) {
    if (i === 0) {
      calculate(new Array(size).fill(e2));
      continue;
    }

    const arr = new Array(i).fill(e1);
    const remaining = size - arr.length;
    if (remaining > 0) {
      calculate([...arr, ...new Array(remaining).fill(e2)]);
    } else {
      calculate(arr);
    }
  }

  return [combs, total];
};

const a = maxValue(4, 2, 6);
console.log(a); // correct

const b = maxValue(6, 1, 10);
console.log(b); // wrong
