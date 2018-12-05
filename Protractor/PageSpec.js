var page = require('./calc_page');

describe('Page Object creation', function() {
	beforeEach(()=> browser.get('http://localhost:4200'));

	it('should add numbers', ()=>{
		page.enterFirstValue(123);
		page.enterSecondValue(234);
		page.selectOption('+');
		page.clickForResult();
		expect(page.getResult()).toBe((123 + 234));
		browser.sleep(2000);
	})
});