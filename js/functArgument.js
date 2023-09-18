/* ======= Passing function as an argument ======== */

function callMyName(name, callback) {
    let myAge = 20;
    callback(myAge);
    console.log(`Is it interesting? Yes, it is Mr. ${name}`);
}

function hello(age) {
    console.log(`I am passed through argument and my age is : ${age}`);
}

callMyName('Ragin Gorubazari', hello);