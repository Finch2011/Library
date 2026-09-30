import mongoose from "mongoose";
const authorSchema = new mongoose.Schema({
    "firstName" : {type : String , required : true},
    "LastName" : {type : String , required : true},
    "Age" : {type : Number , required : true , min:18},
    "birth" : {type : String , default:""}
})

export const Author = mongoose.model("Author" , authorSchema)
