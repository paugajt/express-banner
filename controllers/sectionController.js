var Section = require('../models/section');

// Display list of all sections
exports.section_list = function(req, res) {
	res.send('NOT IMPLEMENTED: Section list');
};

// Display detail page for specified Section
exports.section_detail = function(req, res) {
	res.send('NOT IMPLEMENTED: Section detail: ' + req.params.id);
};

// Display Section create form on GET
exports.section_create_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Section create GET');
};

// Handle Section create on POST
exports.section_create_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Section create POST');
};

// Display Section delete form on GET
exports.section_delete_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Section delete GET');
};

// Handle Section delete on POST
exports.section_delete_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Section delete POST');
};

// Display Section update form on GET
exports.section_update_get = function(req,res) {
	res.send('NOT IMPLMENTED: Section update GET');
};

// Handle Section update on POST
exports.section_update_post = function(req, res) {
	res.send('Not IMPLEMENTED: Section update POST');
};