// モジュール呼び出し
var myModule = require('./lib/myModule');

var result_add = myModule.math.add(1, 2);
var result_hello = myModule.print.sayHello();

console.log(result_add);
console.log(result_hello);
