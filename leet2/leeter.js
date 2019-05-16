//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.



function traversal(node){
    if(!node){
        return [];
    }
    
    let result = []
    return traversal(node.left) + [node.val] + traversal(node.right);

}