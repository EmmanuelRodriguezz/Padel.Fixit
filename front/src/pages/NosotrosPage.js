import '../styles/NosotrosPage.css' ;
import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="hover">
            <section className="quienes-somos">
                <div className="holder">
                    <h2>¿Quiénes Somos?</h2>
                    <p>Somos PadelFixit, una empresa dedicada al servicio especializado en la reparación y mantenimiento de
                        equipamiento deportivo. Nos especializamos en la reparación de paletas de pádel y ofrecemos
                        productos de alta calidad como la tela de carbono 3K twil.</p>
                    <p>Nuestro compromiso es proporcionar soluciones integrales para deportistas exigentes, mejorando el
                        rendimiento de su equipamiento deportivo con ajustes precisos y materiales de primera calidad.</p>
                </div>
            </section>
            <section className="equipo">
                <div className="holder">
                    <div className="card1">
                        <div className="img1">
                            <img src="img/MEMBER1.png" alt="miembro 1"/>
                        </div>
                        <div className="descripcion">
                            <h3>NICOLAS MANZONI</h3>
                            <p>GERENTE DE PRODUCCION</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="img1">
                            <img src="img/NOSOTROS/MEMBER2.png" alt="miembro 2"/>
                        </div>
                        <div className="descripcion">
                            <h3>FEDERICO MANZONI</h3>
                            <p>PRODUCTOS Y VENTAS</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="img1">
                            <img src="img/NOSOTROS/MEMBER3.png" alt="miembro 3"/>
                        </div>
                        <div className="descripcion">
                            <h3>EMMANUEL RODRIGUEZ</h3>
                            <p>ETAPA DEL PROCESO 1</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="img1">
                            <img src="img/NOSOTROS/MEMBER4.png" alt="miembro 4"/>
                        </div>
                        <div className="descripcion">
                            <h3>ABRIL MANZONI</h3>
                            <p>ETAPA DEL PROCESO 2</p>
                        </div>
                    </div>
                    <div className="card1">
                        <div class="img1">
                            <img src="img/NOSOTROS/MEMBER5.png" alt="miembro 5"/>
                        </div>
                        <div className="descripcion">
                            <h3>ANDREA CAPOTORTO</h3>
                            <p>ETAPA DEL PROCESO 3</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default NosotrosPage;