import Title from "../../Components/Title/Title"; 
import logo from "../../logo.svg"; 
import Button from "../../Components/Button/Button"; 
import Tarea from "../../Components/Tarea/Tarea"; 
import Input from "../../Components/Input/Input"; 
import style from "./Home.module.css"; 
import { useState } from "react"; 
 
const Home = () => { 
  const [valueInputBuscador, setValueInputBuscador] = useState(""); 
 
  const [numeroTareas, setNumeroTareas] = useState(0); 
 
  const contarTareas = (cantidad) => { 
    setNumeroTareas(cantidad); 
  }; 
 
  const onChangeHandlerBuscador = (event) => { 
    setValueInputBuscador(event.target.value); 
  }; 
 
  return ( 
    <div className={`col-md-6 col-12 rounded-top-5 ${style.contenedor ? style.contenedor : ''}`}>
      <Title texto="Lista de quehaceres" /> 
      <Input tipo="text" classNameProp={"m-2 p-2 w-75"} value={valueInputBuscador} placeholder="Buscar tareas" onChangeHandler={onChangeHandlerBuscador} /> 
      <Tarea filtro={valueInputBuscador} countTareas={contarTareas} /> 
      <p>Total de tareas: {numeroTareas}</p> 
    </div> 
  ); 
 
} 
 
export default Home;