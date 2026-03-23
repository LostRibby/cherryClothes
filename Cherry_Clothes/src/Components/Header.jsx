
import Style from './Header.module.css'; 
import { Login } from './login';
import {Link, useNavigate} from 'react-router-dom';
import { useAuth} from "./AuthContext.jsx";


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
                <Link to='/'>Accueil</Link> |{""}
                <Link to='/produits'>Produits</Link> |{""}
                <Link to='/contact'>Contact</Link>

                {isLoggedIn?(
                    <button onClick={handleLogout}>Déconnexion</button>
                ):(
                    <Link to='/login'>Connexion</Link>
                )}
            </nav>
           
        </header>
    );
};