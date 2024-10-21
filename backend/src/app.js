import express from "express"

const app = express()

const PORT = process.env.port || 3033

app.use(express.json())



app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando no endereço: http://localhost:${PORT}`)
})