//callBackExample.js
/*console.log("1");
console.log("2");
console.log("3");
console.log("4");//Synchronous coding where each line executes after the previous line executes successfully...
*/
console.log("1");
//setTimeout is a delay based function that will invoke an operation after the specific interval of time mentioned as 2nd arg in the form of milliseconds...
//built in function in js for performing delay based code....
/*setTimeout(()=>{
	console.log("2");
}, 3000);
console.log("3");
console.log("4");//1,3,4,2*/

//Promise is an object whose value is not known when it is created but allows to be notified later once the value is obtained/generated. In this case, the object also provides an option of the handling a failure of the value generation does not happen....
function addFunc(v1, v2){
	return v1 + v2 - 123;
}

const waiter = new Promise((resolver, reject)=>{
	console.log("Doing some big job...");
	/*setTimeout(()=>{
		console.log("Please wait....");
	}, 3000);*/
	var answer = addFunc(123, 234);
	if(answer == (123+234)){
		resolver(answer);
	}else {
		reject('Adding is not done');
	}
});

waiter.then((res)=>{
	console.log("The ansser is : " + res);
}).catch(err=>{
	console.log(err);
})

