import { NextFunction, Request, Response } from "express";

const logger1=(req:Request,res:Response,next:NextFunction)=>{
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next()
}
export const middlewareLogger={
    logger1
}