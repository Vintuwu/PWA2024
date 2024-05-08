import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onInputChange }) => {
  const [mostrarInput, setMostrarInput] = useState(false);

  // Mostrar el input con un click
  const handleIconClick = () => {
    setMostrarInput(true);
  };

  // Cerrar el buscador cuando aprete escape
  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      setMostrarInput(false);
    }
  };

  // Set de valueInputBuscador
  const [valueInputBuscador, setValueInputBuscador] = useState("");
  const onChangeHandlerBuscador = (event) => {
    setValueInputBuscador(event.target.value);
    onInputChange(event.target.value);
  };

  // Espera que aprete escape para cerrar el buscador
  document.addEventListener("keydown", handleEscKey);

  return (
    <div className="flex items-center">
      {mostrarInput ? (
        <input
          type="text"
          value={valueInputBuscador}
          className={style.input}
          placeholder="Buscar..."
          onChange={onChangeHandlerBuscador}
        />
      ) : (
        <button className={style.button} onClick={handleIconClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      )}
    </div>
  );
};

export default SearchBar;