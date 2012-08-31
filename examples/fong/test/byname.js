var expect = require('expect.js'),
	fong = require('../dist/commonjs/fong');

describe('able to fong people with the appropriate name', function() {
	var testCrowd = [
		{ name: 'Chaucer', kick: function() {} }
	];

	it('should be able fong anyone named Chaucer', function() {
		var fonged = fong(testCrowd);

		// expect the length of the fonged people to equal 1
		expect(fonged).to.be.ok();
		expect(fonged.length).to.equal(1);
	});
});