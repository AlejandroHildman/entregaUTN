import React from "react";

const NovedadesItem = (props) => {

    const { titulo, subtitulo, cuerpo } = props

    return(
        <>
            <div className="novedad">
                <h3>{titulo}</h3>
                <h4>{subtitulo}</h4>
                <p>{cuerpo}</p>
            </div>
        </>
    )
}

export default NovedadesItem;