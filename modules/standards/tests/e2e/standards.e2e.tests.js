'use strict';

describe('Standards E2E Tests:', function() {
	describe('Test Standards page', function() {
		it('Should not include new Standards', function() {
			browser.get('http://localhost:3000/#!/standards');
			expect(element.all(by.repeater('standard in standards')).count()).toEqual(0);
		});
	});
});
