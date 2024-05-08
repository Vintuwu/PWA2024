import style from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className={style.navbar}>
      {/* Logo */}
      <a href={"/"} className="text-gray-50 hover:text-gray-300">
        <h1 className="text-3xl">Peliculas Gucci</h1>
      </a>
      {/* Buscador */}
      <SearchBar/>
    </header>
  );
};
export default Header;