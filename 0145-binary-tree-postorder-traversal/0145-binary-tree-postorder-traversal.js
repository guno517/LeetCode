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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    
    function recursion(node){
        if(!node) return;
        if(node.left){
            recursion(node.left)
        }
        if(node.right){
            recursion(node.right)
        }
        result.push(node.val)
    }
    recursion(root);
    return result;
};