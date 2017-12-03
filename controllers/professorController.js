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
exports.professor_list = function(req, res, next) {

	Professor.find()
		.sort([['name', 'ascending']])
		.exec(function (err, list_professors) {
			if (err) { return next(err); }
			//Successful, so render
			res.render('professor_list', { title: 'Professor List', professor_list: list_professors});
		})
};

// Display detail page for specified Professor
exports.professor_detail = function(req, res, next) {

	async.parallel({
		professor: function(callback) {
			Professor.findById(req.params.id)
				.exec(callback);
		},
		professors_sections: function(callback) {
			Section.find({ 'professor': req.params.id }, 'section')
				.exec(callback);
		},
	}, function(err, results) {
		if (err) { return next(err); }
		//Successful, so render
		res.render('professor_detail', { title: 'Professor Detail', professor: results.professor, professor_sections: results.professor_sections});
	});
};
// Display Professor create form on GET
exports.professor_create_get = function(req, res) {
	res.render('professor_form', {title: 'Create Professor'});
};

// Handle Professor create from POST
exports.professor_create_post = function(req, res, next) {

	req.checkBody('name', 'Name must be specified.').notEmpty();
	req.checkBody('office', 'Office must be specified.').notEmpty();
	req.checkBody('email', 'Email must be specified.').notEmpty();

	req.sanitize('name').escape();
	req.sanitize('office').escape();
	req.sanitize('email').escape();
	req.sanitize('name').trim();
	req.sanitize('office').trim();
	req.sanitize('email').trim();

	// check for errors
	var errors = req.validationErrors();
	

	var professor = new Professor(
		{ name: req.body.name,
		  office: req.body.office,
		  email: req.body.email
		});
	if (errors) {
		res.render('professor_form', {title: 'Create Professor', professor: professor, errors: errors});
	return;
	}
	else {
		//Data from from is valid

		professor.save(function (err) {
			if (err) { return next(err);}
			//Successful - redirect to new professor record.
			res.redirect(professor.url);
		});
	}
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