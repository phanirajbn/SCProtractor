var elements = ["Apple","Mango","Orange"];
console.log(elements)
console.log(elements.length)//gets the no of elements...
//All arrays in JS are objects of Array...

var fruits = new Array();
console.log(fruits.length)
fruits.push("Apple");//adds the item to the botton of the Array.
fruits.push("Mango");
fruits.push("Orange");
fruits.push("Grapes");
fruits.push("Pineapple");
console.log(fruits.length);
for(var i = 0; i < fruits.length;i++){
	console.log(fruits[i]);
}
//value(inputs and selects) vs. innerHTML(for all containers where U should interpret the HTML tags within the string) vs. innerText(no parsing is required for the text).
//new in JS...

/*var ul = document.getElementById('lstFruits');
fruits.forEach( function(element, index) {
	ul.innerHTML += '<li>' + element.toUpperCase() +'</li>';
});*///Self iterating feature to access the elements of a collection in a forwardonly and readonly manner. It will always be within the bounds of the array. foreach is a method of the Array object. 

function getAllFruits(){
	return fruits;
}


