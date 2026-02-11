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