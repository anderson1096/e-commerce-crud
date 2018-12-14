const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');

const productService = new ProductsService();

// index
router.get('/', async (req, res, next) => {
    const { tags } = req.query;
    try {
        const products = await productService.getProducts({ tags });
        res.status(200).json({
            data: products,
            message: 'product listed'
        });
    }catch(err){
        next(err);
    }
    
});

// show
router.get('/:productId', async (req, res, next) => {
    const { productId } = req.params;
    try{
        const product = await productService.getProduct({ productId });
        res.status(200).json({
            data: product,
            message: 'product retrieved'
        });
    }catch(err){
        next(err);
    }
    
});

// create
router.post('/', async (req, res, next) => {
    const { body: product } = req;
    console.log("req", req.body);
    try{
        const createdProduct = await productService.createProduct({ product });
    
        res.status(201).json({
            data: createdProduct,
            message: 'product created'
        });
    }catch(err){
        next(err);
    }

   
});

// updated
router.put('/:productId', async (req, res, next) => {
    const { productId } = req.params;
    const { body: product } = req;
    try{
        const updatedProduct = await productService.updateProduct({ productId, product });
        res.status(200).json({
            data: updatedProduct,
            message: 'product updated'
        });
    }catch(err){
        next(err);
    }
    
});

// delete
router.delete('/:productId', async (req, res, next) => {
    const { productId } = req.params;

    try{
        const deletedProduct = await productService.deleteProduct({ productId });
        res.status(200).json({
            data: deletedProduct,
            message: 'product deleted'
        });
    }catch(err){
        next(err);
    }
    
});


module.exports = router;