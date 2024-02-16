import React from 'react';

const HomePage = (props) => {
    return(
        <>
            <div class="presentacion">
                <div class="text">
                    <div class="contenido">
                        <h2>¿Necesitás defensa en un caso legal?</h2>
                        <p>Yo puedo ayudarte. <span class="contactoPresentacion">Contactame</span></p>
                    </div>
                </div>
                <div class="img">
                    <img src="img/balanza.jpg" alt="" />
                </div>
            </div>

            <div class="mica">
                <img class="micaimg" src="img/imagen mica 4x4" alt="foto mica cv" />
                <h3 class="forma"> ¡Hola! Soy Micaela Hildman Abogada recibida en la Univeridad Nacional De Buenos Aires desde el año 2023.
                    Tengo Experiencia en distintos estudios jurdicos con una trayectoria de más de 5 años.
                    Estoy tomando casos de forma particular para luego formar mi cartera de cliente con mi propio estudio, te puedo ayudar en los siguientes temas y relacionados.
                    Su consulta no molesta!
                </h3>
            </div>
            

            <div class="ramas">
                <h2>Asesoramiento Jurídico</h2>
                <ul class="cuadrado">
                    <li> Divorcios</li>
                    <li> Sucesiones</li>
                    <li> Pensiones</li>
                    <li> Cuota Alimentaria</li>
                    <li> Denuncias</li>
                    <li> Registros </li>
                </ul>
                <span> <h3 class="destacados"> Consulta tu duda <img class="wpp" src="img/wpp icono.png" alt="logo de wpp" />1123935917</h3> </span>
            </div>

       

            <div class="defensa">
                <h2>¿Necesitas defenderte?</h2>
                <p>Si tenés una causa legal, llama. Estamos para defender tu libertad y tus derechos.</p>
                <button>Contactanos</button>
            </div>
        </>
    ) 
}

export default HomePage