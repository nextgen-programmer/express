import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config/index.js";
const auth =(...roles:string[])=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
       try {
         const token = req.headers.authorization;
        console.log({authtoken:token});
        if(!token){
            res.status(201).json({sucess:false,message:"you are not allow"})
        }
        const decoded = jwt.verify(token as string,config.app.JWT_secrete as string) as JwtPayload;
        console.log({decoded});
        req.user = decoded;
        if(roles.length && !roles.includes(decoded.role)){
            return res.status(500).json({sucess:false,message:"unauthorize"})
        }
        next();
       } catch (error:any) {
        res.status(500).json({sucess:false,message:"you are not authorize",Error:error.message})
        
       }
    }
}

export default auth