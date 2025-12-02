import express, { Request, Response } from 'express'
import {project} from './config/DB.js'
import config from './config/index.js'
import { Pool } from 'pg'
import cors from 'cors'
import { logger } from './middleware/logger.js'
import { userRouter } from './modules/user/user.route.js'
import { todosRouter } from './modules/todo/todo.route.js'
import { authController } from './modules/auth/auth.controller.js'
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// users crud
app.use("/users",userRouter)
app.use("/todos",todosRouter.router)


// auth route
app.use("/auth",authController.loginUser)


project()
app.get('/', logger, (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app