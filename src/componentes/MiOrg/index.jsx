import "./MiOrg.css";
import { useState } from "react";

const MiOrg = (datosExternos) => {
    //Estado  - Hooks
    //Use state es un hook que permite agregar estado a un componente funcional
    //useState recibe un valor inicial y retorna un arreglo con dos elementos
    //la estructura siempre es const [nombreVariable,funcionQueModificaNombreVariable] = useState(valorInicial)]
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = (datosExternos) => {
    //     console.log("Se hizo click")
    //     actualizarMostrar(!mostrar)
    // }


    return <section className="org_section">
        <h3 className="title">Mi organización</h3>
        <img src="public\img\minimzardos.png" alt="add" onClick={datosExternos.cambiarMostrarDatos}/>


    </section>
}

export default MiOrg; // Exporta el componente