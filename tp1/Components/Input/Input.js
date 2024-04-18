import React, {useState} from 'react';
export default function Input () {
    const [nombre, setNombre] = useState('')
    return (
        <input
            value={nombre} 
            onChange={e => setNombre(e.target.value)}
        />
    )
}