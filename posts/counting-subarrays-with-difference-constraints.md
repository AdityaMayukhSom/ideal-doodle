---
title: "Counting Subarrays with Difference Constraints"
subtitle: "Counting the number of subarrays in an array that satisfy a specific difference constraint. Given an array `nums` consisting of `n` integers and a given integer `k`, we are required to count the number of subarrays where the difference between the maximum and minimum elements is less than `k`."
date: "2023-07-26"
author: "Aditya Mayukh Som"
---

In this blog post, we will explore a problem that involves counting the number of subarrays in an array that satisfy a specific difference constraint. Given an array `nums` consisting of `n` integers and a given integer `k`, we are required to count the number of subarrays where the difference between the maximum and minimum elements is less than `k`. We will provide an in-depth explanation of the problem, present an efficient solution, and illustrate it with a C++ implementation.

### Problem Statement

Given an array `nums` of size `n` and an integer `k`, we need to find the count of subarrays where the difference between the maximum and minimum elements of the subarray is less than `k`.

### Example

Let's consider an example to understand the problem better:

```shell
Input: nums = [4, 2, 6, 8, 5], k = 4
Output: 9

Explanation:
The subarrays that satisfy the condition (max - min < k) are:
[4], [2], [6], [5], [8], [4, 2], [6, 8], [8, 5], [6, 8, 5]
```

### Approach

To solve this problem efficiently, we first have to understand that any subarray can be described by the index of the starting position and the index of the ending position. Hence we can use a two-pointer technique. We will maintain two pointers, `i` and `j`, to traverse the array. We will also maintain the minimum and maximum elements (`mini` and `maxi`) of the current subarray formed by indexes `i` and `j`. As we move `j` to the right, we update the minimum and maximum values accordingly. If at some index we find that the differece exceeds `k`, that means adding any more element to that subarray will not reduce the differece, as it can only increase `maxi` and decrease `mini` but not the other way, hence we break from the loop and start over with `i+1`th index. 

### Algorithm

1. Initialize a variable `ans` to `0` to store the count of subarrays that satisfy the condition.
2. Initialize two pointers, `i` and `j`, to the beginning of the array.
3. Initialize variables `mini` and `maxi` to `INT32_MAX` and `INT32_MIN`, respectively.
4. `i` stores the index of the starting element of the subarray whereas `j` will store the index of the ending element of the subarray.
5. Loop through the array using the `j` pointer while keeping `i` as constant and update the values of `mini` and `maxi` as we encounter new elements.
6. If the difference between `maxi` and `mini` is less than `k`, increment `ans` by one, which actually means that we are counting the subarray defined by indexes `i` and `j`.
7. If the difference between `maxi` and `mini` exceeds or equals `k`, move `i` by `1`. We start the with the beginning of the next subarray.
8. Repeat steps `5` to `7` until the `i` pointer reaches the end of the array.
9. Return the final value of `ans`.

### C++ Implementation

```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  static int count(vector<int> &nums, int n, int k) {
    int ans = 0;
    for (int i = 0; i < n; i++) {
      int mini = INT32_MAX, maxi = INT32_MIN;
      for (int j = i; j < n; j++) {
        if (nums[j] < mini) {
          mini = nums[j];
        }
        if (nums[j] > maxi) {
          maxi = nums[j];
        }
        if ((maxi - mini) < k) {
          ans += (j - i + 1);
        } else {
          break;
        }
      }
    }
    return ans;
  }
};

int main() {
  int n, k;
  ifstream file;
  // the file from which we will take input is named as input.txt
  file.open("input.txt");
  file >> n;
  file >> k;
  vector<int> vect(n);
  for (int i = 0; i < n; i++) {
    file >> vect[i];
  }
  int ans = Solution::count(vect, n, k);
  cout << ans << endl;
  return 0;
}

```

### Conclusion

In this blog post, we explored the problem of counting subarrays that satisfy a specific difference constraint. We discussed the problem statement, explained the approach and algorithm to solve it, and provided a C++ implementation. This problem can be efficiently solved using a two-pointer technique, and the provided solution provides an optimized way to obtain the desired count of subarrays.

Remember that the solution provided assumes the input adheres to the problem constraints. Always consider edge cases and handle input validations as needed when implementing solutions in real-world scenarios.