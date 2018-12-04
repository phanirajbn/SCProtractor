//employee.js is the entity class for our empRepository...

/*module.exports = (function(){
	var empId;
	var empName;
	var empAddress;
    //The return will be the value obtained when the module is acquired by the required statement that is called by the user...
	return{
		empID: empId,
		empName : empName,
		empAddress : empAddress
	}
});*/

//Use this for creating objects with constructors...
module.exports = employee;

function employee(id, name, address){
	this.empID = id;
	this.empName = name;
	this.empAddress = address; 
	/*this.display = function(){
		return "The name: " + this.empName + "\tThe Address: " + this.empAddress;
	}*/
}