
import Style from './Header.module.css'; 
import { Login } from './login';

export function Header(){



    return(
        <header>
            <h1>Cherry Clothes</h1>

            <nav>
                <a href="#accueil">Accueil</a>
                <a href="#produits">Produits</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}