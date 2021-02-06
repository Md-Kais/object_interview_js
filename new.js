
class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Alam', 2000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Balam', 4500);
console.log(friendlyPerson);

// function diye class er kaj kora hoto es6 ashar age
// es6 er age o this keyword use hoito. 
function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Grand', 'Father', 1200);
console.log(oldPerson);


