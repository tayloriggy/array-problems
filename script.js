/*
Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.
Example: If I pass in an array and the number 2, your function returns the first 2 elements in that arrays.

Steps:
1. Create an array and assign it to a variable called "array".
2. Create a variable called "n" and assign it to 0 so it is a number.
3. Create a function and pass in the array and "n".
4. In the function, 
*/



function getArrayValues (array, n) {
    return array.slice(0, n);
    
}