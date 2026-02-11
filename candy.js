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