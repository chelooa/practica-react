import "./Equipo.css" // Importa el archivo de estilos
import Colaborador from "../Colaborador" // Importa el componente Colaborador
import hexToRgba from 'hex-to-rgba';

const Equipo = (equipos) => {


    //Destructuración 
    //Un ejemplo de eso con esto de los colores sería así
    // const {colorPrimario, colorSecundario, titulo} = equipos
    //y ahora podríamos utilizar directamente colorPrimario, colorSecundario y titulo sin estar 
    //escribiendo equipos.colorPrimario, equipos.colorSecundario y equipos.titulo
    //esto no lo aplicamos pero lo pudimos haber hecho

    const {colaboradores, eliminarColaborador, actualizarColorEquipo} = equipos

    if(colaboradores.length === 0){
        return null
    }

    //En resumen, los dobles corchetes son necesarios porque el atributo style de React requiere un objeto de JavaScript, 
    // y el primer par de corchetes sirve para indicar que estás usando una expresión de JavaScript dentro del JSX.
    //React espera un objeto de JavaScript para el atributo style.
    //En HTML estándar, el atributo style se define como un string que contiene estilos CSS (por ejemplo, style="background-color: red;"). 
    // Sin embargo, en React, este atributo recibe un objeto de JavaScript donde las propiedades son nombres de estilos en formato camelCase.

    const bordeObjeto = {
        borderBottom: `5px solid ${equipos.colorPrimario}`,
    }

    return <section className="equipo" style={{backgroundColor: hexToRgba(equipos.colorPrimario, 0.5)}}>
        <input 
        type="color" 
        className="input_color"
        value={equipos.colorPrimario}
        onChange={(e) => actualizarColorEquipo(e.target.value, equipos.id)} 
        />


        <h3 style={bordeObjeto}>{equipos.nombreEquipo}</h3>
        <div className="colaboradores">
            {colaboradores.map((colaborador, index) => {
                return <Colaborador 
                key={index} 
                nombre={colaborador.nombre} 
                puesto={colaborador.puesto} 
                foto={colaborador.foto} 
                id={colaborador.id}
                colorPrimario={equipos.colorPrimario}
                colorSecundario={equipos.colorSecundario}
                eliminarColaborador={eliminarColaborador}
                />
            })}
        
        </div>
    </section>

}

export default Equipo; // Exporta el componente