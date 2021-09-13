function removeDuplicates(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

/* If the index of current element in passed array is not yet in the empty newArray, 
then it is pushed into the newArray. The indexOf method automatically removes duplicate
values as it is looping through each element in the passed array.
If the item is present more than once, the indexOf method returns the position of the first occurence.
*/
