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
var isSymmetric = function(root) {
    if(!root) return true;
    function recursion(leftNode,rightNode){
        if(!leftNode && rightNode || leftNode && !rightNode || leftNode && rightNode && leftNode.val !== rightNode.val)             return false;
        if(leftNode && rightNode)
            return recursion(leftNode.left, rightNode.right) && recursion(leftNode.right, rightNode.left)
        return true;
    }
    return recursion(root.left, root.right)
};