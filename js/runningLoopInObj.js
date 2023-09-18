let object = {
    Bangladesh: 'Dhaka',
    India: 'New Delhi',
    Myanmar: 'Nepido',
    Pakistan: 'Islamabad',
    Nepal: 'Katmondu',
    Bhutan: 'Thimpu'
}

for (let name in object) {
    //console.log(`Country: ${name}, Capital: ${object[name]}`);
}

const countries = Object.keys(object);
// console.log(countries);
// console.log(countries[3]);

const capitals = Object.values(object);
// console.log(capitals);
// console.log(capitals[2]);

//countries.map(country => console.log(country));

//Object.keys(object).map(country => console.log(country));
Object.keys(object).map(country => console.log(`Capital of ${country} is ${object[country]}`));
