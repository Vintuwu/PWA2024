import React, { useState, useEffect} from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Tarea({countTareas}) {
    const [tareas, setTareas] = useState([{id: 1, descripcion: "Despertar", completado: false}, {id:2, descripcion:"Lavarse los dientes", completado:false}]);
    useEffect(() => {countTareas(tareas.length);}, [tareas, countTareas]);

    const modificarEstado = (id) => {
        const nuevaTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completado: !tarea.completado };
            }
            return tarea;
        });
        setTareas(nuevaTareas);
    };

    const eliminarTarea = (id) => {
        const tareaEliminada = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareaEliminada);
    }

    return (
        <div>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <input 
                            type="checkbox"
                            checked={tarea.completado}
                            onChange={() => modificarEstado(tarea.id)}
                        />
                        <input
                            type="text"
                            value={tarea.id}
                            readOnly
                        />
                        <input 
                            type="text"
                            value={tarea.descripcion}
                            readOnly
                        />
                        <Button text="Eliminar" onClick={ () => eliminarTarea(tarea.id)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}