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

// LEETCODE 274 : H-INDEX

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => b - a)
    let value = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i+1 ){
            value++;
        }
    }
    return value;

};

// LEETCODE 135 :CANDY

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let children = ratings.length;
    const candies = [];
    candies.length = children;
    candies.fill(1);
    for (let i = 1; i < children ; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    let count = 0;
    for (let i = children - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) {
            candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1);
        }
    }
    for (let element of candies) {
        count += element;
    }
    return count;
};

// LEETCODE 128 : LONGEST CONSECUTIVE SEQUENCE

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if ( !nums.length ){
        return 0;
    }
    let continous = 1;
    let longContinous = 1;
    nums.sort((a, b) => a - b );
    console.log(nums);
    for (let iter = 0; iter < nums.length - 1; iter++) {
        if (nums[iter] + 1 === nums[iter + 1]) {
            continous += 1;
            
        }
        else if ( nums[iter] === nums[iter + 1]) {
            continue;
        }
        else{
            continous = 1;
        }
        longContinous = Math.max(longContinous, continous ) ;
    }
    return longContinous;
};
