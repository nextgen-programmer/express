import { pool } from "./user.route.js";

const createUsermodel=async()=>{
     await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        role VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        age INT,
        phone_num VARCHAR(15),
        create_at TIMESTAMP DEFAULT NOW(),
        update_at TIMESTAMP DEFAULT NOW()
        )
        
        `);
}
export const userModels = {
    createUsermodel
}