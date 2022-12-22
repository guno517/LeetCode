/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let test = x.toString().split("").reverse().join("")
    if(x === Number(test)){
        return true;
    } else {
        return false;
    }
};