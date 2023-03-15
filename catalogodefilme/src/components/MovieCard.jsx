import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

import styles from "./MovieCard.module.css";

const imageUrl = import.meta.env.VITE_IMG;

function MovieCard({ movie, showLink = true }) {
  return (
    <div className={styles.movie_card}>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <div className={styles.movie_info}>
        <h2>{movie.title}</h2>
        <p>
          <FaStar /> {movie.vote_average}
        </p>
        {showLink && (
          <Link to={`/movie/${movie.id}`}>
            <TbListDetails />
            Detalhes
          </Link>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
