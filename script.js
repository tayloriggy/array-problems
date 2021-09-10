/*
Write a JavaScript function that takes in two parameters, an array and a number (n), and return the first n elements of that array.
Example: If I pass in an array and the number 2, your function returns the first 2 elements in that arrays.

Steps:
1. Pass an array and the first n elements within that array as parameters in a function.
2. Utilize the slice method to return the first n elements within the passed array.
3. Implement the return keyword to show the first n elements of the passed array. 
*/



function getArrayValues (array, n) {
    return array.slice(0, n);
    
}