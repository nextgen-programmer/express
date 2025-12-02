import { pool } from "../user/user.route.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import config from "../../config/index.js";
const authUser=async(email:string,password:string)=>{
        const result = await pool.query(`
        SELECT * FROM users WHERE email=$1
        `,[email]);
        if(result.rows.length===0){
            return null;
        }
        const user = result.rows[0]
        const match = bcrypt.compare(password,user.password)
        if(!match){
            return false;
        }
        const secreateKey = config.app.JWT_secrete;
        const token = jwt.sign({email:user.email,password:user.password},secreateKey as string,{expiresIn:"7h"})

        return {token,user}

}
export const authService={
    authUser
}