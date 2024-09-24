"use strict";
// Homework. Solution - 1
// function calculatePetAges(humanYears: number): [number, number, number] {
//   let catYears: number;
//   let dogYears: number;
//   if (humanYears === 1) {
//     catYears = 15;
//     dogYears = 15;
//   } else if (humanYears === 2) {
//     catYears = 15 + 9;
//     dogYears = 15 + 9;
//   } else {
//     catYears = 15 + 9 + (humanYears - 2) * 4;
//     dogYears = 15 + 9 + (humanYears - 2) * 5;
//   }
//   return [humanYears, catYears, dogYears];
// }
// const humanYears = 3;
// console.log(calculatePetAges(humanYears));
// Homework. Solution - 2
// function getWeekday(num: number): string {
//   switch (num) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Saturday";
//     default:
//       return "Wrong, please enter a number between 1 and 7";
//   }
// }
// const input = prompt("Enter a number between 1 and 7:");
// const number = parseInt(input || "");
// console.log(getWeekday(number));
// Homework. Solution - 3
// function expressionsMatter(a: number, b: number, c: number): number {
//     const results = [
//       a + b + c,
//       a * b * c,
//       a + (b * c),
//       (a + b) * c,
//       a * (b + c),
//       (a * b) + c
//     ];
//     return Math.max(...results);
//   }
//   console.log(expressionsMatter(1, 2, 3));
//   console.log(expressionsMatter(1, 1, 1));
//   console.log(expressionsMatter(9, 1, 1));
// Homework. Solution - 4
// Homework. Solution - 5
// function doubleChar(str: string): string {
//   return str
//     .split("")
//     .map((char) => char + char)
//     .join("");
// }
// console.log(doubleChar("String"));
// console.log(doubleChar("Hello World"));
// console.log(doubleChar("1234!_ "));
// Homework. Solution - 6
// function dnaToRna(dna: string): string {
//   return dna.replace(/T/g, "U");
// }
// console.log(dnaToRna("GCAT"));
// console.log(dnaToRna("GCGTAC"));
// console.log(dnaToRna(""));
// Homework. Solution - 7
// function updateLight(current: string): string {
//   const validStates = ["green", "yellow", "red"];
//   if (!validStates.includes(current.toLowerCase())) {
//     return "Invalid traffic light color";
//   }
//   switch (current.toLowerCase()) {
//     case "green":
//       return "yellow";
//     case "yellow":
//       return "red";
//     case "red":
//       return "green";
//     default:
//       return "Unexpected state";
//   }
// }
// const currentLight =
//   prompt(
//     "Enter the current state of the traffic light (green, yellow, red):"
//   ) || "";
// const nextLight = updateLight(currentLight);
// console.log(`The light should change to: ${nextLight}`);
// Homework. Solution - 8
// function shortLongShort(a: string, b: string): string {
//   const short = a.length < b.length ? a : b;
//   const long = a.length < b.length ? b : a;
//   return short + long + short;
// }
// const firstString = prompt("Enter the first string:") || "";
// const secondString = prompt("Enter the second string:") || "";
// const result = shortLongShort(firstString, secondString);
// console.log(`The result is: "${result}"`);
