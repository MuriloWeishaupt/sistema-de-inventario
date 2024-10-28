import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Por favor, Preencha todos os campos')
        }

    try {
        const response = await fetch('http://localhost:3033/api/loginAcesso', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password}),
        })

        
        if (response.ok) {
            navigate('/Cadastra')
        } else {
            alert('Invalid Credentials!')
        }
    }  catch (error) {
        console.log('Erro: ', error);
    }
  }

    return (
        <div>
            <h1>Tela Login</h1>
            <form onSubmit={handlesubmit}>
                <div>
                    <label>
                        Email:  
                        <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        
                    </label>
                </div>
                <div>
                    <label>
                        Senha: 
                        <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Logar</button>
                </div>
            </form>
        </div>
    )
}

export default Login