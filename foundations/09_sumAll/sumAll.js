const sumAll = function (a, b) {
    let acc = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }

    let min = Math.min(a, b);
    let max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
        acc += i;
    }

    return acc;
};

// Do not edit below this line
module.exports = sumAll;
