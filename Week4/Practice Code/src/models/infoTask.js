import mongoose from "mongoose";
const taskSchema = new  mongoose.Schema({

title:{
    type : String,
    required: true,
},
description: {
    type : String,
required: true,
},
status: {
type : String,
required: true,
},

priority : {
    type : String,
    required: true,
},
assigned_to: {
    type : String,
    required: true,},

created_at:{
type :Date,
default : () => new   Date(),
},

updated_at:{
    type :Date,
    default : () => new   Date(),
    },
})


export default mongoose.model('Task', taskSchema);
