//app.js
var code = require('sg_employee_module');
code.addNew({"id":123, "name":"Apple","address":"Blr"})
code.addNew({"id":123, "name":"Apple","address":"Blr"})
code.addNew({"id":123, "name":"Apple","address":"Blr"})
code.addNew({"id":123, "name":"Apple","address":"Blr"})
var barcode = require('sg_employee_module');
//code.update({"id":123, "name":"Apple","address":"Blr"});
var data = code.getAll();
//console.log(data);

console.log(barcode.getAll());