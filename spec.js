/***************************************************************************************
THESE TESTS ARE OUT OF DATE WITH THE WEBSITE, LOOKS AT FAILED TESTS AND SEE IF RELEVENT
***************************************************************************************/
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

    // Search for dance projects
    it('Search for projects test1', function() {
       browser.get('http://localhost:3000/projects');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Dance')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(2);
    });
    // Search for english projects
    it('Search for projects test2', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'English Language Development')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for gifted project
    it('Search for projects test3', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Gifted')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(1);
    });
    // Search for health projects
    it('Search for projects test4', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Health Education')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for music projects
    it('Search for projects test5', function() {
       //browser.get('http://localhost:3000/projects');
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Music')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for PE projects
    it('Search for projects test6', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.cssContainingText('option', 'Physical Education')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for special skills projects
    it('Search for projects test7', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
       element(by.cssContainingText('option', 'Special Skills')).click();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('prj in projects')).count()).toEqual(1);
    });
    // Search for theatre projects
    it('Search for projects test8', function() {
        browser.get('http://localhost:3000/projects');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.cssContainingText('option', 'Theatre')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for visual arts projects
    it('Search for projects test9', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.cssContainingText('option', 'Visual Art')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for project with MAFS.7.SP.1.1
    it('Search for projects test10', function() {
        //browser.get('http://localhost:3000/projects');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.id('standard')).sendKeys('MAFS.7.SP.1.1');
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });
    // Search for projects with Raz and go to the first one available
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

    // Search for project with MAFS.7.SP.1.1
    it('Search for projects test12', function() {
        browser.get('http://localhost:3000/projects');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/projects');
        element(by.id('project')).clear();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('prj in projects')).count()).toEqual(0);
    });

    // Search for standards MAFS.7.SP.1.1&2
    it('Search for standards MAFS.7.SP.1.1&2', function() {
        browser.get('http://localhost:3000/standards');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('standard')).sendKeys('MAFS.7.SP.1.1');
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1);
        element(by.id('standard')).clear();
        element(by.id('standard')).sendKeys('MAFS.7.SP.1.2');
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1);
        element(by.id('keyword')).sendKeys('population');
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1);
    });

    // Search for standards with population
    it('Search for standards population', function() {
        //browser.get('http://localhost:3000/standards');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('standard')).clear();
        element(by.id('submit')).click();
        //element(by.id('keyword')).sendKeys('population');
        expect(element.all(by.repeater('std in standards')).count()).toEqual(29);
    });

    // Search for standards with water
    it('Search for standards water', function() {
        //browser.get('http://localhost:3000/standards');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('keyword')).clear();
        element(by.id('keyword')).sendKeys('water');
        element(by.id('submit')).click();
        //element(by.id('keyword')).sendKeys('population');
        expect(element.all(by.repeater('std in standards')).count()).toEqual(50);
    });

   // Search for all dance standards
    /*it('Search for standards test1', function() {
       //browser.get('http://localhost:3000/standards');
       expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
       element(by.cssContainingText('option', 'Dance')).click();
       element(by.id('keyword')).clear();
       element(by.id('submit')).click();
       expect(element.all(by.repeater('std in standards')).count()).toEqual(315);
   });

    // Search for dance standards grade K
    it('Search for standards test1.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(19);
    });

    // Search for dance standards grade 1
    it('Search for dance standards grade test1.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(23);
    });

    // Search for dance standards grade 2
    it('Search for dance standards grade test1.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(26);
    });

    // Search for dance standards grade 3
    it('Search for dance standards grade test1.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(33);
    });

    // Search for dance standards grade 4
    it('Search for dance standards grade test1.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(38);
    });

    // Search for dance standards grade 5
    it('Search for dance standards grade test1.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(44);
    });

    // Search for dance standards grade 6
    it('Search for dance standards grade test1.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(60);
    });

    // Search for dance standards grade 7
    it('Search for dance standards grade test1.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(60);
    });

    // Search for dance standards grade 8
    it('Search for dance standards grade test1.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(60);
    });

    // Search for dance standards grade 9-12
    it('Search for dance standards grade test1.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(72);
    });

    // Search for all english language arts standards
    it('Search for english language arts standards grade test2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'English Language Arts')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(574);
    });

    // Search for english language arts standards grade K
    it('Search for english language arts standards grade test2.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(73);
    });

    // Search for english language arts standards grade 1
    it('Search for english language arts standards grade test2.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(73);
    });

    // Search for english language arts standards grade 2
    it('Search for english language arts standards grade test2.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(72);
    });

    // Search for english language arts standards grade 3
    it('Search for english language arts standards grade test2.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(74);
    });

    // Search for english language arts standards grade 4
    it('Search for english language arts standards grade test2.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(75);
    });

    // Search for english language arts standards grade 5
    it('Search for english language arts standards grade test2.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(75);
    });

    // Search for english language arts standards grade 6
    it('Search for english language arts standards grade test2.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(102);
    });

    // Search for english language arts standards grade 7
    it('Search for english language arts standards grade test2.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(102);
    });

    // Search for english language arts standards grade 8
    it('Search for english language arts standards grade test2.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(102);
    });

    // Search for english language arts standards grade 9-12
    it('Search for english language arts standards grade test2.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(172);
    });

    // Search for all english language development standards
    it('Search for english language development standards grade test3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'English Language Development')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade K
    it('Search for english language development standards grade test3.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 1
    it('Search for english language development standards grade test3.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 2
    it('Search for english language development standards grade test3.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 3
    it('Search for english language development standards grade test3.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 4
    it('Search for english language development standards grade test3.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 5
    it('Search for english language development standards grade test3.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 6
    it('Search for english language development standards grade test3.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 7
    it('Search for english language development standards grade test3.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 8
    it('Search for english language development standards grade test3.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for english language development standards grade 9-12
    it('Search for english language development standards grade test3.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(5);
    });

    // Search for all gifted standards grade
    it('Search for gifted standards grade test4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Gifted')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade K
    it('Search for gifted standards grade test4.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 1
    it('Search for gifted standards grade test4.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 2
    it('Search for gifted standards grade test4.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 3
    it('Search for gifted standards grade test4.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 4
    it('Search for gifted standards grade test4.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 5
    it('Search for gifted standards grade test4.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 6
    it('Search for gifted standards grade test4.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 7
    it('Search for gifted standards grade test4.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 8
    it('Search for gifted standards grade test4.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for gifted standards grade 9-12
    it('Search for gifted standards grade test4.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(284);
    });

    // Search for all health education standards
    it('Search for health education standards grade test5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Health Education')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(297);
    });

    // Search for health education standards grade K
    it('Search for health education standards grade test5.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(19);
    });

    // Search for health education standards grade 1
    it('Search for health education standards grade test5.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(20);
    });

    // Search for health education standards grade 2
    it('Search for health education standards grade test5.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(20);
    });

    // Search for health education standards grade 3
    it('Search for health education standards grade test5.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(27);
    });

    // Search for health education standards grade 4
    it('Search for health education standards grade test5.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(28);
    });

    // Search for health education standards grade 5
    it('Search for health education standards grade test5.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(31);
    });

    // Search for health education standards grade 6
    it('Search for health education standards grade test5.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(38);
    });

    // Search for health education standards grade 7
    it('Search for health education standards grade test5.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(36);
    });

    // Search for health education standards grade 8
    it('Search for health education standards grade test5.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(38);
    });

    // Search for health education standards grade 9-12
    it('Search for health education standards grade test5.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(40);
    });

    // Search for all mathematics standards
    it('Search for mathematics standards grade test6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Mathematics')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(451);
    });

    // Search for mathematics standards grade K
    it('Search for mathematics standards grade test6.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(31);
    });

    // Search for mathematics standards grade 1
    it('Search for mathematics standards grade test6.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(30);
    });

    // Search for mathematics standards grade 2
    it('Search for mathematics standards grade test6.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(35);
    });

    // Search for mathematics standards grade 3
    it('Search for mathematics standards grade test6.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(33);
    });

    // Search for mathematics standards grade 4
    it('Search for mathematics standards grade test6.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(38);
    });

    // Search for mathematics standards grade 5
    it('Search for mathematics standards grade test6.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(34);
    });

    // Search for mathematics standards grade 6
    it('Search for mathematics standards grade test6.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(37);
    });

    // Search for mathematics standards grade 7
    it('Search for mathematics standards grade test6.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(32);
    });

    // Search for mathematics standards grade 8
    it('Search for mathematics standards grade test6.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(36);
    });

    // Search for mathematics standards grade 9-12
    it('Search for mathematics standards grade test6.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(217);
    });

    // Search for all music standards
    it('Search for music standards grade test7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Music')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(254);
    });

    // Search for music standards grade K
    it('Search for music standards grade test7.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(20);
    });

    // Search for music standards grade 1
    it('Search for music standards grade test7.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(24);
    });

    // Search for music standards grade 2
    it('Search for music standards grade test7.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(24);
    });

    // Search for music standards grade 3
    it('Search for music standards grade test7.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(27);
    });

    // Search for music standards grade 4
    it('Search for music standards grade test7.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(30);
    });

    // Search for music standards grade 5
    it('Search for music standards grade test7.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(33);
    });

    // Search for music standards grade 6
    it('Search for music standards grade test7.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(47);
    });

    // Search for music standards grade 7
    it('Search for music standards grade test7.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(47);
    });

    // Search for music standards grade 8
    it('Search for music standards grade test7.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(47);
    });

    // Search for music standards grade 9-12
    it('Search for music standards grade test7.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(49);
    });

    // Search for all PE standards
    it('Search for PE standards grade test8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Physical Education')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(467);
    });

    // Search for PE standards grade K
    it('Search for PE standards grade test8.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(40);
    });

    // Search for PE standards grade 1
    it('Search for PE standards grade test8.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(43);
    });

    // Search for PE standards grade 2
    it('Search for PE standards grade test8.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(44);
    });

    // Search for PE standards grade 3
    it('Search for PE standards grade test8.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(43);
    });

    // Search for PE standards grade 4
    it('Search for PE standards grade test8.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(43);
    });

    // Search for PE standards grade 5
    it('Search for PE standards grade test8.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(42);
    });

    // Search for PE standards grade 6
    it('Search for PE standards grade test8.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(54);
    });

    // Search for PE standards grade 7
    it('Search for PE standards grade test8.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(37);
    });

    // Search for PE standards grade 8
    it('Search for PE standards grade test8.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(37);
    });

    // Search for PE standards grade 9-12
    it('Search for PE standards grade test8.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(84);
    });

    // Search for all science standards
    it('Search for science standards grade test9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Science')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(498);
    });

    // Search for science standards grade K
    it('Search for science standards grade test9.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(19);
    });

    // Search for science standards grade 1
    it('Search for science standards grade test9.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(19);
    });

    // Search for science standards grade 2
    it('Search for science standards grade test9.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(30);
    });

    // Search for science standards grade 3
    it('Search for science standards grade test9.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(32);
    });

    // Search for science standards grade 4
    it('Search for science standards grade test9.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(42);
    });

    // Search for science standards grade 5
    it('Search for science standards grade test9.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(37);
    });

    // Search for science standards grade 6
    it('Search for science standards grade test9.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(35);
    });

    // Search for science standards grade 7
    it('Search for science standards grade test9.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(34);
    });

    // Search for science standards grade 8
    it('Search for science standards grade test9.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(40);
    });

    // Search for science standards grade 9-12
    it('Search for science standards grade test9.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(210);
    });

    // Search for all SS standards
    it('Search for SS standards grade test10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Social Studies')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1175);
    });

    // Search for SS standards grade K
    it('Search for SS standards grade test10.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(27);
    });

    // Search for SS standards grade 1
    it('Search for SS standards grade test10.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(30);
    });

    // Search for SS standards grade 2
    it('Search for SS standards grade test10.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(28);
    });

    // Search for SS standards grade 3
    it('Search for SS standards grade test10.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(33);
    });

    // Search for SS standards grade 4
    it('Search for SS standards grade test10.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(69);
    });

    // Search for SS standards grade 5
    it('Search for SS standards grade test10.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(64);
    });

    // Search for SS standards grade 6
    it('Search for SS standards grade test10.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(82);
    });

    // Search for SS standards grade 7
    it('Search for SS standards grade test10.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(67);
    });

    // Search for SS standards grade 8
    it('Search for SS standards grade test10.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(122);
    });

    // Search for SS standards grade 9-12
    it('Search for SS standards grade test10.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(653);
    });

    // Search for all Special Skills standards
    it('Search for Special Skills standards grade test11', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Special Skills')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade K
    it('Search for Special Skills standards grade test11.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 1
    it('Search for Special Skills standards grade test11.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 2
    it('Search for Special Skills standards grade test11.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 3
    it('Search for Special Skills standards grade test11.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 4
    it('Search for Special Skills standards grade test11.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 5
    it('Search for Special Skills standards grade test11.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 6
    it('Search for Special Skills standards grade test11.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 7
    it('Search for Special Skills standards grade test11.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 8
    it('Search for Special Skills standards grade test11.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for Special Skills standards grade 9-12
    it('Search for Special Skills standards grade test11.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(265);
    });

    // Search for all Theatre standards
    it('Search for Theatre standards grade test12', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Theatre')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(332);
    });

    // Search for Theatre standards grade K
    it('Search for Theatre standards grade test12.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(18);
    });

    // Search for Theatre standards grade 1
    it('Search for Theatre standards grade test12.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(21);
    });

    // Search for Theatre standards grade 2
    it('Search for Theatre standards grade test12.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(23);
    });

    // Search for Theatre standards grade 3
    it('Search for Theatre standards grade test12.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(29);
    });

    // Search for Theatre standards grade 4
    it('Search for Theatre standards grade test12.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(34);
    });

    // Search for Theatre standards grade 5
    it('Search for Theatre standards grade test12.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(39);
    });

    // Search for Theatre standards grade 6
    it('Search for Theatre standards grade test12.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(66);
    });

    // Search for Theatre standards grade 7
    it('Search for Theatre standards grade test12.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(66);
    });

    // Search for Theatre standards grade 8
    it('Search for Theatre standards grade test12.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(66);
    });

    // Search for Theatre standards grade 9-12
    it('Search for Theatre standards grade test12.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(102);
    });

    // Search for all Visual Arts standards
    it('Search for Visual Arts standards grade test13', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Visual Art')).click();
        element(by.id('submit')).click();
        expect(element.all(by.repeater('std in standards')).count()).toEqual(367);
    });

    // Search for Visual Arts standards grade K
    it('Search for Visual Arts standards grade test13.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        //element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(25);
    });

    // Search for Visual Arts standards grade 1
    it('Search for Visual Arts standards grade test13.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(31);
    });

    // Search for Visual Arts standards grade 2
    it('Search for Visual Arts standards grade test13.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(32);
    });

    // Search for Visual Arts standards grade 3
    it('Search for Visual Arts standards grade test13.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(35);
    });

    // Search for Visual Arts standards grade 4
    it('Search for Visual Arts standards grade test13.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(37);
    });

    // Search for Visual Arts standards grade 5
    it('Search for Visual Arts standards grade test13.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(44);
    });

    // Search for Visual Arts standards grade 6
    it('Search for Visual Arts standards grade test13.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(58);
    });

    // Search for Visual Arts standards grade 7
    it('Search for Visual Arts standards grade test13.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(58);
    });

    // Search for Visual Arts standards grade 8
    it('Search for Visual Arts standards grade test13.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(58);
    });

    // Search for Visual Arts standards grade 9-12
    it('Search for Visual Arts standards grade test13.10', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(105);
    });

    // Search for all standards grade K
    it('Search for all standards grade test14', function() {
        //browser.get('http://localhost:3000/standards');
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.cssContainingText('option', 'Select one...')).click();
        element(by.id('min0')).click();
        element(by.id('max0')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(845);
    });

    // Search for all standards grade 1
    it('Search for all standards grade test14.1', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min1')).click();
        element(by.id('max1')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(868);
    });

    // Search for all standards grade 2
    it('Search for all standards grade test14.2', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min2')).click();
        element(by.id('max2')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(888);
    });

    // Search for all standards grade 3
    it('Search for all standards grade test14.3', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min3')).click();
        element(by.id('max3')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(920);
    });

    // Search for all standards grade 4
    it('Search for all standards grade test14.4', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min4')).click();
        element(by.id('max4')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(988);
    });

    // Search for all standards grade 5
    it('Search for all standards grade test14.5', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min5')).click();
        element(by.id('max5')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(997);
    });

    // Search for all standards grade 6
    it('Search for all standards grade test14.6', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min6')).click();
        element(by.id('max6')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1133);
    });

    // Search for all standards grade 7
    it('Search for all standards grade test14.7', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min7')).click();
        element(by.id('max7')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1093);
    });

    // Search for all standards grade 8
    it('Search for all standards grade test14.8', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min8')).click();
        element(by.id('max8')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(1160);
    });

    // Search for all standards grade 9-12
    it('Search for all standards grade test14.9', function() {
        //browser.get('http://localhost:3000/standards');
        //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/standards');
        element(by.id('min912')).click();
        element(by.id('max912')).click();
        element(by.id('submit')).click();
        //browser.driver.sleep(1000);
        expect(element.all(by.repeater('std in standards')).count()).toEqual(2258);
    });*/

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
