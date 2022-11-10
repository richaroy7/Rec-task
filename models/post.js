const mongoose = require('mongoose')
 const postSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        possibleValues: ['Internship','Full-time'],
        required: true 
    },
    name:{
        type: String,
        required: true 
    },
   
    date:{
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: true 
    }
 })

 module.exports = mongoose.model('Post',postSchema)