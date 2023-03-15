import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { GiFilmSpool } from "react-icons/gi";

import styles from "./MovieGrid.module.css";

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRateUrl = `${moviesURL}top_rated?${apiKEY}`;

    getTopRatedMovies(topRateUrl);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Melhores Filmes <GiFilmSpool />
      </h2>
      <div className={styles.movies_container}>
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default Home;
