import Card from '../Card/Card';
import style from "./CardList.module.css";
import React, { useState, useEffect } from 'react';

// Componente CardList que muestra la lista de películas guardadas en el json
const CardList = ( {searchTerm} ) => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await fetch(`../src/mocks/movies.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setMovies(result);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
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
  return (
    <div className={style.card_list}>
      {filteredMovies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};
export default CardList;