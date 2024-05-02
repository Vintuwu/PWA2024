import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.navbar}>
            {/* Logo */}
            <h1 className="text-3xl">Peliculas Gucci</h1>
            {/* Links */}
            <div>
                <ul className="flex">
                    <li><a href="" className={style.nav_link}>Inicio</a></li>
                    <li><a href="" className={style.nav_link}>Peliculas</a></li>
                    <li><a href="" className={style.nav_link}>Algún</a></li>
                    <li><a href="" className={style.nav_link}>Lugar</a></li>
                </ul>
            </div>
            {/* Otros links */}
            <div>
                <ul className="flex">
                    <li><a href="" className={style.nav_link}>Login</a></li>
                    <li><a href="" className={style.nav_link}>Buscar</a></li>
                </ul>
            </div>

        </header>
    )
}
export default Header