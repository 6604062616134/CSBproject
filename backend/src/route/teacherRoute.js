const express = require('express');
const router = express.Router();
const TeacherController = require('../controller/teacherController');

router.get('/all', TeacherController.getAllTeachers);
router.get('/project-mentors', TeacherController.getMentorNamesForAllProjects);

module.exports = router;