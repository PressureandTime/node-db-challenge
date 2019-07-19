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


router.post('/', async (req, res) => {
  try {
    const project = await Projects.addProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error adding the project',
    });
  }
});


router.post('/action', async (req, res) => {
  try {
    const action = await Projects.addAction(req.body);
    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error adding the action',
    });
  }
});


router.get('/:id/actions', async (req, res) => {
  try {
    const project = await Projects.findById(req.params.id);
    const actions = await Projects.findProjectActions(req.params.id);

    if (project) {
      res.status(200).json({ ...project, actions });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the Project',
    });
  }
});






module.exports = router;
