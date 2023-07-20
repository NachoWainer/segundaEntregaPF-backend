

import express from 'express'

const router= express.Router();



router.get('/realtimeproducts',(req,res)=>{
 
    res.render('realTimeProducts',{})
    

})
router.get('/products',async (req,res)=>{
    
    res.render('products',{})
    

})
router.get('/chat',async (req,res)=>{
    res.render('chat',{})
})

export default router;
