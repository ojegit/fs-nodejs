/*
const person = {
    name: 'John Doe',
    age: 30
};
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I and ${this.age}`);
    }
}
//module.exports = person;
module.exports = Person; //export class