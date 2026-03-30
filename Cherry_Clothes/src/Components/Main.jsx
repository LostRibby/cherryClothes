import { useEffect } from "react";
import React from "react";
import Style from "./Main.module.css";
import AO1 from '../img/AO1.jpg';
import AO2 from '../img/AO2.jpg';
import AO3 from '../img/AO3.jpg';
import XD1 from '../img/XD1.jpg';
import XD2 from '../img/XD2.jpg';
import XD3 from '../img/XD3.jpg';
import LT1 from '../img/LT1.jpg';
import LT2 from '../img/LT2.jpg';
import LT3 from '../img/LT3.jpg';


export const Main = () => {



    return (
        <>

            <main>
                <h1 className={Style.h1}>Bienvenue sur Cherry Clothes</h1>
                
                <div className={Style.container}>

                    <div className={Style.creatorContainer}>
                        <div className={Style.creators}>

                            <h3>Anne Onyme</h3>
                            <button>Favoris</button>
                        </div>
                        <div className={Style.images}>
                            <img src={AO1} alt="Anne Onyme 1" />
                            <img src={AO2} alt='Anne Onyme 2' />
                            <img src={AO3} alt='Anne Onyme 3' />
                        </div>
                    </div>

                    <div className={Style.creatorContainer}>
                        <div className={Style.creators}>
                            <h3>Xavier Dubois</h3>
                            <button>Favoris</button>
                        </div>
                        <div>
                            <img src={XD1} alt="Xavier Dubois 1" />
                            <img src={XD2} alt="Xavier Dubois 2" />
                            <img src={XD3} alt="Xavier Dubois 3" />
                        </div>
                    </div>

                    <div className={Style.creatorContainer}>
                        <div className={Style.creators}>
                            <h3>Laure Trésor</h3>
                            <button>Favoris</button>
                        </div>
                        <div>
                            <img src={LT1} alt="Laure Trésor 1" />
                            <img src={LT2} alt="Laure Trésor 2" />
                            <img src={LT3} alt="Laure Trésor 3" />
                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}; 