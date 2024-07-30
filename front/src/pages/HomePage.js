import '../styles/HomePage.css';
import React from "react";


const HomePage = (props) => {
    return (
        <main className="hover">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>
                    En Padel.Fixit, somos especialistas en la reparación y mantenimiento de equipamiento deportivo como raquetas de
                    tenis, palos de hockey y, especialmente, en el arreglo de paletas de pádel, nuestro servicio más destacado. Además,
                    ofrecemos tela de carbono de primera calidad, un material fundamental en la fabricación de productos de alto rendimiento
                    en deportes como el pádel. Desde ajustes precisos en raquetas hasta soluciones integrales para deportistas exigentes,
                    en Fixit nos comprometemos a proporcionar los mejores servicios y productos para optimizar el rendimiento deportivo.
                </p>
            </div>
            <div className="carbonos">
                <div className="card">
                    <img src="/img/HOME/CARBONO 3K TWIL.webp" className="img" alt="3k twil" />
                    <div className="cardbody">
                        <h5>Carbono 3K twil</h5>
                    </div>
                </div>
                <div className="card">
                    <img src="img/HOME/CARBONO 3K PLANE.png" class="img" alt="3k plane" />
                    <div className="cardbody">
                        <h5>Carbono 3K plane</h5>
                    </div>
                </div>
                <div className="card">
                    <img src="img/HOME/CARBONO 12K.png" class="img" alt="12k twil" />
                    <div className="cardbody">
                        <h5>Carbono 12K twil</h5>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;