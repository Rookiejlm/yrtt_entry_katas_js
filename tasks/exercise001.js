// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");
var arr = [1, 4, 4, 5, 6, 1, 8];

// iterate over elements and filter
var res = arr.filter(function(v) {
  // get the count and filter based on the count
  return arr.filter(function(v1) {
    // compare with current element
    return v1 == v;
    // check length
  }).length == 1;
});
    
 // Getting sum of numbers
    var sum = res.reduce(function(a, b){
        return a + b;
    }, 0);

module.exports = {
    singles
};
