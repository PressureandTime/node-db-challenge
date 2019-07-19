const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();
const db = require('../dbConfig');

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the projects',
    });
  }
});





module.exports = router;
