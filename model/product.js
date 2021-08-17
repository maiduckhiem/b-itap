import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name:{
        type:String,
        strim:true,
        required:true,
        maxLength:32
    },
    description:{
        type:String,
        strim:true,
        required:true,
        maxLength:32
    }
},{timestamps:true})

module.exports =  mongoose.model('product',productSchema)