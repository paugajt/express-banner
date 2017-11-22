var Professor = require('../models/professor');

// Home page
exports.index = function(req, res) {
	res.send('NOT IMPLEMENTED: Site Home Page');
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