import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
    <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
