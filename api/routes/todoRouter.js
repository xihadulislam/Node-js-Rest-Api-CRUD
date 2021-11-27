const { Router } = require('express')
const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoControllers')

router.get('/',todoController.getAllTodoList)
router.post('/',todoController.addSingleTodo)
router.get('/:id',todoController.getSingleTodo)
router.put('/:id',todoController.updateSingleTodo)
router.delete('/:id',todoController.deleteSingleTodo)

module.exports = router