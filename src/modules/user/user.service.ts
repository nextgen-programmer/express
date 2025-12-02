import bcrypt from "bcryptjs";
import { pool } from "./user.route.js";

const createUser=async(payload:Record<string,unknown>)=>{
    const {name,role,email,password} = payload;
    const hashPass = await bcrypt.hash(password as string,10)

    await pool.query(`
    INSERT INTO users(name,role,email,password) VALUES($1,$2,$3,$4)
    `,[name,role,email,hashPass]);
}
const getUserdata=async()=>{
   const result= await pool.query(`
    SELECT * FROM users;
    `)
    return result
}

const getsingleUsr=async(id:string)=>{
    const result = await pool.query(`
        SELECT * FROM users WHERE id=$1
        `,[id])

        return result;
}

const putsingleUser=async(name:string,email:string,id:string)=>{
   const result =  await pool.query(`
      UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *
      `,[name,email,id])
    return result;
}

const deleteSingleUser =async(id:string)=>{
    const result = await pool.query(`
      DELETE FROM users WHERE id=$1 RETURNING *
      `,[id])

      return result
}





export const userServices={
    createUser,
    getUserdata,
    getsingleUsr,
    putsingleUser,
    deleteSingleUser
}