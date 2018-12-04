//All UR Nodejs code will be in 2 parts: 1st part is the server part that provides the services in the form of objects and methods. 2nd part is the client part which consumes the services provided by the 1st part. 
//JS code is exposed to the clients thro modules. modules are independent units with little or less dependencies on other external components that will perform certain operations related to ur project/domain. 
//modules are exported by the servers and clients use require method to load those modules into their JS files. 
//functions can be created globally, anonymous and named way.
//Functions are to be consumed in the client js file, in this case the current file..
require('./globalExample')//./ tells the node environment that we are using a user defined module...
//As the methods are declared within any module defn, it is accessible directly after the require statement. 
/*var emp = require('./employee')();
emp.empID = 123;
emp.empName = 'Phaniraj';
emp.empAddress ="bangalore";
//var e1 = new emp(123, 'Phaniraj','Bangalore');
console.log(emp.empName);

var emp2 = require('./employee')();//2nd employee...
emp2.empID = 123;
emp2.empName = 'Phaniraj';
emp2.empAddress ="bangalore";
console.log(JSON.stringify(emp2));*/
/*
console.log(addMethod(123, 234));//invoking the methods.....

console.log(sqrtMethod(25));
*/
//To test run this code, U should open the command prompt and run the command: node filename.js

/////////////Constructors Demo////////////////////
var emp = require('./employee');//get the prototype..
var e1 = new emp(123,'Phaniraj','Bangalore');
var e2 = new emp(124,'JoyDip','Kolkata');
var e3 = new emp(125,'Banu Prakash','Hyd');

console.log(e1.empName)
console.log(e2.empName)
console.log(e3.empName)
