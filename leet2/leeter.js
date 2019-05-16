//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.



var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    x = x.toString();
    let xRay = x.split('');
    for (let i = 0; i < xRay.length; i++) {
        if (xRay[i] !== xRay[(xRay.length - 1 - i)]) {
            return false
        }
    }
    return true
};