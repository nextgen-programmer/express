import { Pool } from 'pg'

// DB
import config from './index.js'
import { userModels } from '../modules/user/user.model.js'
import { todoModels } from '../modules/todo/user.todo.js'
const pool = new Pool({
    connectionString:config.app.DB
})

const inialDb =async()=>{
    await userModels.createUsermodel();
    await todoModels.createTodoModels();
    
}
export {inialDb as project };