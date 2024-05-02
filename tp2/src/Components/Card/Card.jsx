// Componente Card que muestra la información breve de una película
const Card = ({ movie }) => {
    return (
      <div className="card bg-stone-900 p-5">
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title} ({movie.Year})</h2>
        <p>{movie.Plot}</p>
        <p>Director: {movie.Director}</p>
        <p>IMDb Rating: {movie.imdbRating}</p>
      </div>
    );
  };
export default Card;