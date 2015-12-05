// spec.js
describe('issle Demo App', function() {
    // Home page button test
   it('Home page button test', function() {
        browser.get('http://localhost:3000/');
        element(by.id('home')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
   });

   // See if in dev environment test
   it('See if in dev environment test', function() {
       expect(browser.getTitle()).toEqual('issle - Development Environment');
   });

   // Search for projects
   it('Search for projects', function() {
       browser.get('http://localhost:3000/projects');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
   });

   // List standards
   it('List standards', function() {
       browser.get('http://localhost:3000/standards');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
   });

   //Show example1 test
   it('Show example1 test', function() {
       browser.get('http://localhost:3000/support/examples');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/examples');
       element(by.id('1')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/example1');
   });

   //Show example2 test
   it('Show example2 test', function() {
       browser.get('http://localhost:3000/support/examples');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/examples');
       element(by.id('2')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/example2');
   });

   //Show example3 test
   it('Show example3 test', function() {
       browser.get('http://localhost:3000/support/examples');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/examples');
       element(by.id('3')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/example3');
   });

   //Show example4 test
   it('Show example4 test', function() {
       browser.get('http://localhost:3000/support/examples');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/examples');
       element(by.id('4')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/example4');
   });

   //Show example5 test
   it('Show example5 test', function() {
       browser.get('http://localhost:3000/support/examples');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/examples');
       element(by.id('5')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/example5');
   });

   //Show example6 test
   it('Show example6 test', function() {
       browser.get('http://localhost:3000/support/examples');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/examples');
       element(by.id('6')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/example6');
   });

   // FAQ page test
   it('FAQ page test', function() {
       browser.get('http://localhost:3000/support/FAQ');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/FAQ');
       element(by.id('cc')).click();
   });

   // About page test
   it('About page test', function() {
       browser.get('http://localhost:3000/support/About');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/support/About');
   });

   // Fail login because no password test
   it('Fail login because no password test', function() {
       browser.get('http://localhost:3000/authentication/signin');
       element(by.id('username')).clear();
       element(by.id('username')).sendKeys('a');
       element(by.id('password')).clear();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
   });

   // Fail login because no username test
   it('Fail login because no username test', function() {
       browser.get('http://localhost:3000/authentication/signin');
       element(by.id('username')).clear();
       element(by.id('password')).clear();
       element(by.id('password')).sendKeys('aaaaaaaa');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
   });

   // Fail account access because not logged in test
   it('Fail account access because not logged in test', function() {
       browser.get('http://localhost:3000/settings/account');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
   });

   // Fail profile access because not logged in test
   it('Fail profile access because not logged in test', function() {
       browser.get('http://localhost:3000/settings/profile');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
   });

   // Fail profile picture access because not logged in test
   it('Fail profile picture access because not logged in test', function() {
       browser.get('http://localhost:3000/settings/picture');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
   });

   // Fail profile password access because not logged in test
   it('Fail profile password access because not logged in test', function() {
       browser.get('http://localhost:3000/settings/password');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signin');
   });

   // Fail signup because username in use test
   it('Fail signup because username in use test', function() {
       browser.get('http://localhost:3000/authentication/signup');
       element(by.id('username')).clear();
       element(by.id('username')).sendKeys('a');
       element(by.id('password')).clear();
       element(by.id('password')).sendKeys('aaaaaaaa');
       element(by.id('email')).clear();
       element(by.id('email')).sendKeys('email@email.com');
       element(by.id('signup')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signup');
   });

   // Fail signup because not an email test
   it('Fail signup because not an email test', function() {
       browser.get('http://localhost:3000/authentication/signup');
       element(by.id('username')).clear();
       element(by.id('username')).sendKeys('b');
       element(by.id('password')).clear();
       element(by.id('password')).sendKeys('bbbbbbbb');
       element(by.id('email')).clear();
       element(by.id('email')).sendKeys('notanemail');
       element(by.id('signup')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/authentication/signup');
   });

   // Successful login test
   it('Successful login test', function() {
       browser.get('http://localhost:3000/authentication/signin');
       element(by.id('username')).clear();
       element(by.id('username')).sendKeys('a');
       element(by.id('password')).clear();
       element(by.id('password')).sendKeys('aaaaaaaa');
       element(by.id('login')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
   });

   // Create/Delete project test
   it('Create/Delete project test', function() {
       browser.get('http://localhost:3000/projects/create');
       element(by.id('name')).sendKeys('testdat');
       element(by.id('ss')).sendKeys('testdat');
       element(by.id('#1')).click();
       element(by.id('#2')).click();
       element(by.id('#3')).click();
       element(by.id('#4')).click();
       element(by.id('#5')).click();
       element(by.id('#6')).click();
       element(by.id('#7')).click();
       element(by.id('#8')).click();
       element(by.id('#9')).click();
       element(by.id('save')).click();
       element(by.id('edit')).click();
       element(by.id('sci')).sendKeys('testdat');
       element(by.id('submit')).click();
       element(by.id('delete')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
   });

   // My profile -> edit page
   it('should be able to edit profile project in the webapp', function() {
       browser.get('http://localhost:3000/settings/account');
       element(by.id('search')).sendKeys('water');
       element.all(by.repeater('userProjectItem in userProjects')).get(0).element(by.id('edit')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/5654a24a2bb9c60e002ae187/edit');
   });

   // My profile -> view -> edit page
   it('should be able to view profile project in the webapp then go to edit page', function() {
       browser.get('http://localhost:3000/settings/account');
       element(by.id('search')).sendKeys('water');
       element.all(by.repeater('userProjectItem in userProjects')).get(0).element(by.id('link')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/5654a24a2bb9c60e002ae187');
       element(by.id('edit')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/5654a24a2bb9c60e002ae187/edit');
   });

   // Edit profile settings test
   it('Edit profile settings test', function() {
       browser.get('http://localhost:3000/settings/profile');
       element(by.id('firstName')).clear();
       element(by.id('firstName')).sendKeys('Severus');
       element(by.id('lastName')).clear();
       element(by.id('lastName')).sendKeys('Snape');
       element(by.id('school')).clear();
       element(by.id('school')).sendKeys('Hogwarts');
       element(by.id('email')).clear();
       element(by.id('email')).sendKeys('snape@hogwards.edu');
       element(by.id('username')).clear();
       element(by.id('username')).sendKeys('a');
       element(by.id('submit')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/settings/profile');
   });

   // Change profile picture test
   it('Change profile picture test', function() {
       browser.get('http://localhost:3000/settings/picture');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/settings/picture');
       element(by.id('pic')).click();
   });

   // Change profile password test
   it('Change profile password test', function() {
       browser.get('http://localhost:3000/settings/password');
       element(by.id('currentPassword')).sendKeys('aaaaaaaa');
       element(by.id('newPassword')).sendKeys('aaaaaaaa');
       element(by.id('verifyPassword')).sendKeys('aaaaaaaa');
       element(by.id('changePassword')).click();
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/settings/password');
   });

});
