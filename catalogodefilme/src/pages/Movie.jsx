import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import styles from "./Movie.module.css";

import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async url => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = number => {
    return number.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = ` ${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className={styles.movie_page}>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className={styles.tagline}>{movie.tagline}</p>
          <div className={styles.info}>
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className={styles.info_description}>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;
