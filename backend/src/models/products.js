import { model, mongoose, Schema } from 'mongoose'

const mongoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    brand: {
        type: String,
        required:true,
    },

    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('Product', mongoSchema)

export default Product