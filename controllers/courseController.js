var Course = require('../models/course');
var Professor = require('../models/professor');
var Section = require('../models/section');

var async = require('async');

// Display list of all Courses
exports.course_list = function(req, res, next) {

	Course.find()
		.sort([['course_name', 'ascending']])
		.exec(function (err, list_courses) {
			if (err) { return next(err); }
			//Successful, so render
			res.render('course_list', {title: 'Course List', course_list: list_courses});
		})
};

// Display detail page for specified Course
exports.course_detail = function(req, res, next) {

	async.parallel({
		course: function(callback) {
			Course.findById(req.params.id)
				.exec(callback);
		},
		course_sections: function(callback) {
			Section.find({'course': req.params.id}, 'section number')
				.exec(callback);
		},
	}, function(err, results) {
		if (err) {return next(err); }
		//Successful so render
		res.render('course_detail', {title: 'Course Detail', course: results.course, course_sections: results.course_sections});
	
	});
};
// Display Course create form on GET
exports.course_create_get = function(req, res, next) {
	res.render('course_form', {title: "Create Course"});
}

// Handle Course create on POST
exports.course_create_post = function(req, res, next) {

	//Check that the name field is not empty
	req.checkBody('course_name', 'Course name required').notEmpty();

	//Trim and escape the name field
	req.sanitize('course_name').escape();
	req.sanitize('course_name').trim();

	//Run the validators
	var errors = req.validationErrors();

	//Create a course object with escaped and trimmed data.
	var course = new Course(
		{ course_name: req.body.course_name}
		);

	if (errors) {
		//If there are errors render the form again, passing the previously entered values and errors
		res.render('course_form', { title: 'Create Course', course: course, errors: errors});
	return;
	}
	else {
		//Data from form is valid.
		//Check if Course with same name already exists
		Course.findOne({ 'course_name': req.body.name })
			.exec( function(err, found_course) {
				console.log('found_course: ' + found_course);
				if (err) {return next(err); }

				if (found_course) {
					//Course exists, redirect to its detail page
					res.redirect(found_course.url);
				}
				else {

					course.save(function (err) {
						if (err) { return next(err); }
						//Course saved. Redirect to course detail page
						res.redirect(course.url);
					});
				}
			});
	}
};

// Display Course delete form on GET
exports.course_delete_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Course delete GET');
};

// Handle Course delete on POST
exports.course_delete_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Course delete POST');
};

// Display Course update form on GET
exports.course_update_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Course update GET');
};

// Handle Course update on POST
exports.course_update_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Course update POST');
};