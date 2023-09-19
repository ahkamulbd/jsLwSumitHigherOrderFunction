const age = 23;

// if (age < 18) {
//     console.log('Not Adult');
// }
// else {
//     console.log('Adult');
// }

//console.log(age < 18 ? 'Not Adult' : 'Adult');

function findAuthorName(name) {
    return (name === 'Zonayed' ? `Author of 'Hate Kolome JavaScript'` : `Invalid Author`)
}
console.log(findAuthorName('Zonayed'));