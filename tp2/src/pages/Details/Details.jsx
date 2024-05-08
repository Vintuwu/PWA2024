import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`../src/mocks/movie-${id}.json`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error: no se pudo obtener la película.", error);
      }
    };

    fetchMovie();
  }, [id]);
  
  if (!movie) {
    // esto podria borrarse o ser un mensaje de que no existe una pelicula con ese id de la url
    return <div>Cargando</div>;
  }
  return (
    <div className="flex rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-2">
      <figure>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-t h-auto w-full object-cover"
        />

        <figcaption className="p-4">
          <p
            className="text-xl mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
            x-text="post.title"
          >
            {movie.Title} ({movie.Year})
          </p>
          <small
            className="leading-5 text-gray-500 dark:text-gray-400"
            x-text="post.description"
          >
            {movie.Plot}
          </small>
        </figcaption>
      </figure>
    </div>
  );
};

export default Details;
