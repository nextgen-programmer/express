import { Request, Response } from "express";
import { authService } from "./auth.service.js";

const authUser = async(req:Request,res:Response)=>{
    const {email,password}= req.body;
    try {
        const result = await authService.authUser(email,password);
        res.status(201).json({sucess:true,message:"signin sucessfully",data:result})
    } catch (error) {
        res.status(404).json({sucess:false,message:"sing in invalid"})
    }
}
export const authController = {
    authUser
}