import mongoose from "mongoose";
import env from "dotenv"
env.config()
const databaseConnection=mongoose.connect(process.env.database).then(()=>{
    console.log("Connected to database Successfully")
}).catch((err)=>{
 console.log(err)
})
export default databaseConnection