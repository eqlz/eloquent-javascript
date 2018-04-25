/*

What is a list? A list takes the following structure:
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

*/

// Transform an array to a list
function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

// Transform a list to an array
function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]