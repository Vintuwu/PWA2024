import React from "react";
import style from "./LinkButton.module.css";

{/** Componente LinkButton que retorna un link que lleva hacia un destino con estilos de button */}
export default function LinkButton({texto, icon, destino}) {
  return (
    <a href={destino} className={style.link_button}>
      {texto}{icon}
    </a>
  );
}
