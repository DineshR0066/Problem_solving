// LEETCODE 1 : TWO SUM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        }
        map.set(target - nums[i], i);
    }
};


// LEETCODE 12 : LONGEST COMMON PREFIX

/**
 * @param {string[]} strs
 * @return {string}
**/
var longestCommonPrefix = function(strs) {
    strs.sort()
    let string1 = strs[0];
    let string2 = strs[strs.length - 1];
    let result = "";
    for(let i =0 ; i<string1.length ; i++){
        if(string1[i] != string2[i]) {
            return result;
        }
        result = result + string1[i]
    }
    return result;
};