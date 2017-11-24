var Professor = require('../models/professor');
var Course = require('../models/course');
var Section = require('..//models/section');

var async = require('async');

// Display the home page information
exports.index = function(req,res) {

	async.parallel({
		professor_count: function(callback) {
			Professor.count(callback);
		},
		course_count: function(callback) {
			Course.count(callback);
		},
		section_count: function(callback) {
			Section.count(callback);
		},
	}, function(err, results) {
		res.render('index', { title: 'MSU Banner Home', error: err, data: results});
	
	});
};


// Display list of all Professors
exports.professor_list = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor list');
};

// Display detail page for specified Professor
exports.professor_detail = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor detail: ' + req.params.id);
};

// Display Professor create form on GET
exports.professor_create_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor create GET');
};

// Handle Professor create from POST
exports.professor_create_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor create POST');
};

// Display Professor delete form on GET
exports.professor_delete_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor delete GET');
};

// Handle Professor delete on POST
exports.professor_delete_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor delete POST');
};

// Display Professor update form on GET
exports.professor_update_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor update GET');
};

//Hand Professor update on POST
exports.professor_update_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Professor update POST');
};