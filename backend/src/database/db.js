import mongoose from 'mongoose';

const mongoURL = 'mongodb+srv://studies110011:o9SkyWCm5y01HLHP@inventario.b2u8o.mongodb.net/inventario-api'

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB')
    } catch (error) {
        console.log('Erro ao conectar ', error)
    }   
}

export default connectToMongo