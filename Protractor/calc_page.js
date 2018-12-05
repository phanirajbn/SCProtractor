var calc_page = module.exports ={};
calc_page = function(){
	this.enterFirstValue = function(value){
		element(by.model('first')).sendKeys(value);
	}
	this.enterSecondValue = function(value){
		element(by.model('second')).sendKeys(value);
	}

	this.selectOption = function(value){
		element(by.model('operand.option')).sendKeys(value)
	}

	this.clickForResult = function(){
		element(by.buttonText('=')).click();
	}

	this.getResult = function(){
		return parseInt(element(by.binding('result'))).getText();
	}
}