import { useState } from "react";
import Style from './Login.module.css';
import { useAuth } from "./AuthContext.jsx";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Veuillez remplir tous les champs");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            });
            let data = await response.json();
            try {
                data = await response.json();
            } catch {
                data = {};
            }
            if (!response.ok) {
                throw new Error(data.message || 'erreur de connexion');
            }
            console.log('connexion réussie', data);
            localStorage.setItem('token', data.token);

            login(data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        };
    }

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