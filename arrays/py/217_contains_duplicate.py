# Source : https://leetcode.com/problems/contains-duplicate/
# Author : Pradeep Kumar Balan
# Date   : 2023-06-04

"""
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
"""

from typing import List


# Solution 1
# Inference: The solution is not performant.
def containsDuplicate1(nums: List[int]) -> bool:
    for i in nums:
        if nums.count(i) > 1:
            return True
    return False


assert containsDuplicate1([1, 2, 3, 1]) == True
assert containsDuplicate1([1, 2, 3, 4]) == False
assert containsDuplicate1([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) == True


# Solution 2
def containsDuplicate2(nums: List[int]) -> bool:
    cnt = {}
    for i in nums:
        if cnt.get(i):
            return True
        else:
            cnt[i] = 1
    return False


assert containsDuplicate2([1, 2, 3, 1]) == True
assert containsDuplicate2([1, 2, 3, 4]) == False
assert containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) == True
