// Define cats array
var cats = ['Milo', 'Otis', 'Garfield'];
console.log(cats); 
// define destructive append cat array
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  // define destructively preprend cats array
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  // define destructively remove cat array from end of array
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
// define destructively remove cat array for first cat
function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  // appends a cat to the cats array and returns a new array, leaving the cats array unchanged
  function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name);
    return newArray;
  }
  // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
  function prependCat(name) {
    var newArray = [name].concat(cats);
    return newArray;
  }
  // removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
  function removeLastCat() {
    var newArray = cats.slice(0, -1);
    return newArray;
  }
  // removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
  function removeFirstCat() {
    var newArray = cats.slice(1);
    return newArray;
  }
  