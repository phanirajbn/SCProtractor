//ArrayDemo.js
var fs = require('fs');
var code = module.exports ={};
code.getArray = function(){
	var content = fs.readFileSync('Spec/EmpData.json');
	var data = JSON.parse(content.toString());	
	return data;
} 

code.findEmp = function(name){
	var data = fs.readFileSync('Spec/EmpData.json');
	var json = JSON.parse(data.toString());
	for (var i = 0; i < json.length; i++) {
		if(json[i].Empname == name)
			return json[i];
	}
	//return null;//for null testing.....
	throw new Error("Employee not found");//for null testing.....
}





