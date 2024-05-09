import { useParams } from "react-router-dom";
import style from "./Details.module.css";
import React, { useState, useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  // Búsqueda del json que contenga la información de la pelicula con el id obtenido
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
  // Si no se encontró la pelicula con el id obtenido se devuelve un mensaje
  if (!movie) {
    return (
      <div className="min-h-screen flex min-w-screen">
        <p className="m-auto text-xl">
          No existe ninguna pelicula con el id N°{id}
        </p>
      </div>
    );
  }
  // Se devuelen los detalles completos de la película encontrada
  return (
    <div className={style.contenedor}>
      {/** Imagen de la película */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className={style.imagen}
      />
      <div className={style.contenedor_textos}>
        {/** Título y año de la película */}
        <p className="text-4xl mb-4 font-bold leading-relaxed text-gray-100">
          {movie.Title} ({movie.Year})
        </p>
        <hr className="h-px mb-4 bg-gray-500 border-0"></hr>
        {/** Detalles completos de la película */}
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
