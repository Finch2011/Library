import mongoose from "mongoose";
export default async function connectedToMongoDB(){
    try{
        await mongoose.connect(
            "mongodb+srv://admin:admin@cluster0.exduydk.mongodb.net/",
            console.log("APP connected To MongoDB")
        )
    }
    catch(err){
        console.error(err)
    }
}