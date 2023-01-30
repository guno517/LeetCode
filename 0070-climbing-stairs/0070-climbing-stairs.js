/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 4)
        return n;
    let a = 1;
    let b = 1;
    let next = 0;
    for(let i = 2; i <= n; i++){
        next = a + b;
        a = b;
        b = next;
    }
    return next;
};