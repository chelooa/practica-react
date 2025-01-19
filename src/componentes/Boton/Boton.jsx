import "./Boton.css";

const Boton = (datosExternos) => {
    return <button className="boton">{datosExternos.texto}</button>
}

export default Boton; // Exporta el componente