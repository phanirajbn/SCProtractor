//conf.js:Settings required for UR protractor to run....
exports.config ={
	'framework' : 'jasmine',
	'seleniumAddress' : 'http://localhost:4444/wd/hub',
	specs: ['PageSpec.js'],
	capabilities: {
		browserName : 'chrome',
		ignoreProtectedModeSettings: true
	}
/*	multiCapabilities:[{
		browserName: 'internet explorer',
		ignoreProtectedModeSettings: true
	},{
		browserName : 'chrome'
	}]*/
}