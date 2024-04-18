import React, { useState } from 'react';
import Input from "../Input/Input";

export default function Tarea() {
    const [tareas, setTareas] = useState([{id: 1, descripcion: "Despertar", completado: false}, {id:2, descripcion:"Lavarse los dientes", completado:false}])

    return (
        <div>
            <div>
                <Input/>
            </div>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <input 
                            type="checkbox"
                            checked={tarea.completado}
                        />
                        <input
                            type="text"
                            value={tarea.id}
                            readOnly
                        />
                        <input 
                            type="text"
                            value={tarea.descripcion}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}