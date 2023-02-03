/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let result = true;
    function recursion(node, min, max){
        if(node.val > min && node.val < max){
            if(node.left){
                recursion(node.left, min, node.val)
            }
            if(node.right){
                recursion(node.right, node.val, max)
            }
        } else {
            result = false;
        }
    }
    recursion(root, -Infinity, Infinity);
    return result;
};