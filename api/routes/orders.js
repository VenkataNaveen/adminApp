const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        message:'handle to get all orders'
    });
});

router.post('/',(req,res)=>{
    res.status(200).json({
        message:'handle POST  an order'
    });
});

router.get('/:orderId',(req,res)=>{
    const orderId= req.params.orderId;
      res.status(200).json({
          message:'handle Patch  a order'
      });
  });
  

router.patch('/:orderId',(req,res)=>{
    const orderId= req.params.orderId;
    res.status(200).json({
        message:'handle Patch  a order'
    });
});

router.delete('/:orderId',(req,res)=>{
    const orderId= req.params.orderId;
      res.status(200).json({
          message:'handle delete  an order'
      });
  });


module.exports= router;
