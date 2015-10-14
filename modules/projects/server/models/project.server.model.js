'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SubjectSchema = new Schema({
	subjectName: {
		type: String,
		default: ''
	},
	mainIdea: {
		type: String,
		default: ''
	},
	standards: {
		type: String, //Should be a list of standards in the future
		default: ''
	},
	details: {
		type: String,
		default: ''
	}
});

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Project name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	grades: {
		gradeMin: {
			type: Number,
			default: 0
		},
		gradeMax: {
			type: Number,
			default: 12
		}
	},
	ask: {
		goal: {
			type: String,
			default: ''
		},
		problemStatement: {
			type: String,
			default: ''
		},
		constraints: {
			type: String,
			default: ''
		}
	},
	imagine: {
		brainstorm: {
			type: String,
			default: ''
		},
		plan: {
			type: String,
			default: ''
		},
		materials: {
			type: String,
			default: ''
		}
	},
	essentialDetails: {
		mathDetails: {
			type: [SubjectSchema]
		},
		scienceDetails: {
			type: [SubjectSchema]
		},
		litDetails: {
			type: [SubjectSchema]
		},
		ssDetails: {
			type: [SubjectSchema]
		},
		communicateFindings: {
			type: String,
			default: ''
		}
	}
});


mongoose.model('Project', ProjectSchema);
mongoose.model('Subject', SubjectSchema);
