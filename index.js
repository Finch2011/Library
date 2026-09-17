import express from "express"
import mongoose from "mongoose";
import router from "./src/router/index.js";

const app = express();

mongoose.connect("mongodb+srv://admin:admin@cluster0.exduydk.mongodb.net/").then(()=>{
    console.log("app connected to mpngoDB ")
}).catch((e)=>{
    console.error(e)
})

app.use("/api" , router)


app.listen(3000 , ()=> console.log(`app running on port 3000 `))