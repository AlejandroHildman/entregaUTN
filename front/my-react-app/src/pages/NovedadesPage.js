import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Novedades from '../components/NovedadesItem';

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        }
        cargarNovedades();
    }, []);

    return(
        <>
            <div className='novedades'>
            <h2>Novedades</h2>
                { loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <Novedades key={item.id} titulo={item.titulo} subtitulo={item.subtitulo} cuerpo={item.cuerpo} />) 
                )}
            </div>
        </>
    ) 
}

export default NovedadesPage