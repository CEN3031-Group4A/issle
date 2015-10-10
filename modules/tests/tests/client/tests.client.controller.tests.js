'use strict';

(function() {
	// Tests Controller Spec
	describe('Tests Controller Tests', function() {
		// Initialize global variables
		var TestsController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Tests controller.
			TestsController = $controller('TestsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Test object fetched from XHR', inject(function(Tests) {
			// Create sample Test using the Tests service
			var sampleTest = new Tests({
				name: 'New Test'
			});

			// Create a sample Tests array that includes the new Test
			var sampleTests = [sampleTest];

			// Set GET response
			$httpBackend.expectGET('api/tests').respond(sampleTests);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.tests).toEqualData(sampleTests);
		}));

		it('$scope.findOne() should create an array with one Test object fetched from XHR using a testId URL parameter', inject(function(Tests) {
			// Define a sample Test object
			var sampleTest = new Tests({
				name: 'New Test'
			});

			// Set the URL parameter
			$stateParams.testId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/api\/tests\/([0-9a-fA-F]{24})$/).respond(sampleTest);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.test).toEqualData(sampleTest);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Tests) {
			// Create a sample Test object
			var sampleTestPostData = new Tests({
				name: 'New Test'
			});

			// Create a sample Test response
			var sampleTestResponse = new Tests({
				_id: '525cf20451979dea2c000001',
				name: 'New Test'
			});

			// Fixture mock form input values
			scope.name = 'New Test';

			// Set POST response
			$httpBackend.expectPOST('api/tests', sampleTestPostData).respond(sampleTestResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Test was created
			expect($location.path()).toBe('/tests/' + sampleTestResponse._id);
		}));

		it('$scope.update() should update a valid Test', inject(function(Tests) {
			// Define a sample Test put data
			var sampleTestPutData = new Tests({
				_id: '525cf20451979dea2c000001',
				name: 'New Test'
			});

			// Mock Test in scope
			scope.test = sampleTestPutData;

			// Set PUT response
			$httpBackend.expectPUT(/api\/tests\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/tests/' + sampleTestPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid testId and remove the Test from the scope', inject(function(Tests) {
			// Create new Test object
			var sampleTest = new Tests({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Tests array and include the Test
			scope.tests = [sampleTest];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/api\/tests\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleTest);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.tests.length).toBe(0);
		}));
	});
}());