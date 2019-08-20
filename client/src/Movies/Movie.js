import React from 'react';
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Movie = (props) => {

  const [movie, setMovie] = useState();
  

  useEffect(() => {
    const id = props.match.params.id;


       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          console.log(response.data.stars);
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  },[]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return ( <MovieCard title = {movie.title} director = {movie.director} metascore = {movie.metascore} stars = {movie.stars} key = {movie.id}/> );
}

export default Movie;
