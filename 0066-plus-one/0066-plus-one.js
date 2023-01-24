/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = digits.join('');
    return String(BigInt(num)+BigInt(1)).split('')
};