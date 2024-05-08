import React from "react";
import CardList from "../../Components/CardList/CardList";

const Home = ({ searchTerm }) => {
  return (
    <div>
      {/* Mando el termino de busqueda al componente CardList */}
      <CardList searchTerm={searchTerm} />
    </div>
  );
};
export default Home;
