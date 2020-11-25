// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
   var now = new Date(),
   then = new Date(now.getDate(),0,0,0),
   diff = now.getTime() - then.getTime();
}

module.exports = {
    past
};
