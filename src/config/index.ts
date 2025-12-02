import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.join(process.cwd(),'.env')})

const config ={
    app:{
        port:process.env.PORT,
        DB:process.env.CONNECTION_STR,
        JWT_secrete:process.env.JWT_SECRET
    }
}
export default config