const express = require('express');
const router = express.Router();
const productMock = require('../../utils/mocks/products');
// index
router.get('/', (req, res) => {
    res.status(200).json({
        data: productMock,
        message: 'product listed'
    });
});

// show
router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        data: productMock[0],
        message: 'product retrieved'
    });
});

// create
router.post('/', (req, res) => {
    res.status(201).json({
        data: productMock[0],
        message: 'product created'
    });
});

// updated
router.put('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        data: productMock,
        message: 'product updated'
    });
});

// delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        data: productMock[0],
        message: 'product deleted'
    });
});


module.exports = router;