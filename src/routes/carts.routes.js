import  {Router}  from "express";


import  {CartManager}  from "../dao/dbManagers/cartManager.js";
import cartsModel from "../dao/models/carts.js";

const router = Router();
const cartHandler = new CartManager;



router.post('/',async function(req,res){
  
  const {status,message,data} = await cartHandler.addCart()
  res.send({status:status,message:message,value:data})

})

router.get('/:cid',async function(req,res){
  let id = parseInt(req.params.cid)
  try {
    const cart = await cartsModel.findById(id).populate("products")
    res.send({status:"success",message:"Carrito obtenido correctamente",value:cart})
    
  } catch (error) {
    res.send({status:"error",message:error,value:[]})
    
  }
 
})

router.post('/:cid/product/:pid',async function(req,res){
  let CartId = parseInt(req.params.cid)
  let ProductId = parseInt(req.params.pid)
  const {status,message,data} = await cartHandler.addProductToCartIdById(CartId,ProductId)

  res.send({status:status,message:message,value:data})
})

router.delete('/:cid/product/:pid',async function(req,res){ //implementar
  let CartId = parseInt(req.params.cid)
  let ProductId = parseInt(req.params.pid)
  const {status,message,data} = await cartHandler.deleteProductFromCartIdById(CartId,ProductId)

  res.send({status:status,message:message,value:data})
})

router.put ('/:cid',async function(req,res){//implementar
  let {productos} = req.body 
  productos.forEach(async producto => {
    await cartsModel.updateOne()

    
  });
  let CartId = parseInt(req.params.cid)

  const {status,message,data} = await cartHandler.updateProductsOfCartId(CartId)

  res.send({status:status,message:message,value:data})
})

router.delete('/:cid',async function(req,res){//implementar
  let CartId = parseInt(req.params.cid)
  const {status,message,data} = await cartHandler.deleteProductsFromCartId(CartId)

  res.send({status:status,message:message,value:data})
})
export default router