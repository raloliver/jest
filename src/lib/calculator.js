module.exports.sum = (num1, num2) => {
    // when you use + instead parseInt, the empty string was converted in a 0
    const Num1 = parseInt(num1, 10);
    const Num2 = +num2;
    //verify if number exists
    if (Number.isNaN(Num1) || Number.isNaN(Num2)) {
        throw new Error('Check input');
    }

    // add + before variable to convert in a number
    return +num1 + +num2;
}