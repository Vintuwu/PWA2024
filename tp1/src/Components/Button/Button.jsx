import React from "react";

export default function Button({ onClick, icon, tipo, classNameProp }) {
    return (
      <button onClick={onClick} className={`${classNameProp} btn btn-${tipo}`}>
        {icon}
      </button>
    );
  }
  
