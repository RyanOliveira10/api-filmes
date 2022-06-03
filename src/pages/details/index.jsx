import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apiKey } from "../../config/ApiKey";
import { Container } from "../details/style";
import { image_path } from "../../config/image";

export default function Details() {
  const { id } = useParams();
  const movie_id = id.replace(":", "");
  console.log(movie_id);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, overview, release_date, poster_path } = data;

        const movie = {
          id,
          title,
          sinopse: overview,
          releaseDate: release_date,
          image: `${image_path}${poster_path}`,
        };

        setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <h1>Detalhes</h1>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Data de Lançamento: {movie.releaseDate}
          </span>
          <Link to="/">
              <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
