const person = {    
    FirstName: 'Mark',
    LastName: 'Aropon',
    age: 23,
    city: 'Lagro',
    hobbies: ['Reading', 'Traveling', 'Gaming']
};

const { FirstName, LastName, age, city, hobbies } = person;
let anime = [...hobbies , "anime"];//spread operator
const formInput = {
    firstName: FirstName,
    lastName: LastName,
    hobbies,
    city: city,
};

console.log(formInput);

greet(person);
function greet({ FirstName, LastName }) {
    console.log(`Greetings! ${FirstName} ${LastName}!`);
    console.log(anime);
}