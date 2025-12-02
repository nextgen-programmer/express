import bcrypt from "bcryptjs";
import { pool } from "../user/user.route.js"
import jwt from "jsonwebtoken"
import config from "../../config/index.js";

const loginUser = async(email:string,password:string)=>{
    const result = await pool.query(`
        SELECT * FROM users WHERE email=$1
        `,[email])

    if(result.rows.length===0){
        return null;
    }
    const user=result.rows[0];
    const match = await bcrypt.compare(password,user.password);
    if(!match){
        return false;
    }
    const token = jwt.sign({name:user.name,email:user.email,role:user.role},config.app.JWT_secrete as string,{expiresIn:"7d"})
    console.log({token});
    return {token,user}

}

export const authServices = {
    loginUser
}