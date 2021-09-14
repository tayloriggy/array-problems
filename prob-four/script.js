function removeDuplicates(array) {
    let arrayOfUniqueValues = [];
    for (let i = 0; i < array.length; i++) {
        if (!arrayOfUniqueValues.includes(array[i])) {
            arrayOfUniqueValues.push(array[i]);
        }
    }

    return arrayOfUniqueValues;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 8, 5, 78, 89, 78, 89, 89, 90, 90]));

/*
1. Define a function that takes in an array.
2. Create a new array that is used to track the unique values that don't have duplicates.
3. Loop through the array that is passed in.
4. Check if array of unique values already includes current element we are looping through.
5. If current element is already included in unique values array, move on to next element.
6. If current element is not included, then push it into unique values array.
7. Once loop is finished, return unique values array.

*/