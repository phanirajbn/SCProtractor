function $(id){
	return document.getElementById(id);	
}

function onElementClick(id, callMe){
	$(id).addEventListener('click', callMe);
}