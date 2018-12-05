var exports = module.exports = {};

exports.mathCalc = function(){
	this.currVal =0;//should be 0....


	this.add = function(v1){
		debugger;
		this.currVal += v1;
		return this.currVal;
	}

	this.addMany = function(args){
		debugger;
		var sum = this.currVal;
		args.forEach(function(e, i){
			sum += e;
		})
		this.currVal = sum;
		return this.currVal;
	}
}