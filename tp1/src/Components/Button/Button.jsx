import React from 'react';

export default function Button({onClick, icon, tipo}) {
    return <button onClick={onClick} className={`btn btn-${tipo}`}>{icon}</button>;
}
