import { Request, Response } from "express";
import { authServices } from "./auth.service.js";

const loginUser = async(req:Request,res:Response)=>{
    const {email,password} = req.body;

    try {
         const result = await authServices.loginUser(email,password)
        res.status(200).json({sucess:true,message:"login sucessfully",data:result})
    } catch (error) {
        res.status(404).json({sucess:true,message:"login not sucessfully"})
        
    }

}
export const authController={
    loginUser
}