// let foo: number;
// foo = 34;
// foo = 'str';
// console.log(foo);

// застарілий синтаксис
// let arr: Array<string>;
// let arr: Array<object>; масив об'єктів
// let arr: Array<number>; масив чисел
// arr = ['str', 'str1', 2, true];

// let arr: string[];
// let arr1: number[];
// let arr: object[];
// arr = ['str', 3, 7, 'str2'];
// arr1 = [4, 6, 'str1', 'str2'];

// tuple (масив, що має декілька типів)
// let arr: [string, number];
// arr = ['winter', 23];
// arr = [44, 46];

// масив в масиві
// let arr2: [string, number][];
// arr2 = [['winter', 23], ['str', 45]];

// let obj: { login: string };
// obj = {login: 'name'};
// obj = { login: 23 };

// union type
// let obj: { id: string | number, login: string };
// obj = { id: 23, login: 'name' };
// obj = {id: 'str', login: 'name'};
// obj = { id: 'name', login: 22 };
// obj = {id: true, login: 'name'};

// опціональний тип(поле не обов`язкове)
// let obj: { id: string | number, login: string, birthDate?: Date };
// obj = { id: 23, login: 'name' };
// obj = { id: 23, login: 'name', birthDate: new Date() };

// type alias
// type TStringOrNumber = string | number;
// let foo: TStringOrNumber;
// let bar: string | number; ідентичний код до попереднього

// literal types
// type TSubscriptions = 'starter' | 'pro' | 'business';
// let subscriptions: TSubscriptions = 'business';

// type inference
// let bar = 'str';
// bar = 2; автоматично буде помилка
// bar = 'str';

// інтерфейси
// interface IPerson {
//     firstName: string;
//     lastName: string;
//     age?: number; необов'язкове поле
// }

// interface IPerson {
//     birthDate?: Date; розширити об'єкт
// }
// const obj: IPerson = {
//     firstName: 'Noah',
//     lastName: 'Lewis',
//     age: 27,
// }

// функції
// function customConcat(arg1: string, arg2: string): void {
//     return;
// }
// function customConcat1(arg1: string, arg2: string) {
//     return arg1 + arg2;
// }

// type narrowing
// type TStringOrNumber = string | number;
// function customConcat3(arg1: TStringOrNumber, arg2?: TStringOrNumber): string {
//     if (typeof arg1 === 'number' || typeof arg2 === 'number') {
//         return String(arg1) + String(arg2);
//     }
//     return arg1 + arg2;
// }

// класи
// interface IPerson {
//     firstName: string;
//     lastName: string;
//     age: number;
    // getFullName: (arg1: string, arg2?: number) => string;
    // getFullName?: () => void;
// }
// interface ITutor {
//     isTutor: boolean;
//     course: string;
// }

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
// class Person implements IPerson, ITutor {
//     constructor(public firstName: string, public lastName: string, public age: number, public isTutor: boolean,
//         public course: string, private salary: number) { }
// }
// const person = new Person('Noah', 'Lewis', 27, false, 'node.js', 99999);
// console.log(person);

// methods
// private - доступний в середині класу
// protected - доступний в середині класу та дочірнього класу

// class Person implements IPerson, ITutor {
//     constructor(public firstName: string,
//         public lastName: string,
//         public age: number,
//         public isTutor: boolean,
//         public course: string,
//         private salary: number,
//     ) {}
    
//     protected getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     another() {
//         this.getFullName();
//     }
// }

// class Programmer extends Person {
//     constructor(
//         firstName: string,
//         lastName: string,
//         age: number,
//         isTutor: boolean,
//         course: string,
//         salary: number
//     ) {
//         super(
//             firstName,
//             lastName,
//             age,
//             isTutor,
//             course,
//             salary
//         );
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.getFullName}`)
//     }
// }

// const person = new Person('Noah', 'Lewis', 27, false, 'node.js', 99999);
// console.log(person);
// // person.getFullName(); якщо викликати метод зовні, буде помилка

// const programmer = new Programmer('Noah', 'Lewis', 27, false, 'node.js', 99999);



// generic
// function getValue(obj: object, key: string) {
//     return obj[key];
// }
// const result = getValue({ field1: 22, field2: 34 }, 'ffff');

const obj = {
    firstName: 'Noah',
    lastName: 'Lewis',
}
interface IPerson {
    firstName: string,
    lastName: string,
}
function getValue<T>(
    obj: T,
    key: keyof T
) {
    return obj[key];
}
const result = getValue<IPerson>(
    obj,
    "firstName");