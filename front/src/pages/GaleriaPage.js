import '../styles/GaleriaPage.css' ;
import React from "react";

const GaleriaPage = (props) => {
    return (
        <main className="hover">
        <section className="galeria">
            <h2>Trabajos en Proceso</h2>
            <div className="galeria-col">
                <div className="galeria-con">
                    <img src="img/GALERIA/PROCESS2.png" alt="Trabajo en proceso 1"/>
                </div>
                <div className="galeria-con">
                    <img src="img/GALERIA/PROCESS3.png" alt="Trabajo en proceso 2"/>
                </div>
                <div className="galeria-con">
                    <img src="img/GALERIA/PROCESS1.png.jpg" alt="Trabajo en proceso 3"/>
                </div>
            </div>
        </section>

        <section className="galeria">
            <h2>Trabajos Terminados</h2>
            <div className="galeria-col">
                <div className="galeria-con">
                    <img src="img/GALERIA/FINISH1.png.jpg" alt="Trabajo terminado 1"/>
                </div>
                <div className="galeria-con">
                    <img src="img/GALERIA/FINISH2.png.jpg" alt="Trabajo terminado 2"/>
                </div>
                <div className="galeria-con">
                    <img src="img/GALERIA/FINISH3.png.jpg" alt="Trabajo terminado 3"/>
                </div>
            </div>
        </section>
    </main>
    );
}

export default GaleriaPage;