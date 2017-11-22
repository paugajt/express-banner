#! /usr/bin/env node

console.log('This script populates som test professors, courses and sections to the database. Specified database as argument - populatedb mongodb://paugajt:Th3great1@ds113566.mlab.com:13566/banner');

//Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
	console.log('Error: You need to specify a valid mongodb URL as the first argument');
	return
}

var async = require('async')
var Section = require('./models/section')
var Professor = require('./models/professor')
var Course = require('./models/course')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var professors = []
var courses = []
var sections = []

function professorCreate(name, office, email, sections, cb) {
	professordetail = {name:name, office:office, email:email, sections:sections }

	var professor = new Professor(professordetail);

	professor.save(function (err) {
		if (err) {
			cb(err, null)
			return
		}
		console.log('New Professor: ' + professor);
		professors.push(professor)
		cb(null, professor)
	});
}

function courseCreate(course_name, sections, cb) {
	coursedetail = {course_name:course_name, sections:sections}

	var course = new Course(coursedetail);

	course.save(function (err) {
		if (err) {
			cb(err, null)
			return
		}
		console.log('New Course: ' + course);
		courses.push(course)
		cb(null, course)
	});
}

function sectionCreate(section_number, professor, course, cb) {
	sectiondetail = {section_number:section_number, professor:professor, course:course}

	var section = new Section(sectiondetail);

	section.save(function (err) {
		if (err) {
			cb(err, null)
			return
		}
		console.log('New Section: ' + section);
		sections.push(section)
		cb(null, course)
	});
}

function createProfessors(cb) {
	async.parallel([
		function(callback) {
			professorCreate('Steve Beaty', 'AES 200', 's.beaty@msudenver.edu', sections[0], callback);
		}
		/*function(callback) {
			professorCreate('Justin Pauga', 'WBD', 'j.pauga@msudenver.edu', sections[0], callback);
		}*/
		],
		cb);
}

function createCourses(cb) {
	async.parallel([
		function(callback) {
			courseCreate('WebApp', sections[0], callback);
		}
		/*function(callback) {
			courseCreate('Software Development', sections[0], callback);
		}*/
		],
		cb);
}

function createSections(cb) {
	async.parallel([
		function(callback) {
			sectionCreate(101, professors[0], courses[0], callback);
		}
		/*function(callback) {
			sectionCreate(4320, professor[1], course[1], callback);
		}*/
		],
		cb);
}

async.series([
	createProfessors,
	createCourses,
	createSections
]);