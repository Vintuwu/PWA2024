import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onInputChange }) => {
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleIconClick = () => {
    setMostrarInput(true);
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      setMostrarInput(false);
    }
  };

  // set de valueInputBuscador
  const [valueInputBuscador, setValueInputBuscador] = useState("");
  const onChangeHandlerBuscador = (event) => {
    setValueInputBuscador(event.target.value);
    onInputChange(event.target.value);
  };
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
