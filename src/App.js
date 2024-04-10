import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "./components/header";
import MovieList from "./components/home";
import Movie from "./components/movie-details";
import Home from "./components/home";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route index element={<Home />}></Route>
        <Route index path="movies/:type" element={<MovieList />}></Route>
        <Route path="movie/:id" element={<Movie/>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
