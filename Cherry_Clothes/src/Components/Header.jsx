import { useEffect } from "react";
import Style from './Header.module.css'; 


export function Header(){



    return(
        <header>
            <h1>Cherry Clothes</h1>

            <nav>
                <a href="#accueil">Accueil</a>
                <a href="#produits">Produits</a>
                <a href="#contact">Contact</a>
            </nav>

            <button className={Style.button}>Connexion</button>
        </header>
    )
}