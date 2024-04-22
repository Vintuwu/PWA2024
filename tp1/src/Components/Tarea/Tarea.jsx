import React, { useState, useEffect } from "react";
import style from "./Tarea.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Tarea({ filtro, countTareas }) {
  // useStates
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [nuevaTareaDescripcion, setNuevaTareaDescripcion] = useState('');

  const [tareasCompletadas, setTareasCompletadas] = useState(0);
  //

  // useEffects
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    setTareasCompletadas(tareas.filter(tarea => tarea.completado).length);
  }, [tareas]);

  useEffect(() => {
    countTareas(tareasFiltradas.length);
  }, [tareasFiltradas, countTareas]);
  //

  // modificadores
  const agregarTarea = () => {
    const nuevaTarea = {
      id: tareas.length + 1,
      completado: false,
      descripcion: nuevaTareaDescripcion,
    };
    setTareas([...tareas, nuevaTarea]);
    setNuevaTareaDescripcion("");
  };

  //Podria ser handleCheck
  const modificarEstado = (id) => {
    const nuevaTareas = tareas.map(tarea => {
      if (tarea.id === id) {
        const completado = !tarea.completado;
        return { ...tarea, completado };
      }
      return tarea;
    });
    setTareas(nuevaTareas);
  };

  const eliminarTarea = (id) => {
    const tareaEliminada = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareaEliminada);
  };
  //

  // funciones
  var tareasFiltradas = Array();
  if (filtro != undefined) {
    tareas.forEach((tarea) => {
      if (tarea.descripcion.toLowerCase().includes(filtro.toLowerCase())) {
        tareasFiltradas = tareasFiltradas.concat(tarea);
      }
    });
  } else {
    tareasFiltradas = tareas;
  }

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      agregarTarea();
    }
  };
  //
  return (
    <>
      {tareasFiltradas.length === 0 ? (
        <div className="d-flex justify-content-between">
          <p className="m-auto mb-3">No tienes tareas pendientes, estás libre</p>
        </div>
      ) : (
        <ul>
          {tareasFiltradas.map((tarea) => (
            <li key={tarea.id}>
              <div className="d-flex justify-content-between">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={tarea.completado}
                  onChange={() => modificarEstado(tarea.id)}
                />
                <label className={tarea.completado ? style.tachado : ""}>{tarea.descripcion}</label>
              </div>
              <Button
                onClick={() => eliminarTarea(tarea.id)}
                classNameProp={style.botonEliminar}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="30"
                    fill="currentColor"
                    className="bi bi-x-circle"
                    viewBox="0 0 16 20"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                }
                tipo={"danger"}
              />
            </li>
          ))}
        </ul>
      )}

      <div className="d-flex w-75 m-auto">
        <Input
          classNameProp="col-10 ps-2"
          tipo="text"
          value={nuevaTareaDescripcion}
          placeholder="Agregar nueva tarea"
          onKeyDown={keyDownHandler}
          onChangeHandler={(e) => setNuevaTareaDescripcion(e.target.value)}
        />
        <Button
          classNameProp="col-2 rounded-start-0 rounded-end-4"
          onClick={agregarTarea}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          }
          tipo={"success"}
        />
      </div>
      <p>Tareas completadas: {tareasCompletadas} de {tareas.length}</p>
    </>
  );
}