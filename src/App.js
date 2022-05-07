import logo from "./logo.svg";
import HomePage from "./Pages/Home/HomePage";
import MoviePage from "./Pages/Movie/MoviePage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
