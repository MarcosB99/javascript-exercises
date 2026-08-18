const fibonacci = function (n) {
    const target = Number(n);
    if (target < 0) {
        return "OOPS";
    }

    if (target === 0) {
        return 0;
    }

    const fibArr = [1, 1];

    for (let i = 2; i < target; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }

    return fibArr[target - 1];
};

// Do not edit below this line
module.exports = fibonacci;
