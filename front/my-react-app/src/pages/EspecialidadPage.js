import React from 'react';

const EspecialidadPage = (props) => {
    return(
        <>
            <div className='containerEspecialidades'>

                <div className='imgEspecialidad' >
                    <img src='img/abogados.jpg' alt='Abogada en oficina' height={500}/>
                </div>

                <h2>Especialidades:</h2>

                <div className='especialidades'>
                    <div>
                        <p>Divorcios</p>
                    </div>
                    <div>
                        <p>Pensiones</p>
                    </div>
                    <div>
                        <p>Denuncias</p>
                    </div>
                    <div>
                        <p>Sucesiones</p>
                    </div>
                    <div>
                        <p>Cuota alimentaria</p>
                    </div>
                    <div>
                        <p>Registros</p>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default EspecialidadPage