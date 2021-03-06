const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema;

const ContactusSchema = new mongoose.Schema({
    name :{
        type:String,
        requried:true,
        trim:true,
        maxLength:32
    },
    email :{
        type:String,
        trim:true,
        required:true,
        unique:true
      },
   message :{
        type : String,
        requried:true,
        maxLength:32
    }
})
module.exports = mongoose.model("Contactus",ContactusSchema)