import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (datosExternos) => {

    //Destructuración
    const {type="text"} = datosExternos;
    console.log(datosExternos.type)

    //La linea de abajo antes nos servía para manejar el estado del input pero ahora lo manejamos desde el componente padre
    // es decir el componente Formulario
    //const [valor, setValor] = useState("")

    const manejarCambio = (e) => {
        datosExternos.actualizarValor(e.target.value)
    }
    
    return <div className={`campo campo_${datosExternos.type}`}>
                <label>{datosExternos.titulo}</label>
                <input 
                placeholder={datosExternos.placeholder} 
                required={datosExternos.required} 
                value={datosExternos.valor} 
                onChange={manejarCambio}
                type={type}
                />
           </div>
}

export default CampoTexto; // Exporta el componente