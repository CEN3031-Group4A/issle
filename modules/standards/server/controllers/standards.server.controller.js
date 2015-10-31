'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Standard = mongoose.model('Standard'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a Standard
 */
exports.create = function(req, res) {
	var standard = new Standard(req.body);
	standard.user = req.user;

	standard.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(standard);
		}
	});
};

/**
 * Show the current Standard
 */
exports.read = function(req, res) {
	res.jsonp(req.standard);
};

/**
 * Update a Standard
 */
exports.update = function(req, res) {
	var standard = req.standard ;

	standard = _.extend(standard , req.body);

	standard.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(standard);
		}
	});
};

/**
 * Delete an Standard
 */
exports.delete = function(req, res) {
	var standard = req.standard ;

	standard.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(standard);
		}
	});
};

/**
 * List of Standards
 */
exports.list = function(req, res) { 
	if(req.query.benchmark) {
	Standard.find().
		where('benchmark').equals(req.query.benchmark).
		sort('-created').populate('user', 'displayName').
		exec(function(err, standards) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(standards);
		}
	});
	} else if(req.query.subject) {
	Standard.find().
		where('grade').gte(req.query.minGrade).lte(req.query.maxGrade).
		where('subject').equals(req.query.subject).
		sort('-created').populate('user', 'displayName').
		exec(function(err, standards) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(standards);
		}
		});
	} else {
	Standard.find().
		where('grade').gte(req.query.minGrade).lte(req.query.maxGrade).
		sort('-created').populate('user', 'displayName').
		exec(function(err, standards) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(standards);
		}
	});
	}
};

/**
 * Standard middleware
 */
exports.standardByID = function(req, res, next, id) { Standard.findById(id).populate('user', 'displayName').exec(function(err, standard) {
		if (err) return next(err);
		if (! standard) return next(new Error('Failed to load Standard ' + id));
		req.standard = standard ;
		next();
	});
};