import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import connectToMongo from "./database/db.js"

const app = express()
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

connectToMongo();

app.use('/api', productRoutes)
app.use('/api', loginRoutes)
const PORT = process.env.port || 3033

app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`)
})