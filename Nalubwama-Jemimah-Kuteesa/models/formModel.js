const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        
    },
    lname:{
        type: String,
    },
    date:{
        type:String,
        required:true,
    },
    gender:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true
    },
    town:{
        type: String,
        required: true,
    },
    zip:{
        type: String,
        required: true,
    
    },
    contact1:{
        type: Number,
        
    },
    contact2:{
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
   
})

module.exports = mongoose.model("form",FormSchema);