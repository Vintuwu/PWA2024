import style from "./Card.module.css";
import LinkButton from "../Button/LinkButton";
// Componente Card que retorna la información breve de una película y un link para ver mas detalles
const Card = ({ movie }) => {
  return (
    <div className={style.card}>
      <figure>
        {/** Imagen de la película */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className={style.poster}
        />
        <figcaption className={style.contenedor_detalles}>
          {/** Titulo y año de la película */}
          <p className={style.titulo}>
            {movie.Title} ({movie.Year})
          </p>
          {/** Detalles breves de la película */}
          <div>
            {movie.Genre.map((genero, index) => (
              <span
                key={index}
                className={style.burbuja_genero}
              >
                {genero}
              </span>
            ))}
          </div>
          <p className="text-md font-normal leading-relaxed text-neutral-300">
            {movie.Plot}
            <br></br>
            Actores: {movie.Actors}
            <br></br>
            Director: {movie.Director}
            <br></br>
            Duración: {movie.Runtime}
            <br></br>
            Rating IMDb: {movie.imdbRating}
          </p>
          {/** Link para ver los detalles de la película */}
          <LinkButton
            destino={`/details/${movie.id}`}
            texto="Ver más"
            icon={
              <svg
                className="rtl:rotate-180 w-5 h-5 ms-2 mt-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            }
          />
        </figcaption>
      </figure>
    </div>
  );
};
export default Card;
