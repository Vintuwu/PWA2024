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
        <div className="col-6">
            <Title texto="Lista de quehaceres"/>
            <Input tipo="text" value={valueInputBuscador} placeholder="Buscar tareas" onChangeHandler={onChangeHandlerBuscador}/>
            <Tarea filtro={valueInputBuscador} countTareas={contarTareas}/>
            <p>Total de tareas: {numeroTareas}</p>
        </div>
    );
    
}

export default Home;