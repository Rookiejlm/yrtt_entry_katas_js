// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
   var d = new Date();
   var h = d.getTime();
   var m = d.getMinutes();
   var s = d.getSeconds();
}

module.exports = {
    past
};
