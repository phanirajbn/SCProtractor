var list = require('./AnonymousModule');//repository
var emp = require('./employee');//entities

var e1 = new emp(123, 'Phaniraj','Bangalore');
var e2 = new emp(124, 'Banu Prakash','Bangalore');
var e3 = new emp(125, 'Gopal','Mysore');
var e4 = new emp(126, 'Easwaran','Chennai');

list.addNew(e1);
list.addNew(e2);
list.addNew(e3);
list.addNew(e4);

var data = list.getAll();
data.forEach((e, i)=>console.log(e.empName));