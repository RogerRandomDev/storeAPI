const mongoose= require('mongoose');

const ProductSchema = new mongoose.Schema({
    Name:{
        type: String,
        required:true  
    },
    Price:{
        type: Number,
        default: 1.0,
    },
    Category: {
        type: String,
        default: 'food',
        required:true
    }
})

module.exports=mongoose.model("Products",ProductSchema)
//Model.find({completed:true})