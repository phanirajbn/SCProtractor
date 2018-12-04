//nodejs contain certain required for developing various kinds of apps: web sites, file io operations, string manipulations, os related activities and many more. 
//use these modules to create apps that can perform IO operations in JS....
var fs = require('fs');
var employee = require('./employee');
var util = require('util');
var employees = [];

employees.push(new employee(123, 'Phaniraj','Bangalore'));
employees.push(new employee(124, 'Gopal','Bangalore'));
employees.push(new employee(125, 'Sunder','Pune'));
var allData = "Complete.txt";
employees.forEach((e, i)=>{
	var data = util.format("%s, %s, %s", e.empID, e.empName, e.empAddress);
	fs.appendFileSync(allData, data);
	console.log("File by name Content" + i +".txt has been written");
})







