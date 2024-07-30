import '../styles/ContactoPage.css' ;
import React from "react";


const ContactoPage = (props) => {
    return (
        <main className="hover">
            <section className="formulario">
                <div className="holder">
                    <h2>Contacto</h2>
                    <form action="submit_form.php" method="POST">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="asunto">Asunto:</label>
                            <input type="text" id="asunto" name="asunto" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="contacto">
                <div className="contacto-info">
                    <div className="info">
                        <h3>Dirección de Entrega</h3>
                        <p>Cuenca 3330</p>
                    </div>
                    <div className="info">
                        <h3>Dirección de Retiro</h3>
                        <p>Argerich 2557</p>
                    </div>
                </div>

                <div className="contacto-info">
                    <div className="info">
                        <h3>Celular 1</h3>
                        <p>
                            <i className="fa fa-phone"></i> 11 3692-2820 <br />
                            (Contacto: Federico Manzoni) <br />
                            (Ventas y Carbono)
                        </p>
                    </div>
                    <div className="info">
                        <h3>Celular 2</h3>
                        <p>
                            <i className="fa fa-phone"></i> 11 6171-4450 <br />
                            (Contacto: Nicolas Manzoni) <br />
                            (Presupuestos y Reparaciones)
                        </p>
                    </div>
                    <div className="info">
                        <h3>Celular 3</h3>
                        <p>
                            <i className="fa fa-phone"></i> 2923 54-0005 <br />
                            (Contacto: Emmanuel Rodriguez) <br />
                            (Reparaciones)
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ContactoPage;