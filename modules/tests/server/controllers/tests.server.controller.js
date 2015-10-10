'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Test = mongoose.model('Test'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Test
 */
exports.create = function(req, res) {
	var test = new Test(req.body);
	test.user = req.user;

	test.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(test);
		}
	});
};

/**
 * Show the current Test
 */
exports.read = function(req, res) {
	res.jsonp(req.test);
};

/**
 * Update a Test
 */
exports.update = function(req, res) {
	var test = req.test ;

	test = _.extend(test , req.body);

	test.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(test);
		}
	});
};

/**
 * Delete an Test
 */
exports.delete = function(req, res) {
	var test = req.test ;

	test.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(test);
		}
	});
};

/**
 * List of Tests
 */
exports.list = function(req, res) { Test.find().sort('-created').populate('user', 'displayName').exec(function(err, tests) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(tests);
		}
	});
};

/**
 * Test middleware
 */
exports.testByID = function(req, res, next, id) { Test.findById(id).populate('user', 'displayName').exec(function(err, test) {
		if (err) return next(err);
		if (! test) return next(new Error('Failed to load Test ' + id));
		req.test = test ;
		next();
	});
};