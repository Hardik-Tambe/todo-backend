const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.js')

router.route("/addTodo").post(todoController.addTodo)
router.route("/updateTodo").patch(todoController.updateTodo)
router.route("/getTodo").get(todoController.getTodo)
router.route("/deleteTodo").delete(todoController.deleteTodo)
router.route("/deleteAllTodo").delete(todoController.deleteAllTodo)
router.route("/updateTodoChecked").patch(todoController.updateTodoChecked)





module.exports = router;