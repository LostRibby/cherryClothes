
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
                <button className={Style.headerbtn}><Link to='/'>Accueil</Link></button> 
                <button className={Style.headerbtn}><Link to='/contact'>Contact</Link></button>

                {isLoggedIn?(
                    <button className={Style.headerbtn} onClick={handleLogout}>Déconnexion</button>
                ):(
                    <button className={Style.headerbtn}><Link to='/login'>Connexion</Link></button>
                )}

                <button className={Style.headerbtn}><Link to='/register'>S'inscrire</Link></button>
            </nav>
           
        </header>
    );
};