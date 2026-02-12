//LEETCODE 162 : FIND PEAK ELEMENT
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let midpoint = Math.floor((left + right) / 2);
        if (nums[midpoint] > nums[midpoint + 1]) {
            right = midpoint;
        }
        else{
            left = midpoint + 1;
        }
    }
    return left;
};