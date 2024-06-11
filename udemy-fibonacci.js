
var n = 12;
var arr = [];
arr.push(0);
arr.push(1);
var a = 0;
var b = 1;
for (var i = 0; i < n - 2; i++) {
    c = a + b;
    a = b;
    b = c;
    arr.push(c);
}
console.log(arr);