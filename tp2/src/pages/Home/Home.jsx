import React from "react";
import CardList from "../../Components/CardList/CardList";
/* Página home que muestra la lista de peliculas en cards, recibiendo el término de busqueda desde el header */
const Home = ({ searchTerm }) => {
  return (
    <div>
      {/* Mando el término de busqueda al componente CardList */}
      <CardList searchTerm={searchTerm} />
    </div>
  );
};
export default Home;
