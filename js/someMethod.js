const arrSomeMethod = ['hello', 1, 2, 3, 'Bangla', 5, 'World', 7, 8, 9];

const someMethodResult9 = arrSomeMethod.some(function (anElement) {
    return anElement === 9;
})
//console.log(someMethodResult9);

const someMethodResult10 = arrSomeMethod.some(function (anElement) {
    return anElement === 10;
})
//console.log(someMethodResult10);

const someMethodResult3 = arrSomeMethod.some(anElement => {
    //console.log(`Current Element: ${anElement}`);
    return anElement === 3;
});
//console.log(someMethodResult3);

/* ===== Some Method in Array of Object ====== */

const objectSome = [
    {
        name: 'Amima Hoque',
        age: 8,
        job: 'cricketer'
    },
    {
        name: 'Nusiaba Hoque',
        age: 10,
        job: 'cricketer'
    },
    {
        name: 'Nadima Hoque',
        age: 8,
        job: 'cricketer'
    }
]
const objectProperty = objectSome.some(element => element.age === 10);
console.log(objectProperty);