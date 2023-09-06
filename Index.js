import express from "express"
import databaseConnection from "./db.js"
import route from "./Routes/Todolist.js";

import corse from "cors"

const app=express();
app.use(corse({origin:["http://localhost:3000"]}))
const port="3002"
const host="localhost"
app.use(express.json());
app.use('/',route)


app.listen(port,()=>{
    console.log(`Server is running on ${host} ${port}`)
})