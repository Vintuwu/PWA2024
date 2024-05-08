import { useParams } from "react-router-dom";
import style from "./Details.module.css";
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
    return (
      <div className="min-h-screen flex min-w-screen">
        <p className="m-auto text-xl">
          No existe ninguna pelicula con el id N°{id}
        </p>
      </div>
    );
  }
  return (
    <div className={style.contenedor}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className={style.imagen}
      />
      <div className={style.contenedor_textos}>
        <p className="text-4xl mb-4 font-bold leading-relaxed text-gray-100">
          {movie.Title} ({movie.Year})
        </p>
        <hr className="h-px mb-4 bg-gray-500 border-0"></hr>
        <p>{movie.Plot}</p>
        <div className="mt-auto gap-2 flex flex-col">
          <p>
            <strong>Clasificación cinematográfica de la MPAA: </strong>
            {movie.Rated}
          </p>
          <p>
            <strong>Fecha de lanzamiento:</strong> {movie.Released}
          </p>
          <p>
            <strong>Duración:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Géneros:</strong> {movie.Genre.join(", ")}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Escritor/es:</strong> {movie.Writer}
          </p>
          <p>
            <strong>Actores:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Paises de grabación: </strong> {movie.Country}
          </p>
          <p>
            <strong>Premiaciones: </strong> {movie.Awards}
          </p>
          {movie.Ratings.map((rating, index) => (
            <p key={index}>
              <strong>{rating.Source}:</strong> {rating.Value}
            </p>
          ))}
          <p>
            <strong>Ganancias: </strong> {movie.BoxOffice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
