import { Schema , model } from "mongoose";

const librarySchema = new Schema ({
    title:{type:String,required : true},
    description: {type:String , default:""} ,
    author: {type:String , default:""} 
})

export const Library = model("Library" , librarySchema)
