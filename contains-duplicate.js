//LEETCODE 219 : CONTAINS DUPLICATE

//ALGORITHM : SLIDING WINDOW;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const duplicateMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (duplicateMap.has(nums[i]) && (i - duplicateMap.get(nums[i])) <= k) {
            return true;
        }
        duplicateMap.set(nums[i], i);
    }
    return false;
};