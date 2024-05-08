import Card from '../Card/Card';
import style from "./CardList.module.css";
import React, { useState, useEffect } from 'react';

// Componente CardList que muestra la lista de películas guardadas en el json
const CardList = ({}) => {
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
  return (
    <div className={style.card_list}>
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};

export default CardList;