import { model, mongoose, Schema } from 'mongoose'

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Account = mongoose.model('Account', loginSchema)

export default Account