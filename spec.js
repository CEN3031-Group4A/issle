// spec.js
describe('issle Demo App', function() {

    it('should be able to connect to the webapp', function() {
        browser.get('http://localhost:3000/');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
    });
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('issle - Development Environment');
    });

});
