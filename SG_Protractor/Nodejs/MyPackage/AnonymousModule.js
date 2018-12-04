//AnonymousModule.js
//All anonymous modules are exported to external js files thro module.exports. It is a nodejs object that exports the components for usability. Usually anonymous modules are self invoking modules. 
//var emp = require('./employee');
//emp gets the contents of the return statement of the module....
module.exports = (function(){
	var repository = [];

	//create the Js functions here....
	function addNewEmployee(emp){
		repository.push(emp);
	}

	function deleteEmployee(id){
		var emp = repository.find(function(element){
			return element.empId == id;
		})
		var index = repository.indexOf(emp);
		repository.splice(index, 1);
	}
	function updateEmployee(emp) {
		for (var i = 0; i < repository.length; i++) {
			if(repository[i].empID == emp.empID){
				repository[i].empName = emp.empName;
				repository[i].empAddress = emp.empAddress;
				return;
			}
		}
		throw "Employee not found to update";
	}
	function getAllEmployees(){
		return repository;
	}
	//All these functions are private....
	return{
		addNew :addNewEmployee,
		deleteOld : deleteEmployee,
		update : updateEmployee,
		getAll : getAllEmployees
	}
})();



