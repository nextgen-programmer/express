import express from 'express'
import { todoController } from './todo.controller.js'
const router = express.Router()

router.post("/",todoController.todosPost)
router.get("/",todoController.getTodo)
router.put("/:id",todoController.putTodo)
router.delete("/:id",todoController.deleteTodo)

export const todosRouter = {
    router 
}