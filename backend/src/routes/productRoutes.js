import express from 'express';
import Product from '../models/products.js'

const router = express.Router();

router.post('/newProduct', async (req, res) => {
        try {
            const { name, brand, quantity, price, description } = req.body
            const newProduct = await new Product({ name, brand, quantity, price, description });
            await newProduct.save()
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message })
    }
});

router.put('/products/:id', async (req, res) => {
    try {
        const { name, brand, quantity, price, description } = req.body;
        const [updated] = await Product.findByIdAndUpdate(
            req.params.id,
            {name, brand, quantity, price, description },
            {new: true, runValidators: true},
        );

        if (!updated) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message });
    }
})

router.delete('/products/:id', async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id)
        if (!deleted) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        res.status(200).json({ message: "Produto excluído com sucesso!" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router