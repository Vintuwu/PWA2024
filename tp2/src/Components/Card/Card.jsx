import style from "./Card.module.css";

// Componente Card que muestra la información breve de una película
const Card = ({ movie }) => {
  return (
    <div className="flex rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-2 relative">
      <figure>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-t h-4/6 w-full object-cover"
        />

        <figcaption className="p-4 h-2/6">
          <p className="text-2xl mb-2 font-bold leading-relaxed text-gray-200">
            {movie.Title} ({movie.Year})
          </p>
          <p className="text-md font-normal leading-relaxed text-gray-300 pb-10">
            {movie.Plot}
            <br></br>
            Duración: {movie.Runtime}
            <br></br>
            Director: {movie.Director}
            <br></br>
            Actores: {movie.Actors}
            <br></br>
            Rating IMDBb: {movie.imdbRating}
          </p>
          <a
            href={`/details/${movie.id}`}
            className="flex justify-center align-middle px-3 py-2 text-medium font-medium text-center text-white rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-0 left-0 right-0"
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
