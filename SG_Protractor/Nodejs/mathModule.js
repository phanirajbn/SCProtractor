/*addFunc = function(first, second){
	return first + second;
}*/
//Nodejs functions are usable thro Modules. Modules are self sustainable code that can be used in other JS files. If a JS file has to be used in HTML, we use script, but if a JS code has to be used in another JS file, U should export that code as module to the calling file. Calling file requires that file. uses a command called require and gets the reference of it...
//Functions that U create without any module is called as global modules.
//Functions that U create globally are not maintainable. So we create module Exports so that it can be created in a modular manner...
/*emp = function(id, name, address){
	return {
		empID : id,
		empName : name,
		empAddress : address
	}
}*/
module.exports.developedBy = 'Phaniraj';
module.exports.developedOn = new Date();
module.exports.cartApp = (function(){
	var cart = [];//array...
	function addToCart(item){
		cart.push(item)
	}

	function getAll(){
		return cart;
	}

	function remove(id){
		for(var i =0;i <cart.length;i++){
			if(cart[i].id == id){
				cart.splice(i, 1);
				return;
			}
		}
	}
	return{
		addItem : addToCart,
		deleteItem : remove,
		getAll : getAll	
	}	
})();

exports.mathCalc = (function(){
	addFunc = function(first, second){
		return first + second;
	}

	subFunc = (f, s)=> f - s;
	return{
		add : addFunc,
		subtract : subFunc
	}
}); 