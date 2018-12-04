/*console.log("Test123");
require("./mathModule.js");


console.log(addFunc(123, 234))

var data = emp(123, 'Phaniraj','Bangalore');
console.log(data);*/
var wholeModule = require('./mathModule');
/*var theApp = wholeModule.cartApp; 
theApp.addItem({"id": 111, "name":"Samsung GURU", "price":1000})
theApp.addItem({"id": 112, "name":"MI NOTE3", "price":10000})
theApp.addItem({"id": 113, "name":"Samsung NOte4", "price":2000})
theApp.addItem({"id": 114, "name":"Oppo A1", "price":10000});
*/
/*var data = theApp.getAll();
console.log(data);*/
console.log(wholeModule);
var calc = wholeModule.mathCalc();//
//console.log(calc)
console.log(calc.add(5,4));