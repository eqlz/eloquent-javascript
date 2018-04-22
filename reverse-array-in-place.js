// Modify the array given as argument in order to reverse its elements
function revserseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

/*
    The idea behind this function:
    To reverse all elements in an array, reverse the first element and
    the last element, then reverse the second element and the second to last element,
    then third and the third to the last, and so on, until you reach the element in
    the middle of the array.

    To implement this idea, the function needs to do two things:
    1. Find out the index in the middle of the input array, which is accomplished by:
    Math.floor(array.length / 2)

    2. Loop through the first half of all elements, and reverse their positions with its
    counterparts, accomplished by:
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        // Save element into a variable called "old"
        var old = array[i];

        // Assign counterpart element to original element
        array[i] = array[array.length - 1 - i];
        
        // Assign orginal element to counterpart element
        array[array.length - 1 - i] = old;
    }
*/