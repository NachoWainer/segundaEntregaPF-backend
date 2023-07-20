
//Falta terminar
import mongoose from "mongoose";
import mongoosePaginate from  "mongoose-paginate-v2"



const cartsCollection='carts'

const cartsSchema= mongoose.Schema({
    id:{type:Number},
    products:{
        type:Array,
        default:[]
    }  
})
cartsSchema.plugin(mongoosePaginate)
const cartsModel =mongoose.model(cartsCollection,cartsSchema)
export default cartsModel;