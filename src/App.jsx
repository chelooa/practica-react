import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Header from './componentes/header/header'
import Formulario from './componentes/Formulario/Formulario'
import MiOrg from './componentes/MiOrg'
import Equipo from './componentes/Equipo'
import Footer from './componentes/Footer/Footer'


function App() {
  const [mostrarFormulario, actualizarMostrarFormulario] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  { 
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://avatars.githubusercontent.com/u/91544872?v=4 ",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  { 
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  //lista de equipos
  const [equipos, actualizarEquipos] = useState([
    { 
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#fff",
    },
    {
      id: uuidv4(),
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#fff"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#fff",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#fff",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#fff",
    },
    {
      id: uuidv4(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#fff",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#fff",
    },
 ]
)

  const cambiarMostrar = () => {
    actualizarMostrarFormulario(!mostrarFormulario)
  }

  //Función para registrar un colaborador
  const registrarColaborador = (datosColaborador) => {
    console.log("Nuevo Colaborador", datosColaborador) 
    //Spread operator es algo que se utiliza para copiar un array o un objeto y serían los tres puntos antes de la variable
    actualizarColaboradores([...colaboradores, datosColaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColorEquipo = (color, id) => {
    console.log("Color actualizado", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
        }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //crear equipo
  const crearEquipo = (datosNuevoEquipo) => {
    console.log("Nuevo Equipo", datosNuevoEquipo)
    actualizarEquipos([...equipos,{...datosNuevoEquipo, id: uuidv4()}])
  }

  //Lista de Equipos la explicación de lo dea abajo es que se crea un array de objetos
  //cada objeto tiene un titulo, un colorPrimario y un colorSecundario
  //que nos servira para darle color a cada card de equipo
  


  //Ternario --> condicion ? valorSiEsTrue : valorSiEsFalse

  //lo unico que hace es mandar desde MiOrg a App el llamado a la funcion cambiarMostrar
  //y en App se cambia el estado de mostrarFormulario con eso de ternario se muestra o no el formulario
  return (
    <>
      <div>
        <Header/>
        {/*mostrarFormulario === true ? <Formulario/> : null*/}
        {mostrarFormulario && 
        <Formulario 
          equiposNombres={equipos.map((tituloEquipo)=>tituloEquipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
        }
        <MiOrg 
          cambiarMostrarDatos={cambiarMostrar} />

        {
        /* 
        Esto es como pensabamos hacerlo al principio que es posible pero se tiene que hace todo de manera manual

        <Equipo nombreEquipo="Programción"/>
        <Equipo nombreEquipo="FrontEnd"/>
        <Equipo nombreEquipo="Data Science"/>
        <Equipo nombreEquipo="Devops"/>
        <Equipo nombreEquipo="UX y Diseño"/>
        <Equipo nombreEquipo="Móvil"/>
        <Equipo nombreEquipo="Innovación y Gestión"/> */}

        {/*Explicaci´n del código de abajo, bueno tenemos equipos.map que nos permite iterar sobre el array equipos que tenemos arriba
        cada necesitamos los parametros equipoDatos e index debido a que equipoDatos nos ayuda a "traer" los objetos contenidos en el array
        para luego colocarles un identificador con key y se le aplica el identificador con ayuda de index que nos permite recorrer el array
        con el numero determinado de objetos que se encuentran en el array y esto se hace una vez que llamamos al componente que hicimos
        llamado Equipo en la carpeta Equipo entonces luego le mandamos estos datos a ese componente y entonces en este caso tenemos siete
        equipos y crea los 7 equipos y se lo mandamos por medio de las props es decir "propiedades" que es la manera de comunicación
        entre componentes de React*/}
        {
          equipos.map((equipoDatos, index) => {
            return <Equipo 
            key={index} 
            nombreEquipo={equipoDatos.titulo} 
            colorPrimario={equipoDatos.colorPrimario} 
            colorSecundario={equipoDatos.colorSecundario}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipoDatos.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColorEquipo={actualizarColorEquipo}
            id={equipoDatos.id}
            />
          }
        )}

        <Footer/>
      </div>
    </>
  )
}

export default App
