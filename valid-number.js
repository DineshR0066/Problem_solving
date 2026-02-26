//LEETCODE 65 : VALID NUMBER

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    let stringNumber = s.trim();
    let numberSeen = false;
    let eSeen = false;
    let pointSeen = false;
    let numberAfterE = true;

    for (let i = 0; i < stringNumber.length; i++) {
        if (stringNumber[i] >= '0' && stringNumber[i] <= '9') {
            numberSeen = true;
            numberAfterE = true;
        }

        else if (stringNumber[i] == '.') {
            if(pointSeen || eSeen) {
                return false;
            }
            pointSeen = true;
        }
        
        else if (stringNumber[i] == 'e' || stringNumber[i] == 'E') {
            if(eSeen || !numberSeen) {
                return false;
            }
            numberAfterE = false;
            eSeen = true;
        }

        else if (stringNumber[i] == '+' || stringNumber[i] == '-') {
            if(i != 0 && (stringNumber[i - 1] != 'e' && stringNumber[i - 1] != 'E')) {
                return false;
            }
        }

        else {
            return false;
        }
    }

    return numberSeen && numberAfterE
};