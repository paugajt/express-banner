var Course = require('../models/course');
var Professor = require('../models/professor');
var Section = require('../models/section');

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
exports.course_create_get = function(req, res) {
	res.send('NOT IMPLEMENTED: Course create GET');
};

// Handle Course create on POST
exports.course_create_post = function(req, res) {
	res.send('NOT IMPLEMENTED: Course create POST');
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