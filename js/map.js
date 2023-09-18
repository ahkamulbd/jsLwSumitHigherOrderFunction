//console.dir(Array());

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArray = [];
for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * array[i]);
}
console.log(newArray);

let newMapArray = array.map(element => element * 2);

console.log(newMapArray);