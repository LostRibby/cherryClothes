import { useState } from "react";
import Style from './Login.module.css';
import { useAuth } from "./AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:3000/api/');
        
            if(response.data.token){
                console.log('Token', response.data.token);
                localStorage.setItem('token',response.data.token); 
            }

        } catch (err) {
            console.log('erreur', error);
        }
    }
    console.log(error);
    console.log('connexion réussie');
    



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

                <button className={Style.submit1} type="submit">Se connecter</button>
            </form>
        </div>
    );
};