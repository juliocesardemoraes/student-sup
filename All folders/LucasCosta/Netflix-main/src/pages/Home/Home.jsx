import React, { useEffect } from "react";
import { useState } from "react";
import { MovieService } from "../../api/movieService";
const Home = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();
    console.log("r", results);
    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <section className="Home">
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.id}
          {movie.title}
        </div>
      ))}
    </section>
  );
};

export default Home;
