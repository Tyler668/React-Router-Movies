import React from 'react';
import { Link } from "react-router-dom";
// import SavedList from "./SavedList";

const MovieCard = (movie) => {
  



  // const saveMovie = (film) => {
  //   const addToSavedList = () => props.addToSavedList;
  //   addToSavedList(movie)
  // }

  return (
    <div className="save-wrapper">
      <div className="movie-card">
     
      <h2>{movie.title}</h2>                                                        
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      < button className="save-button">Save</button>
    </div>
  );
};

export default MovieCard;
