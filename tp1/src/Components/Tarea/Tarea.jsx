import React, {useState} from 'react'

export default function Tarea(){
    const [tarea, setTareas] = useState([{id: 1, descripcion: "Despertar", completado: false}])
}
const [nuevaTarea, setNuevaTarea] = useState('');

const handleCambiarNuevaTarea = (event) => {
    setNuevaTarea(event.target.value);
}

const handleAniadirTarea = () => {
    if (nuevaTarea.trim() !== ''){
        const nuevaTarea = {
            id: tarea.length+1,
            descripcion: nuevaTarea,
            completado: false
        }
        setTareas([...task, nuevaTarea]);
        setNuevaTarea('');
    }
}