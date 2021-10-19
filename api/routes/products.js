const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({
        message:'handle to get all products'
    });
});

router.post('/',(req,res)=>{
    res.status(200).json({
        message:'handle POST  a poduct'
    });
});

router.get('/:productId',(req,res)=>{
    const productId= req.params.productId;
      res.status(200).json({
          message:'handle Patch  a poduct'
      });
  });
  

router.patch('/:productId',(req,res)=>{
  const productId= req.params.productId;
    res.status(200).json({
        message:'handle Patch  a poduct'
    });
});

router.delete('/:productId',(req,res)=>{
    const productId= req.params.productId;
      res.status(200).json({
          message:'handle Patch  a poduct'
      });
  });

module.exports= router;
