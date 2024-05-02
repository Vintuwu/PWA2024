import Card from '../Card/Card';
import movies from "../../mocks/movies.json";

// Componente CardList que muestra la lista de películas guardadas en el json
const CardList = ({}) => {
  return (
    <div className="card-list p-5 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-16">
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};

export default CardList;