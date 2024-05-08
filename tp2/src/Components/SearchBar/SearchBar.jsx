import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleIconClick = () => {
    setMostrarInput(true);
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      setMostrarInput(false);
    }
  };

  document.addEventListener("keydown", handleEscKey);

  return (
    <div className="flex items-center">
      {mostrarInput ? (
        <input type="text" className={style.input} placeholder="Buscar..." />
      ) : (
        <button className={style.button} onClick={handleIconClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
