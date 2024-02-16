import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav>
                <ul className='holderNav'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/especialidad">Especialidad</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
        </nav>
        
    )
}

export default Nav