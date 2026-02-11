//LEETCODE 53 : MAXIMUM SUBARRAY

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray (nums) {
    let currentSum = 0;
    let maximumSum = nums[0];
    for (let element of nums) {
        currentSum = currentSum + element;
        if (currentSum > maximumSum) {
            maximumSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maximumSum;
};