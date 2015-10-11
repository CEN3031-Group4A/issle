'use strict';

describe('Projects E2E Tests:', function() {
	describe('Test Projects page', function() {
		it('Should not include new Projects', function() {
			browser.get('http://localhost:3000/#!/projects');
			expect(element.all(by.repeater('project in projects')).count()).toEqual(0);
		});
	});
});
