import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name: { type:String, required: true },
    age: String,
    favoriteFood: {type:Array, required: true } ,

});



export const User = mongoose.model("userSchema", userSchema);