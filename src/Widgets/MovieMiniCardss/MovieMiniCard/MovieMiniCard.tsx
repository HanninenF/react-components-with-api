import { AllTypes } from "../../../types/types";
import "./MovieMiniCard.scss";

type MovieMiniCardProps = {
  movies: AllTypes.Search[] | null;
};

export const MovieMiniCard = ({ movies }: MovieMiniCardProps) => {
  return (
    <>
      <div className="movieContainer">
        {movies &&
          movies.map((movie) => (
            <button key={movie.imdbID}>{movie.Title}</button>
          ))}
      </div>
    </>
  );
};
