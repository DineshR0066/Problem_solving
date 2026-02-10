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

// LEETCODE 26 : REMOVE DUPLICATE FROM SORTED ARRAY

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i =0 
    for( let j = 0 ; j<nums.length ;j++ ){
        if(nums[ i] != nums[j ]){
            nums[++i] = nums [j]
        }
    }
    return i + 1;
};

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

//LEETCODE 11 : CONTAINER WITH MOST WATER

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let container = 0;
    let maximumContainer = 0;
    let length = height.length;
    let i = 0;
    let j = length-1;
    while (i < j) {
        container = Math.min(height[i], height[j]) * (j - i);
        if (height[i] > height[j]) {
            j--;
        }
        else {
            i++;
        }
        if(maximumContainer < container){
            maximumContainer = container;
        }
    }

    return maximumContainer;

};
