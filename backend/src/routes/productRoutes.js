import express from 'express';
import Product from '../models/products.js'

const router = express.Router();

router.post('/products', async (req, res) => {
        try {
            const { name, quantity, price, description } = req.body
            const newProduct = await Product.create({ name, quantity, price, description });
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message })
    }
});

router.put('/products/:id', async (req, res) => {
    try {
        const { name, quantity, price, description } = req.body;
        const [updated] = await Product.update(
            { name, quantity, price, description },
            { where: { id: req.params.id } }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        }
        const updatedProduct = await Product.findOne({ where: { id: req.params.id } });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
})

router.delete('/products/:id', async (req, res) => {
    try {
        const deleted = await Product.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        res.status(200).json({ message: "Produto excluído com sucesso!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router