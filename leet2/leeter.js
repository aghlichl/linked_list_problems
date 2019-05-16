//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.



let isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let xString = x.toString();
    let temp = xString;
    xString = xString.split();
    xString = xString.reverse();
    xString = xString.join();
    return temp === xString


};