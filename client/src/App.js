import React, { useState } from 'react';
// import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import {Route} from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/"/>
      <Route path = "/movies/:id"/>
      <MovieList/>
      {/* <Movie/> */}
    </div>
  );
};

export default App;
