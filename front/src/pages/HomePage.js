import '../styles/HomePage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';


const HomePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className="">
            <div className='hold'>

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
                <h2>Novedades</h2>
                <div className='novedades'>

                    {
                        loading ? (
                            <p>Cargando...</p>
                        ) : (
                            novedades.map(item => <NovedadItem key={item.id}
                                title={item.titulo} subtitle={item.subtitulo}
                                imagen={item.imagen} body={item.cuerpo} />)
                        )
                    }
                </div >
            </div>


        </section>


    );
}

export default HomePage;