let array = [1, 2, 3, 4, 5];

let total = array.reduce(function (sum, item) {
    return sum = sum + item;
}, 10);

console.log(total);

let totalES6 = array.reduce((sum, item) => sum += item, 20);

console.log(totalES6);