'use strict';

/*
    Description: Constructors with Prototypes
*/
function Person( name, age, salary ){
    
    this.name = name;

    this.age = age;

    this.salary = salary;
}

Person.prototype.toString = function () {

    return `Name: ${this.name} | Age: ${this.age} | Salary: ${this.salary}`;
}

const person1 = new Person('Shiva Sai', 21, 1234.56);
console.log(person1);

