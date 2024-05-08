
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}  />
          <Route exact path="/details/:id" element={<Details />}  />
        </Routes>
      </Router>
    </>
  );
}

export default App;
