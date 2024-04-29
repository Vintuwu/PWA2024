import Title from "../../Components/Title/Title";
import logo from "../../logo.svg"; //No se esta utilizando
import Button from "../../Components/Button/Button";
import Tarea from "../../Components/Tarea/Tarea";
import Input from "../../Components/Input/Input";
import style from "./Home.module.css";
import { useState } from "react";

//Muy Buen trabajo
//Buen uso de css module.
//Buen nombrado de variables y funcionces.

//Obervaciones:

//Tienen codigo que no esta siendo utilizado
//Podrian crear un componente Tarea que sea el renderizado de una tarea en si. Esta marcado en el map a lo que me refiero
//Podrian agregar algunas imagenes de como se ve la aplicacion corriendo al readme?
//Intenten instalar prettier o algun identador automatico para que el codigo quede mas ordenado y facil de leer.

const Home = () => {
  const [valueInputBuscador, setValueInputBuscador] = useState("");

  //Numero de tareas no esta siendo utilizado para renderizar nada
  const [numeroTareas, setNumeroTareas] = useState(0);

  const contarTareas = (cantidad) => {
    setNumeroTareas(cantidad);
  };

  const onChangeHandlerBuscador = (event) => {
    setValueInputBuscador(event.target.value);
  };

  return (
    <div
      className={`col-md-6 col-12 rounded-top-5 ${
        style.contenedor ? style.contenedor : ""
      }`}
    >
      <Title texto="Lista de quehaceres" />
      <Input
        tipo="text"
        classNameProp={"m-2 p-2 w-75"}
        value={valueInputBuscador}
        placeholder="Buscar tareas"
        onChangeHandler={onChangeHandlerBuscador}
      />
      <Tarea filtro={valueInputBuscador} countTareas={contarTareas} />
    </div>
  );
};

export default Home;
