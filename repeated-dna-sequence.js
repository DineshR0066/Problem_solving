// LEETCODE 187: REPEATED DNA SEQUENCE

// ALGORITHM - SLIDING WINDOW

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {

    let sequenceMap = new Map();
    const result = [];
    for (let i = 0; i <= s.length - 10; i++) {
        let sequence = s.slice(i, i + 10);
        if (sequenceMap.has(sequence)) {
            if (!result.includes(sequence))
                result.push(sequence);
        }
        sequenceMap.set(sequence, 1);
    }
    return result;
};