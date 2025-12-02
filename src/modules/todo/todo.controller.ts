import { Request, Response } from "express";
import { todoService } from "./todo.service.js";

const todosPost = async (req: Request, res: Response) => {
    const { user_id, title } = req.body;
    console.log(user_id, title);
    try {
        const result = await todoService.todoPost(user_id, title)
        res.status(201).json({ sucess: true, message: "todos data added sucessfully", data: result })
    } catch (error: any) {
        res.status(404).json({ sucess: false, message: "don't add todos data", Error: error.message })
    }
}

const getTodo = async (req: Request, res: Response) => {

    try {
        const result = await todoService.getTodo()
        res.status(201).json({ sucess: true, message: "data get sucessfully", data: result.rows })
    } catch (error: any) {
        res.status(404).json({ sucess: false, message: "data added sucessfully", Error: error.message })
    }
}

const putTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body

    try {
        const result = await todoService.putTodo(title, id as string)
        res.status(201).json({ sucess: true, message: "todos data update sucessfully", data: result.rows })


    } catch (error) {
        res.status(404).json({ sucess: false, message: "don't updata todos data" })
    }
}

const deleteTodo =async()=>{
    async(req:Request,res:Response)=>{
  const {id}=req.params;
  try {
    const result = await todoService.deleteTodo(id!)
      res.status(201).json({sucess:true,message:"data delete sucessfully",data:result})
  } catch (error) {
    res.status(404).json({sucess:true,message:"don't data delete"})
  }
}

}


export const todoController = {
    todosPost,
    getTodo,
    putTodo,
    deleteTodo
}