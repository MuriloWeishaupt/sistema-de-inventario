import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: String, required: true },
    serialNumber: { type: String, required: true },
    material: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    status: { type: String, required: true },
    supplier: { type: String, required: true },
    qualityCertificate: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
