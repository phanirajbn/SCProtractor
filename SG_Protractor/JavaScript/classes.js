var operation = function(first, second, operand, result){
	this.first = first;
	this.second = second;
	this.operand = operand;
	this.result = result;
}

function $(id){
	return document.getElementById(id);	
}

function onElementClick(id, callMe){
	$(id).addEventListener('click', callMe);
}