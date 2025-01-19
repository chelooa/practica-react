import React, { useState } from "react";
import "./ListaOpciones.css";

const ListaOpciones = (datosExternos) => {

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        datosExternos.actualizarEquipo(e.target.value)
    };

    return (
        <div className="lista_opciones">
            <label>Equipos</label>
            <select value={datosExternos.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccione un equipo...</option>
                {datosExternos.equipos.map((equipo, index) => {
                    return <option key={index} value={equipo}>{equipo}</option>
                })}
            </select>
        </div>
    );
};

export default ListaOpciones;