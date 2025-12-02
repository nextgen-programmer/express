import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import config from "../config/index.js";
const auth=()=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const token =  req.headers.authorization;
        console.log({token});
        if(!token){
            return `unauthrizer people`
        }
        const decode  = jwt.verify(token as string,config.app.JWT_secrete as string)
        console.log({decode});
        next()
    }    
}

export default auth