import { useState } from 'react'
import './Cadastra.css'

function Cadastra() {

    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    

    if (!name || !quantity || !price || !description) {
        alert('Por favor, Preencha todos os campos')
    }

    try {
        const response = await fetch('http://localhost:3033/api/newProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, brand, quantity, price, description}),
        })

        if (response.ok) {
            console.log('Produto cadastrado com sucesso')

            setName('')
            setBrand('')
            setQuantity('')
            setPrice('')
            setDescription('')
        }

    } catch (error) {
        console.log('Erro: ', error)
    }
    }    

    return(
        <div>
            <h1>Tela de Cadastro de inventário</h1>
            <div className="inventory-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Nome do produto:
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}    
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Marca: 
                            <input type="text"
                                   value={brand}
                                   onChange={(e) => setBrand(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Quantidade: 
                            <input type="number" 
                                   value={quantity}
                                   onChange={(e) => setQuantity(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Preço Unitário: 
                            <input type="number" 
                                   value={price}
                                   onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Descrição do produto: 
                            <input type="text" 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit" >Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastra