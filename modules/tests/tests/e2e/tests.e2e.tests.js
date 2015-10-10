'use strict';

describe('Tests E2E Tests:', function() {
	describe('Test Tests page', function() {
		it('Should not include new Tests', function() {
			browser.get('http://localhost:3000/#!/tests');
			expect(element.all(by.repeater('test in tests')).count()).toEqual(0);
		});
	});
});
