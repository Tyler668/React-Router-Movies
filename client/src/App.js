import React, { useState } from 'react';
// import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  // const [moviesArray, setMoviesArray] = useState([]);
  // const id = moviesArray.find(movie => movie.match.params.id === `${movie.id}`);

  // axios
  // .get('http://localhost:5000/api/movies')
  // .then(response => {
  //   setMoviesArray(response.data);
  // })
  // .catch(error => {
  //   console.error('Server Error', error);
  // });

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Router>
        <SavedList list={savedList} />
        <Route exact path="/" render={props => <MovieList {...props} movies={MovieList}/>} />
        <Route path="/movies/:id"  render={props => <Movie {...props} movie={Movie} />}/>
      </Router>
    </div>
  );
};

export default App;


