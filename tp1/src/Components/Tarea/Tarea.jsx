import React, { useState, useEffect} from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Tarea({filtro, countTareas}) {
    const [tareas, setTareas] = useState([{id: 1, descripcion: "Despertar", completado: false}, {id:2, descripcion:"Lavarse los dientes", completado:false}]);
    const [nuevaTareaDescripcion, setNuevaTareaDescripcion] = useState('');

    const modificarEstado = (id) => {
        const nuevaTareas = tareas.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, completado: !tarea.completado };
            }
            return tarea;
        });
        setTareas(nuevaTareas);
    };

    const agregarTarea = () => {
        const nuevaTarea = {
            id: tareas.length+1,
            descripcion: nuevaTareaDescripcion,
            completado: false
        }
        setTareas([...tareas, nuevaTarea]);
        setNuevaTareaDescripcion('');
    }

    var tareasFiltradas = Array();
    if (filtro != undefined) {
        tareas.forEach(tarea => { 
            if (tarea.descripcion.toLowerCase().includes(filtro.toLowerCase())) {
                tareasFiltradas = tareasFiltradas.concat(tarea);
            }
        });
    } else {
        tareasFiltradas = tareas;
    }
    useEffect(() => {countTareas(tareasFiltradas.length);}, [tareasFiltradas, countTareas]);
    const eliminarTarea = (id) => {
        const tareaEliminada = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareaEliminada);
    }

    return (
        <div>
            <div>
                <br/>
                <Input
                    tipo="text"
                    value={nuevaTareaDescripcion}
                    placeholder="Agregar nueva tarea"
                    onChangeHandler={(e) => setNuevaTareaDescripcion(e.target.value)}
                />
                <button onClick={agregarTarea}>Agregar tarea</button>
            </div>
            <ul>
                {tareasFiltradas.map((tarea) => (
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