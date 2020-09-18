//-------------- .Chunk ------------/
var chunk = function (arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
        return arr.slice(i * size, i * size + size);
    });
};

var chunk_op = JSON.stringify(chunk([21, 22, 23, 24, 25, 26, 27, 28], 4));
console.log("Chunk = " +chunk_op);
document.write("Chunk = " + chunk_op + "<br>");

//------------- .sum -------------/
var sum = function (arr) { return arr.reduce(function (total, item) { return total += item; }, 0); };
var sum_op =(sum([21, 22, 23, 24, 25]));
console.log("Sum = " +sum_op);
document.write("Sum = " +sum_op + "<br>");

//-------------  find -----------/
var find = function (arr) { return arr.filter(function (i) { return i % 4 == 0; }); };
var find_op = (find([21, 22, 23, 24, 25]));
console.log("Find = " +find_op);
document.write("Find = " +find_op + "<br>");

//-------------  reduce -----------/
var reduce = function (arr) { return arr.reduce(function (acc, item) { return acc += item; }, 0); };
var reduce_op = (reduce([21, 22, 23, 24, 25]));
console.log("Reduce = " +reduce_op);
document.write("Reduce = " +reduce_op + "<br>");

//-------------  filter -----------/
var filter = function (arr) { return arr.filter(function (i) { return i % 2 == 0; }); };
var filter_op = JSON.stringify(filter([21, 22, 23, 24, 25]));
console.log("Filter = " +filter_op);
document.write("Filter = " +filter_op + "<br>");