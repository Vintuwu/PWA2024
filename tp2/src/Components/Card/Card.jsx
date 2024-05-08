import style from "./Card.module.css";
// Componente Card que muestra la información breve de una película
const Card = ({ movie }) => {
  return (
    <div className="flex rounded-xl shadow-xl hover:shadow-indigo-600/20 bg-neutral-800 duration-300 hover:-translate-y-2 overflow-hidden">
      <figure>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-4/6 w-full object-cover"
        />
        <figcaption className="p-4 relative h-2/6">
          <p className="text-2xl mb-2 font-bold leading-relaxed text-neutral-200">
            {movie.Title} ({movie.Year})
          </p>
          <div>
            {movie.Genre.map((genero, index) => (
              <span
                key={index}
                className="inline-block bg-neutral-200 rounded-full px-3 py-1 text-md font-semibold text-neutral-800 mr-2 mb-2"
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
            Rating IMDBb: {movie.imdbRating}
          </p>
          <a
            href={`/details/${movie.id}`}
            className="flex justify-center align-middle px-3 py-2 text-medium font-medium text-center text-white rounded-lg hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-800 hover:bg-blue-600 dark:focus:ring-blue-800 w-1/4 absolute bottom-4 right-4"
          >
            Ver más
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
          </a>
        </figcaption>
      </figure>
    </div>
  );
};
export default Card;
