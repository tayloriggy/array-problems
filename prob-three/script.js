/*
Steps:
1. Create an array that has all integers.
2. Create a new array that will sort the integers in numerical order.
3. Use the array sorts method to do this.
4. Return the new sorted array. 
*/


let myArray = [-3,8,7,6,5,-4,3,2,1];
let sortedArray = myArray.sort(function(a, b){return a-b});
console.log(sortedArray);
