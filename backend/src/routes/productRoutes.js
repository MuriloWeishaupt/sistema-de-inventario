import express from 'express';
import Product from '../models/products.js';

const router = express.Router();

// Criar um novo produto
router.post('/newProduct', async (req, res) => {
    try {
        const { name, model, serialNumber, material, quantity, price, location, status, supplier, qualityCertificate } = req.body;
        const newProduct = new Product({
            name,
            model,
            serialNumber,
            material,
            quantity,
            price,
            location,
            status,
            supplier,
            qualityCertificate
        });
        await newProduct.save();
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obter todos os produtos
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Atualizar um produto
router.put('/products/:id', async (req, res) => {
    try {
        const { name, model, serialNumber, material, quantity, price, location, status, supplier, qualityCertificate } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, model, serialNumber, material, quantity, price, location, status, supplier, qualityCertificate },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Deletar um produto
router.delete('/products/:id', async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }
        res.status(200).json({ message: "Produto excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
