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
                <Button
                    onClick={agregarTarea}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                        </svg>}
                    tipo={"success"}
                />
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
                        <Button onClick={ () => eliminarTarea(tarea.id)}
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                      </svg>}
                        tipo={"danger"} />
                    </li>
                ))}
            </ul>
        </div>
    )
}