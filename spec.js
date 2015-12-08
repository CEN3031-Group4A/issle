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

    // Search for projects test1
    it('Search for projects test1', function() {
       browser.get('http://localhost:3000/projects');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Dance')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test2
    it('Search for projects test2', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'English Language Development')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test3
    it('Search for projects test3', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Gifted')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test4
    it('Search for projects test4', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Health Education')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test5
    it('Search for projects test5', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Music')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test6
    it('Search for projects test6', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.cssContainingText('option', 'Physical Education')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test7
    it('Search for projects test7', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Special Skills')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test8
    it('Search for projects test8', function() {
        browser.get('http://localhost:3000/projects');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.cssContainingText('option', 'Theatre')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test9
    it('Search for projects test9', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.cssContainingText('option', 'Visual Art')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test10
    it('Search for projects test10', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.id('standard')).sendKeys('MAFS.7.SP.1.1');
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects test11
    it('Search for projects test11', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.id('project')).sendKeys('Raz');
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(2);
        //browser.driver.sleep(1000);
        element.all(by.repeater('prj in projects')).get(0).element(by.id('link')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects/564e0c90110ba90e00c720b4');
    });

    // Search for projects test12
    it('Search for projects test12', function() {
        browser.get('http://localhost:3000/projects');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.id('project')).clear();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });

   // Search for standards test1
   it('Search for standards test1', function() {
       browser.get('http://localhost:3000/standards');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
       element(by.cssContainingText('option', 'Dance')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('std in standards')).count()).toEqual(315);
   });

    // Search for standards test2
    it('Search for standards test2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'English Language Arts')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(574);
    });

    // Search for standards test3
    it('Search for standards test3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'English Language Development')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for standards test4
    it('Search for standards test4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Gifted')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for standards test5
    it('Search for standards test5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Health Education')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(297);
    });

    // Search for standards test6
    it('Search for standards test6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Mathematics')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(451);
    });

    // Search for standards test7
    it('Search for standards test7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Music')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(254);
    });

    // Search for standards test8
    it('Search for standards test8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Physical Education')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(467);
    });

    // Search for standards test9
    it('Search for standards test9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Science')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(498);
    });

    // Search for standards test10
    it('Search for standards test10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Social Studies')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1175);
    });

    // Search for standards test11
    it('Search for standards test11', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Special Skills')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for standards test12
    it('Search for standards test12', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Theatre')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(332);
    });

    // Search for standards test13
    it('Search for standards test13', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Visual Art')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(367);
    });

    // Search for standards test14
    it('Search for standards test14', function() {
        browser.get('http://localhost:3000/standards');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(845);
    });

    // Search for standards test15
    it('Search for standards test15', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(868);
    });

    // Search for standards test16
    it('Search for standards test16', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(888);
    });

    // Search for standards test17
    it('Search for standards test17', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(920);
    });

    // Search for standards test18
    it('Search for standards test18', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(988);
    });

    // Search for standards test19
    it('Search for standards test19', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(997);
    });

    // Search for standards test20
    it('Search for standards test20', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1133);
    });

    // Search for standards test21
    it('Search for standards test21', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1093);
    });

    // Search for standards test22
    it('Search for standards test22', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1160);
    });

    // Search for standards test23
    it('Search for standards test23', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(2258);
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
       element(by.id('username')).sendKeys('RazAloni');
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
       element(by.id('username')).sendKeys('RazAloni');
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
       element(by.id('username')).sendKeys('RazAloni');
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
       element(by.id('firstName')).sendKeys('Raz');
       element(by.id('lastName')).clear();
       element(by.id('lastName')).sendKeys('Aloni');
       element(by.id('school')).clear();
       element(by.id('school')).sendKeys('University of Florida');
       element(by.id('email')).clear();
       element(by.id('email')).sendKeys('raloni@ufl.edu');
       element(by.id('username')).clear();
       element(by.id('username')).sendKeys('RazAloni');
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
