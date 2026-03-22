import { useState } from "react";
import Style from './Login.module.css';

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users',{
                method: 'POST',
                headers: {'content type': 'application/json' }, 
                body : JSON.stringify({email, password})           
             }); 
             const data = await response.json(); 

             if(!response.ok){
                throw new Error(data.message || 'erreur de connexion'); 
             }
             console.log('connexion réussie', data); 
             localStorage.setItem('token', data.token); 

             window.location.href = '/dashboard'; 
        }catch(err){
            setError(err.message);
    };}
    
    return (
        <div className={Style.container}>
            <form className={Style.loginform} onSubmit={handleSubmit}>
                <h2>Connexion</h2>
                {error && <p className={Style.error}>{error}</p>}

                <div className={Style.inputgroup}>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrez votre adresse mail" />

                </div>
                <div className={Style.inputgroup}>
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrez votre mot de passe" />
                </div>

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}; 