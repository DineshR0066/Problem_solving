//LEETCODE 32: LONGEST VALID PARANTHESIS

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = 0;
    let right = 0;
    let maxCount = 0;
    for (let element of s) {
        if (element === '(') {
            left++;
        }
        if (element === ')') {
            right++;
        }
        if (right > left ) {
            right = 0;
            left = 0;
        }
        if (left === right){
            maxCount = Math.max(maxCount, left + right);
        }
    }

    left = 0;
    right = 0;

    for (let iter = s.length - 1; iter >= 0; iter-- ) {
        if(s[iter] == ")"){
            right++;
        }
        else{
            left++;
        }
        if (right === left) {
            maxCount = Math.max(maxCount, left + right);
        }
        if (left > right){
            left = 0;
            right = 0;
        }
    }

    return maxCount;
};