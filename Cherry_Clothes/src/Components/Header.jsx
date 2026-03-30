
import Style from './Header.module.css'; 
import { Login } from '../Auth/login';
import {Link, useNavigate} from 'react-router-dom';
import { useAuth} from "../Auth/AuthContext.jsx";
import { RegisterForm } from '../Auth/Register.jsx';

export const Header = () => {
const {isLoggedIn, logout} = useAuth(); 
const navigate = useNavigate();

const handleLogout = () => {
    logout();
    navigate('/login');
};
    return(
        <header>
            <h1>Cherry Clothes</h1>

            <nav>
                <button><Link to='/'>Accueil</Link></button> 
                <button><Link to='/contact'>Contact</Link></button>

                {isLoggedIn?(
                    <button onClick={handleLogout}>Déconnexion</button>
                ):(
                    <button><Link to='/login'>Connexion</Link></button>
                )}

                <button><Link to='/register'>S'inscrire</Link></button>
            </nav>
           
        </header>
    );
};