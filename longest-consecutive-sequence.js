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
