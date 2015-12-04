// spec.js
describe('issle Demo App', function() {
    // Home page
   /* it('should be able to connect to the webapp', function() {
        browser.get('http://localhost:3000/');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
    });

    // See if in dev environment
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('issle - Development Environment');
    });

    // Search for projects
    it('should be able to search for a project in the webapp', function() {
        browser.get('http://localhost:3000/projects');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
    });

    // Create projects
    it('should be able to create a project in the webapp', function() {
        browser.get('http://localhost:3000/projects/create');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/create');
    });

    // List standards
    it('should be able to list standards in the webapp', function() {
        browser.get('http://localhost:3000/standards');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
    });

    //Show examples
    it('should be able to connect to see example projects in the webapp', function() {
        browser.get('http://localhost:3000/support/examples');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/examples');
    });

    // FAQ
    it('should be able to see FAQ for the webapp', function() {
        browser.get('http://localhost:3000/support/FAQ');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/FAQ');
    });

    // About
    it('should be able to see about page for the webapp', function() {
        browser.get('http://localhost:3000/support/About');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/About');
    });

    // Create account
    it('should be able to create account in the webapp', function() {
        browser.get('http://localhost:3000/authentication/signup');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signup');
    });

    // Not Login
    it('pretend to login but don\'t', function() {
        browser.get('http://localhost:3000/authentication/signin');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
    });

    // Failure: My profile
    it('shouldn\'t be able to traverse profile in the webapp cause you ain\'t signed in', function() {
        browser.get('http://localhost:3000/settings/account');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
    });

    // Failure: Edit profile
    it('shouldn\'t be able to edit profile in the webapp cause you ain\'t signed in', function() {
        browser.get('http://localhost:3000/settings/profile');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
    });

    // Failure: Change profile picture
    it('shouldn\'t be able to change profile picture in the webapp cause you ain\'t signed in', function() {
        browser.get('http://localhost:3000/settings/picture');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
    });

    // Failure: Change password
    it('shouldn\'t be able to change password in the webapp cause you ain\'t signed in', function() {
        browser.get('http://localhost:3000/settings/password');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
    });*/

    // Failure: Signup
    it('should be able to login to the webapp', function() {
        browser.get('http://localhost:3000/authentication/signup');
        element(by.id('username')).sendKeys('a');
        element(by.id('password')).sendKeys('aaaaaaaa');
        element(by.id('signup')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signup');
    });

    // Create project
    it('should be able to login to the webapp', function() {
        browser.get('http://localhost:3000/projects/create');
        element(by.id('username')).sendKeys('a');
        element(by.id('password')).sendKeys('aaaaaaaa');
        element(by.id('login')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
    });

    // Login
    it('should be able to login to the webapp', function() {
        browser.get('http://localhost:3000/authentication/signin');
        element(by.id('username')).sendKeys('a');
        element(by.id('password')).sendKeys('aaaaaaaa');
        element(by.id('login')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
    });

    // My profile
    it('should be able to edit profile project in the webapp', function() {
        browser.get('http://localhost:3000/settings/account');
        element(by.id('search')).sendKeys('water');
        element.all(by.repeater('userProjectItem in userProjects')).get(0).element(by.id('edit')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/5654a24a2bb9c60e002ae187/edit');
    });

    // My profile
    it('should be able to view profile project in the webapp then go to edit page', function() {
        browser.get('http://localhost:3000/settings/account');
        element(by.id('search')).sendKeys('water');
        element.all(by.repeater('userProjectItem in userProjects')).get(0).element(by.id('link')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/5654a24a2bb9c60e002ae187');
        element(by.id('edit')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/5654a24a2bb9c60e002ae187/edit');
    });

    // Edit profile
    /*it('should be able to edit profile in the webapp', function() {
        browser.get('http://localhost:3000/settings/profile');
        element(by.id('firstName')).sendKeys('us');
        element(by.id('lastName')).sendKeys('ape');
        element(by.id('school')).sendKeys('warts');
        //element(by.id('email')).sendKeys('snape@hogwards.edu');
        //element(by.id('username')).sendKeys('a');
        element(by.id('submit')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/settings/profile');
    });

    // Change profile picture
    it('shouldbe able to change profile picture in the webapp', function() {
        browser.get('http://localhost:3000/settings/picture');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/settings/picture');
    });

    // Change password
    it('should be able to change password in the webapp', function() {
        browser.get('http://localhost:3000/settings/password');
        element(by.id('currentPassword')).sendKeys('aaaaaaaa');
        element(by.id('newPassword')).sendKeys('aaaaaaaa');
        element(by.id('verifyPassword')).sendKeys('aaaaaaaa');
        element(by.id('changePassword')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/settings/password');
    });*/

});
