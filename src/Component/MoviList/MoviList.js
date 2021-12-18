import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MoviList = ({ movies, searchCondition, selectRating }) => {
  return (
    <container style={{ display: "flex", flexWrap: "wrap" }}>
      {movies
        .filter(
          (movie) =>
            movie.name.includes(searchCondition) && movie.rating >= selectRating
        )

        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </container>
  );
};

export default MoviList;
