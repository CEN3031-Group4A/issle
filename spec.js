// spec.js
describe('issle Demo App', function() {

    it('should be able to connect to the webapp', function() {
        browser.get('http://localhost:3000/');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
    });
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('issle - Development Environment');
    });
    it('should have access to search for projects', function() {
        var sign = element(by.id('single-button'));
        sign.$('[value="Sign in"]').click();
        /*var menu = require('./menu-partial');
        menu.dropdown('Sign in').item('Sign in').click();*/
        browser.sleep(500);
    });
});
