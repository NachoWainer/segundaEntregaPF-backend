//Falta terminar
import mongoose from "mongoose";

const messagesCollection='messages'

const messagesSchema= mongoose.Schema({
    user:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
})

export const messagesModel=mongoose.model(messagesCollection,messagesSchema)