const express = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, changeTaskStatus, deleteTask } = require('../controllers/taskController');
const taskRouter = express.Router();

taskRouter.post('/add', createTask);
taskRouter.get('/', getAllTasks);
taskRouter.get('/:id', getTaskById);
taskRouter.put('/:id', updateTask);
taskRouter.post('/:id', changeTaskStatus);
taskRouter.delete('/:id', deleteTask);
module.exports = taskRouter;
