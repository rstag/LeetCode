/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    
    let p1=[],p2=[]
    p1=printInorder(root1,[])||[]
    p2=printInorder(root2,[])||[]
    let t=p1.concat(p2)
    return t.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

};
    
var printInorder= function(node,arr) {
        if (node == null)
            return;
 
        /* first recur on left child */
        printInorder(node.left,arr);
 
        /* then print the data of node */
        // document.write(node.key + " ");
    arr.push(node.val)
 
        /* now recur on right child */
        printInorder(node.right,arr);
    return arr;
}
