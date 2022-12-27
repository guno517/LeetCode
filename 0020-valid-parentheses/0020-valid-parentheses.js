/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const charArr = [ '(', ')', '{', '}', '[', ']'];
    const answer = [];
    if(s.length % 2 !== 0) return false
    for(let i = 0; i < s.length; i++){
        if(charArr.indexOf(s[0]) % 2 !== 0) return false
        if(charArr.indexOf(s[i]) % 2 === 0){
            answer.push(s[i]);
            continue;
        }
        if(charArr.indexOf(s[i]) - 1 === charArr.indexOf(answer[answer.length - 1]) ){
            answer.pop();
        } else {
            return false
        }
    }
    return answer.length === 0 ? true : false
};