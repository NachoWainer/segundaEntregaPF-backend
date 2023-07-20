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
    const cart = await cartsModel.findById(id).populate("products").lean()
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

router.delete('/:cid/product/:pid',async function(req,res){ //funciona
  let CartId = parseInt(req.params.cid)
  let ProductId = parseInt(req.params.pid)
  const {status,message,data} = await cartHandler.deleteProductFromCartIdById(CartId,ProductId)

  res.send({status:status,message:message,value:data})
})

router.put ('/:cid',async function(req,res){
  let {products} = req.body
  
  
  
  
  let CartId =req.params.cid
  try {
    await cartsModel.findByIdAndUpdate(CartId,products)
    res.send({status:"success",message:"Products updated",value:[]})
  } catch (error) {
    res.send({status:"error",message:error,value:[]})
  }
 
  
})

router.put ('/:cid/products/:pid',async function(req,res){
  let {cantidad} = req.body 
  cantidad = parseInt(cantidad)
  let CartId = parseInt(req.params.cid)
  let productId = parseInt(req.params.pid)
    try {
    let cart = await cartsModel.findById(CartId)
    let index =cart.products.findIndex(element => element.id === productId)
      if (index === -1) return res.send({status:"error",message:"el producto no esta en el carrito",value:[]})
      cart.products[index].quantity += cantidad
      await cart.save()
    res.send({status:"success",message:"Products updated",value:[]})
  } catch (error) {
    res.send({status:"error",message:error,value:[]})
  }
 
  
})

router.delete('/:cid',async function(req,res){
  let CartId = req.params.cid
  try {
    await cartsModel.deleteMany({})
    res.send({status:"success",message:"se eliminaron todos los productos del carrito " + `${CartId}`,value:[]})
  } catch (error) {
    res.send({status:"error",message:error,value:[]})
    
  }
  

})
export default router