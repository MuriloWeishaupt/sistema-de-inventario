function Login() {
    return (
        <div>
            <h1>Tela Login</h1>
            <form>
                <div>
                    <label>
                        Email:  
                        <input 
                        type="email"
                        />
                        
                    </label>
                </div>
                <div>
                    <label>
                        Senha: 
                        <input 
                        type="password"
                        value=""
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