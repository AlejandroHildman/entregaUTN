import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msj, setMsj] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsj('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsj(response.data.message);
        if(response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return(
        <div className='seccionContacto'>
            <h2 class="tituloContacto">Contacto</h2>
                <div class="contacto">
                    <div class="formulario">
                        <form action="/contacto" method='post' onSubmit={handleSubmit} class="formularios">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name='nombre' value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name='email' value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="telefono">Telefono </label>
                            <input type="text" name='telefono' value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p class="">
                            <label for="mensaje">Mensaje</label>
                            <input name='mensaje' value={formData.mensaje} onChange={handleChange}/>
                        </p>             
                        <p className='enviar'>
                            <input type="submit" value="Enviar" />
                        </p>
                        </form>
                        {sending ? <p>Enviando...</p> : null}
                        {msj ? <p>{msj}</p> : null}
                    </div>

                    <div class="datos">
                        <h2> Otras Vias de Comunicación </h2>
                        <p> Tambien pueden contactarme por los siguientes medios </p>
                        <ul>
                            <li> <img class="wpp" src="img/wpp icono.png" /> Telefono: 1123935917</li>
                            <li> <img class="correo" src="img/correo icono.png" /> Email: micaelahildman97@gmail.com </li>
                            <li> <img class="facebook" src="img/facebooklogo.jpg" /> Facebook: Micahildman</li>
                        </ul>
                    </div>
                </div>
        </div>
    ) 
}

export default ContactoPage