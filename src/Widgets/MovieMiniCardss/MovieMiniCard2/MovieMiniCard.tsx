import { AllTypes } from "../../../types/types";
import "./MovieMiniCard.scss";

type MovieMiniCardProps = {
  movies: AllTypes.Search[];
  onLoading: boolean;
};
export const MovieMiniCard = ({ movies, onLoading }: MovieMiniCardProps) => {
  return (
    <>
      {onLoading ? (
        <p>loading...</p>
      ) : (
        movies.map((movie) => (
          <button key={movie.imdbID}>
            <h2> {movie.Title} </h2>
          </button>
        ))
      )}
    </>
  );
};
