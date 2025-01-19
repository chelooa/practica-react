import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (datosExternos) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")
    const [tituloEquipo, setTituloEquipo] = useState("")
    const [colorEquipo, setColorEquipo] = useState("")


    const {registrarColaborador}= datosExternos;
    const {crearEquipo}= datosExternos;

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            titulo: tituloEquipo,
            colorPrimario: colorEquipo,
            colorSecundario: "#ffffff"
        }
        crearEquipo(datosAEnviar)
    }

    return <section className="formulario"> 
            <form className="formulario_form" onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear con el colaborador</h2>
                <CampoTexto 
                titulo="Nombre"
                placeholder="Ingresar nombre..." 
                required ={true} 
                valor={nombre} 
                actualizarValor={setNombre}
                />
                <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto..." 
                required ={true} 
                valor={puesto}
                actualizarValor={setPuesto}
                />
                <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de la foto..." 
                required valor={foto}
                actualizarValor={setFoto}
                />
                <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={setEquipo}
                equipos={datosExternos.equiposNombres}
                />
                <Boton texto="Crear"/>
            </form>
            <form className="formulario_form" onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear un nuevo equipo</h2>
                <CampoTexto 
                titulo="Nombre de equipo"
                placeholder="Ingresar nombre equipo..." 
                required ={true} 
                valor={tituloEquipo} 
                actualizarValor={setTituloEquipo}
                />
                <CampoTexto 
                titulo="Color equipo" 
                placeholder="Ingresar el color..." 
                required ={true} 
                valor={colorEquipo}
                actualizarValor={setColorEquipo}
                type="color"
                />
                <Boton texto="Registrar Equipo"/>
            </form>
         </section>
}

export default Formulario; // Exporta el componente