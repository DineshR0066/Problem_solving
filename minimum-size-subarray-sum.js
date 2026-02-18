// LEETCODE 209: MINIMUM SIZE SUBARRAY SUM

//ALGORITHM : SLIDING WINDOW

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0;
    let left = 0;
    let minimumLength = Number.MAX_SAFE_INTEGER;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
            while (sum >= target){
                minimumLength = Math.min(minimumLength, right - left + 1);
                sum -= nums[left];
                left++;
            }
           
    }
    return minimumLength === Number.MAX_SAFE_INTEGER ? 0 : minimumLength  ;
};