import Card from "../Card/Card";
import style from "./CardList.module.css";
import React, { useState, useEffect } from "react";

// Componente CardList que muestra la lista de películas guardadas en el json
const CardList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await fetch(`../src/mocks/movies.json`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setMovies(result);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    fetchMovies();
  });

  var filteredMovies = Array();
  // Chequeo que el termino de busqueda no sea indefinido
  if (searchTerm != undefined) {
    movies.forEach((movie) => {
      // filtro las peliculas que cuyo titulo coincida con el termino de busqueda
      if (movie.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
        // Concateno todas las peliculas que coincidan con el termino en el arreglo
        filteredMovies = filteredMovies.concat(movie);
      }
    });
  } else {
    // Si no hay termino de busqueda no se hace nada
    filteredMovies = movies;
  }

  if (filteredMovies.length === 0) {
    // Si no hay películas que coincidan con la cadena de busqueda se devuelve el mensaje
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>

          <p>
            No hay peliculas que coincidan con el titulo "
            <strong>{searchTerm}</strong>"
          </p>
        </div>
      </div>
    );
  }
  // Se devuelve la lista de peliculas, ya sea filtrada por la cadena de busqueda o no
  return (
    <div className={style.card_list}>
      {filteredMovies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};
export default CardList;
