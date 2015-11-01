'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Standard Schema
 */
var StandardSchema = new Schema({
	benchmark: {
		type: String,
		default: '',
		required: 'Please fill in the Standard name',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill in the Description',
		trim: true
	},
	subject: {
		type: String,
		default: '',
		required: 'Please fill in the Subject',
		trim: true
	},
	grade: {
		type: String,
		default: '',
		required: 'Please fill in the Grade or Grades',
		trim: true
	},
	bodyOfKnowledge: {
		type: String,
		default: '',
		required: 'Please fill in the Body of Knowledge',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Standard', StandardSchema);