//root node, val left and right
/*


*/



function traversal(node){
    if(!node){
        return [];
    }
    
    let result = []
    return traversal(node.left) + [node.val] + traversal(node.right);

}