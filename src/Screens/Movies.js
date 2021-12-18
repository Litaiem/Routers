import React from "react";
import MovieCard from "../Component/MovieCard/MovieCard";

const Movies = ({ movies, searchCondition }) => {
  return (
    <div className="cards">
      <img
        src="https://image.shutterstock.com/image-photo/movie-projector-on-dark-background-600w-753798850.jpg"
        alt=""
        className="bg-home"
      />
      {movies
        .filter((e) =>
          e.name.toLowerCase().includes(searchCondition.toLowerCase())
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
};

export default Movies;
