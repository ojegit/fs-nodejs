//console.log('Hello From Node.js');

//using person from person.js

//const person = require('./person');
//console.log(person.name);

const Person = require('./person');
const person1 = new Person('John Doe', 30);
person1.greeting();

