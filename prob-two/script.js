/*
Steps:
1. Given a specific array, write a program that joins all elements into a string.
2. Create a new array of strings and set it equal to the original array.
3. Call the join method on the array myColor to make all elements into a string.
4. Return the new array of strings. 

*/

let myColor=["Red", "Green", "White", "Black"];
let colorString = myColor.join(", ");
console.log(colorString);