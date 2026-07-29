function sum() {
    var sum = 0;
    for (var i=0; i<arguments.length; i++)
    sum += parseInt(arguments[i]);
    return sum;
}
console.log(sum(1,2,3))