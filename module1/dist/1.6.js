"use strict";
// // Normal function
// //2 ta num plus kora
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// add(4, 3);
// const addArrow = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// // or
// const arrowAdd = (num1: number, num2: number): number => num1 + num2;
// const arrowAdd2 = (
//   firstName: string,
//   middleName: string,
//   lastName: string
// ): string => {
//   return `${firstName} + ${middleName}+ ${lastName}`;
// };
// const arrowAdd3 = (firstName: string, lastName: string): string => {
//   return firstName + lastName;
// };
// const a = (name: string, age: number): string => name + age;
// a("munna", 23);
// //Exercise problems
// /* Calculate the area of a rectangle: Write a function that takes in the length and width of a rectangle and returns its area. The formula for calculating the area of a rectangle is length * width. */
// const addArea = (length: number, width: number): number => length + width;
// addArea(23, 34);
// // Function with Parameters and Return Type:
// function add4(a: number, b: number): number {
//   return a + b;
// }
// const sum = add(3, 4);
// // console.log(sum);
// const add5 = (a: number, b: number): number => a + b;
// // console.log(add5(4, 4));
// // Function with Default Parameter:
// function greet(name: string = "Guest"): string {
//   return `Hello, ${name}`;
// }
// // console.log(greet());
// // console.log(greet("Mehrab"));
// const greetArrow = (name: string = "Guestt"): string => `Helloo ${name}`;
// console.log(greet());
// console.log(greet("Munna"));
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
// Method
const poorUser = {
    name: "munna",
    balance: 0,
    addBalance(balance) {
        console.log(this.balance + balance);
    },
};
const poorUser2 = {
    name: "Mehrab",
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    },
};
