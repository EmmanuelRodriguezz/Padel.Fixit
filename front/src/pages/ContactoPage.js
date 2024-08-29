import '../styles/ContactoPage.css';
import React from "react";
import { useState } from 'react';
import axios from 'axios';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }


    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="hover">
            <section className="">
                <div className="contacto">
                    <h2>Contacto</h2>
                    <form action="/contacto" method="post" onSubmit={handleSubmit} className='formulario'>

                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>

                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>

                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>

                        <p>
                            <label>Comentario</label>
                            <textarea name="comentario" value={formData.comentario} onChange={handleChange}></textarea>
                        </p>

                        <p className="centrar">
                            <input type="submit" value="Enviar" />
                        </p>

                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

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