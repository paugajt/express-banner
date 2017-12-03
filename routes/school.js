var express = require('express');
var router = express.Router();

// Require controller modules
var professor_controller = require('../controllers/professorController');
var course_controller = require('../controllers/courseController');
var section_controller = require('../controllers/sectionController');

// -------------------------------------PROFESSOR ROUTES-------------------------------------------

// GET School home page
router.get('/', professor_controller.index);

// GET request for creating a Professor. NOTE: Must come before any routes that display a Professor (uses id)
router.get('/professor/create', professor_controller.professor_create_get);

// POST request for creating a Professor.
router.post('/professor/create', professor_controller.professor_create_post);

// GET request to delete a Professor.
router.get('/professor/:id/delete', professor_controller.professor_delete_get);

// POST request to delete a Professor.
router.post('professor/:id/delete', professor_controller.professor_delete_post);

// GET request to update Professor.
router.get('/professor/:id/update', professor_controller.professor_update_get);

// POST request to update Professor.
router.post('/professor/:id/update', professor_controller.professor_update_post);

// GET request for one Professor.
router.get('/professor/:id', professor_controller.professor_detail);

// GET request for list of all Professors.
router.get('/professors', professor_controller.professor_list);

//------------------------------------COURSE ROUTES----------------------------------------------------

// GET request for creating a Course. NOTE: Must come before any routes that display a Course (uses id)
router.get('/course/create', course_controller.course_create_get);

// POST request for creating a Course.
router.post('/course/create', course_controller.course_create_post);

// GET request to delete a Course.
router.get('/course/:id/delete', course_controller.course_delete_get);

// POST request to delete a Course.
router.post('/course/:id/delete', course_controller.course_delete_post);

// GET request to update Course.
router.get('/course/:id/update', course_controller.course_update_get);

// POST request to update Course.
router.post('/course/:id/update', course_controller.course_update_post);

// GET request for one Course.
router.get('/course/:id', course_controller.course_detail);

// GET request for list of all Courses.
router.get('/courses', course_controller.course_list);

//---------------------------------SECTION ROUTES-----------------------------------------------------

// GET request for creating a Section. NOTE: Must come before any routes that dipslay a Section (uses id)
router.get('/section/create', section_controller.section_create_get);

// POST request for creating a Section.
router.post('/section/create', section_controller.section_create_post);

// GET request to delete a Section.
router.get('/section/:id/delete', section_controller.section_delete_get);

// POST request to delete a Section.
router.post('/section/:id/delete', section_controller.section_delete_post);

// GET request to update a Section.
router.get('/section/:id/update', section_controller.section_update_get);

// POST request to update a Section.
router.post('/section/:id/update', section_controller.section_update_post);

// GET request for one Section
router.get('/section/:id', section_controller.section_detail);

// GET request for list of all Sections
router.get('/sections', section_controller.section_list);

module.exports = router;