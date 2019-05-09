/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = []
    while (x > 10) {
        let remainder = x % 10;
        console.log(remainder)
        result.push(remainder);
        x = (x - remainder) / 10;
    }
    result.push(x);

    return result.join('');
};