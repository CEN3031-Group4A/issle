'use strict';

var should = require('should'),
	request = require('supertest'),
	path = require('path'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Test = mongoose.model('Test'),
	express = require(path.resolve('./config/lib/express'));

/**
 * Globals
 */
var app, agent, credentials, user, test;

/**
 * Test routes tests
 */
describe('Test CRUD tests', function() {
	before(function(done) {
		// Get application
		app = express.init(mongoose);
		agent = request.agent(app);

		done();
	});

	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			username: 'username',
			password: 'password'
		};

		// Create a new user
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: credentials.username,
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new Test
		user.save(function() {
			test = {
				name: 'Test Name'
			};

			done();
		});
	});

	it('should be able to save Test instance if logged in', function(done) {
		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Test
				agent.post('/api/tests')
					.send(test)
					.expect(200)
					.end(function(testSaveErr, testSaveRes) {
						// Handle Test save error
						if (testSaveErr) done(testSaveErr);

						// Get a list of Tests
						agent.get('/api/tests')
							.end(function(testsGetErr, testsGetRes) {
								// Handle Test save error
								if (testsGetErr) done(testsGetErr);

								// Get Tests list
								var tests = testsGetRes.body;

								// Set assertions
								(tests[0].user._id).should.equal(userId);
								(tests[0].name).should.match('Test Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Test instance if not logged in', function(done) {
		agent.post('/api/tests')
			.send(test)
			.expect(403)
			.end(function(testSaveErr, testSaveRes) {
				// Call the assertion callback
				done(testSaveErr);
			});
	});

	it('should not be able to save Test instance if no name is provided', function(done) {
		// Invalidate name field
		test.name = '';

		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Test
				agent.post('/api/tests')
					.send(test)
					.expect(400)
					.end(function(testSaveErr, testSaveRes) {
						// Set message assertion
						(testSaveRes.body.message).should.match('Please fill Test name');
						
						// Handle Test save error
						done(testSaveErr);
					});
			});
	});

	it('should be able to update Test instance if signed in', function(done) {
		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Test
				agent.post('/api/tests')
					.send(test)
					.expect(200)
					.end(function(testSaveErr, testSaveRes) {
						// Handle Test save error
						if (testSaveErr) done(testSaveErr);

						// Update Test name
						test.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Test
						agent.put('/api/tests/' + testSaveRes.body._id)
							.send(test)
							.expect(200)
							.end(function(testUpdateErr, testUpdateRes) {
								// Handle Test update error
								if (testUpdateErr) done(testUpdateErr);

								// Set assertions
								(testUpdateRes.body._id).should.equal(testSaveRes.body._id);
								(testUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Tests if not signed in', function(done) {
		// Create new Test model instance
		var testObj = new Test(test);

		// Save the Test
		testObj.save(function() {
			// Request Tests
			request(app).get('/api/tests')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Test if not signed in', function(done) {
		// Create new Test model instance
		var testObj = new Test(test);

		// Save the Test
		testObj.save(function() {
			request(app).get('/api/tests/' + testObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', test.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Test instance if signed in', function(done) {
		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Test
				agent.post('/api/tests')
					.send(test)
					.expect(200)
					.end(function(testSaveErr, testSaveRes) {
						// Handle Test save error
						if (testSaveErr) done(testSaveErr);

						// Delete existing Test
						agent.delete('/api/tests/' + testSaveRes.body._id)
							.send(test)
							.expect(200)
							.end(function(testDeleteErr, testDeleteRes) {
								// Handle Test error error
								if (testDeleteErr) done(testDeleteErr);

								// Set assertions
								(testDeleteRes.body._id).should.equal(testSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Test instance if not signed in', function(done) {
		// Set Test user 
		test.user = user;

		// Create new Test model instance
		var testObj = new Test(test);

		// Save the Test
		testObj.save(function() {
			// Try deleting Test
			request(app).delete('/api/tests/' + testObj._id)
			.expect(403)
			.end(function(testDeleteErr, testDeleteRes) {
				// Set message assertion
				(testDeleteRes.body.message).should.match('User is not authorized');

				// Handle Test error error
				done(testDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec(function(){
			Test.remove().exec(function(){
				done();
			});
		});
	});
});
