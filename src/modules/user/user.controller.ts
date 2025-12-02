import { Request, Response } from "express";
import { pool } from "./user.route.js";
import { userServices } from "./user.service.js";

const getUser =async(req:Request,res:Response)=>{
  try {
    const result =await userServices.getUserdata()
    res.status(201).json({sucess:true,message:"data get sucessfully",data:result.rows})
  } catch (error) {
    res.status(404).json({sucess:true,message:"data get not found"})
  }
}

const getsingleUser = async(req:Request,res:Response)=>{
 const {id} = req.params;
  try {
      const restult = await userServices.getsingleUsr(id as string)
      res.status(201).json({sucess:true,message:"data get sucessfully",data:restult.rows[0]})
  } catch (error) {
    res.status(404).json({sucess:true,message:"data not found"})
  }

}

const createUser = async(req:Request,res:Response)=>{
 try {
    const result = await userServices.createUser(req.body)
    res.status(201).json({sucess:true,message:"data added sucessfully",data:result})
 } catch (error) {
      res.status(500).json({sucess:false,message:"data not added"})
 }

}

const putsingleuser = async(req:Request,res:Response)=>{
        const {id} = req.params;
      const {name,email} = req.body;
      try {
        const result = await userServices.putsingleUser(name,email,id as string)
    
        res.status(201).json({sucess:true,message:"data update sucessfully",data:result.rows})
      } catch (error) {
        res.status(404).json({sucess:true,message:"data not found"})
      }
    }

const deleleSingleUser=async(req:Request,res:Response)=>{
  const {id}= req.params;
  try {
    const result = await userServices.deleteSingleUser(id as string)
    res.status(201).json({sucess:true,message:"data delete sucessfully",data:result})
  } catch (error) {
    res.status(404).json({sucess:true,message:"data not delete"})
  }
}

export const userController={
    createUser,
    getUser,
    getsingleUser,
    putsingleuser,
    deleleSingleUser
}