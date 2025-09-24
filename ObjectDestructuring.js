const person = {    
    FirstName: 'Mark',
    LastName: 'Aropon',
    age: 23,
    city: 'Lagro',
    hobbies: ['Reading', 'Traveling', 'Gaming']
};

const { FirstName, LastName, age, city, hobbies } = person;
console.log(`Full Name: ${FirstName} ${LastName}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
console.log(`Hobbies: ${hobbies.join(', ')}`);

greet(person);
function greet({ FirstName, LastName }) {
    console.log(`Greetings! ${FirstName} ${LastName}!`);
}