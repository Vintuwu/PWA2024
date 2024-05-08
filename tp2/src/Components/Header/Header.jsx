import style from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
const Header = ({ onInputChange }) => {

// Obtengo la direccion con useLocation
const location = useLocation();

// Comparo si la ubicacion es en la que no quiero que se muestre la SearchBar
const isDetailsPage = location.pathname.includes("/details");
  return (
    <header className={style.navbar}>
      <a href={"/"} className="text-gray-50 hover:text-gray-300">
        <h1 className="text-3xl">Peliculas Gucci</h1>
      </a>
      {/* Si no es details page se muestra efectivamente la SearchBar */}
      {!isDetailsPage && <SearchBar onInputChange={onInputChange} />}
    </header>
  );
};

export default Header;
