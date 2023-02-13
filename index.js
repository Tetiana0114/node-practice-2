// let foo: number;
// foo = 34;
// foo = 'str';
// console.log(foo);
// class Person implements IPerson, ITutor {
//     public firstName: string;
//     public lastName: string;
//     public age: number;
//     public isTutor: boolean;
//     public course: string;
//     private salary: number;
//     constructor(firstName: string, lastName: string, age: number, isTutor: boolean,
//     course: string, salary: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.isTutor = isTutor;
//         this.course = course;
//         this.salary = salary;
//     }
//     getSalary() {
//         return this.salary;
//     }
// }
// const person = new Person('Noah', 'Lewis', 27, false, 'node.js', 99999);
// console.log(person.firstName);
// console.log(person.salary);
// скорочений запис
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, isTutor, course, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isTutor = isTutor;
        this.course = course;
        this.salary = salary;
    }
    return Person;
}());
var person = new Person('Noah', 'Lewis', 27, false, 'node.js', 99999);
console.log(person);
