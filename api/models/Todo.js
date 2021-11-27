const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchma = new Schema({

    title:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    description:{
        type:String,
        trim:true,
    },
    create_At:{
        type:String,
        trim:true,
    },
    priority:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum : ['Complete','incomplete'],
        default: 'incomplete',
    }

})

const todo = mongoose.model('Todos',TodoSchma)
module.exports = todo