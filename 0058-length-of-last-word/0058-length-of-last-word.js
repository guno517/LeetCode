/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(' ').filter(word => word !== '');
    const lastWord = words[words.length - 1];
    return lastWord.length;
};