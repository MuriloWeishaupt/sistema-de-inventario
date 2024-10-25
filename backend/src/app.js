import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'

const app = express()
app.use(bodyParser.json());
app.use(cors());

app.use('/api', productRoutes)
const PORT = process.env.port || 3033

app.use(express.json())



app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`)
})