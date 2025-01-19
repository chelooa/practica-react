import "./colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import hexToRgba from 'hex-to-rgba';

const Colaborador = (datosExternos) => {
    return  <div className="colaborador">

                <span style={{backgroundColor:datosExternos.colorPrimario}}>
                 <IoIosCloseCircle 
                 className="icono_cerrar" 
                 style={{color:hexToRgba(datosExternos.colorSecundario,0.6)}}
                 onClick={()=> datosExternos.eliminarColaborador(datosExternos.id)}
                 
                 />
                </span>

                <div className="encabezado" style={{backgroundColor: datosExternos.colorPrimario}}>
                    <img src={datosExternos.foto} alt={datosExternos.nombre} />
                </div>

                <div className="info">
                    <h4 style={{color:datosExternos.colorPrimario}}>{datosExternos.nombre}</h4>
                    <h5>{datosExternos.puesto}</h5>
                </div>
        </div>
}

export default Colaborador; // Exporta el componente