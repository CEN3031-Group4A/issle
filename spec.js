// spec.js
describe('To do App', function() {

  var inputBox = element(by.model('newItem'));
  var todos = element.all(by.repeater('do in todos'));
  var addButton = element(by.id('add'));
  // var deleteButton = element(by.id('delete'));

	it('should be able to connect to the webapp', function() {
	    browser.get('http://localhost:3000/');
	    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/');
	});

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('ToDo');
  });

  it('Should add an item', function() {

    inputBox.sendKeys('Test my App!');
    addButton.click();
    expect(todos.count()).toEqual(1);
    expect(todos.get(0).getText()).toEqual('Test my App!');
    browser.sleep(1000)
  });
  it('Should be able to add 9 more items', function() {

  	for (i = 2; i < 11; i++) {
		    inputBox.sendKeys('item number ' + i);
    		addButton.click();
  	}
    expect(todos.count()).toEqual(10);
    expect(todos.get(9).getText()).toEqual('item number 10');
    browser.sleep(1000)
  });
  it('Should not be able to add an empty item', function(){
      addButton.click();
      expect(todos.count()).toEqual(10);
      browser.sleep(1000);

  })
  it('Should be able to delete 9 items', function() {

  	var deleteButtons  = element.all(by.id('delete'));

  	for (i = 1; i < 10; i++) {
  			deleteButtons.get(1).click();
  			expect(todos.count()).toEqual(10 - i);
  	}
    expect(todos.count()).toEqual(1);
    browser.sleep(1000);
  });
  it('Should be able to edit the first item', function() {
    var editButton = element(by.id('edit'));
    var saveButton = element(by.id('save'));
    editButton.click();
    browser.sleep(1000)
    var editBox = element(by.model('editText'));
    editBox.sendKeys('this is an edit to an entry!');
    saveButton.click();
    browser.sleep(1500)

    // Checking that it was updated
    expect(todos.get(0).getText()).toEqual('this is an edit to an entry!')

  })

});