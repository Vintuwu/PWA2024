import Title from "../../Components/Title/Title";
import logo from "../../logo.svg";
import Button from "../../Components/Button/Button";
import Tarea from "../../Components/Tarea/Tarea";
import Input from "../../Components/Input/Input";
import style from "./Home.module.css";
import { useState } from "react";

const Home = () => {
    const [valueInput1, setValueInput1] = useState("");
    const [numeroTareas, setNumeroTareas] = useState(0);
    const contarTareas = (cantidad) => {
        setNumeroTareas(cantidad);
    };
    const onChangeHandler = (event) => {
        setValueInput1(event.target.value);
        // actualiza la lista de tareas
    };

    
    
    
    return (
        <div className="style.container">
            <img src={logo} className="App-logo" alt="logo" />
            <Title texto="Lista de quehaceres"/>
            <Input tipo="text" value={valueInput1} placeholder="Buscar tareas" onChangeHandler={onChangeHandler}/>
            <Tarea filtro={valueInput1} countTareas={contarTareas}/>
            <p>Total de tareas: {numeroTareas}</p>
        </div>
    );
    
}

export default Home;