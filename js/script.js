const languages = ['JavaScript', 'Python', 'PHP', 'C'];

function mapSumit(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }
    return newArray;
}
const myArray = mapSumit(languages, function (language) {
    return language.length;
});

console.log(myArray);