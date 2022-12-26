/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = "";
    let position = 0;
    let min = 999;
    let char = "";
    let check = true;
    
    strs.map((str) => {
        if(str.length < min){
            min = str.length;
        }
    });
    
    for(let i = 0; i < min; i++){
        char = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(char === strs[j][i]){
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if(check){
            answer += char
        } else {
            break;
        }
    }
    return answer;
};