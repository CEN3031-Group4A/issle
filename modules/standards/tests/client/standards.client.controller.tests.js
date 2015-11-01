'use strict';

(function() {
	// Standards Controller Spec
	describe('Standards Controller Tests', function() {
		// Initialize global variables
		var StandardsController,
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

			// Initialize the Standards controller.
			StandardsController = $controller('StandardsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Standard object fetched from XHR', inject(function(Standards) {
			// Create sample Standard using the Standards service
			var sampleStandard = new Standards({
				name: 'New Standard'
			});

			// Create a sample Standards array that includes the new Standard
			var sampleStandards = [sampleStandard];

			// Set GET response
			$httpBackend.expectGET('api/standards').respond(sampleStandards);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.standards).toEqualData(sampleStandards);
		}));

		it('$scope.findOne() should create an array with one Standard object fetched from XHR using a standardId URL parameter', inject(function(Standards) {
			// Define a sample Standard object
			var sampleStandard = new Standards({
				name: 'New Standard'
			});

			// Set the URL parameter
			$stateParams.standardId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/api\/standards\/([0-9a-fA-F]{24})$/).respond(sampleStandard);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.standard).toEqualData(sampleStandard);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Standards) {
			// Create a sample Standard object
			var sampleStandardPostData = new Standards({
				name: 'New Standard'
			});

			// Create a sample Standard response
			var sampleStandardResponse = new Standards({
				_id: '525cf20451979dea2c000001',
				name: 'New Standard'
			});

			// Fixture mock form input values
			scope.name = 'New Standard';

			// Set POST response
			$httpBackend.expectPOST('api/standards', sampleStandardPostData).respond(sampleStandardResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Standard was created
			expect($location.path()).toBe('/standards/' + sampleStandardResponse._id);
		}));

		it('$scope.update() should update a valid Standard', inject(function(Standards) {
			// Define a sample Standard put data
			var sampleStandardPutData = new Standards({
				_id: '525cf20451979dea2c000001',
				name: 'New Standard'
			});

			// Mock Standard in scope
			scope.standard = sampleStandardPutData;

			// Set PUT response
			$httpBackend.expectPUT(/api\/standards\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/standards/' + sampleStandardPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid standardId and remove the Standard from the scope', inject(function(Standards) {
			// Create new Standard object
			var sampleStandard = new Standards({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Standards array and include the Standard
			scope.standards = [sampleStandard];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/api\/standards\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleStandard);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.standards.length).toBe(0);
		}));
	});
}());