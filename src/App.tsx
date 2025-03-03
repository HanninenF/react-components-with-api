import { useState } from "react";
import { SearchBar } from "./Widgets/SearchBars/SearchBar3/SearchBar";
import { useFetch } from "./Hooks/useFetch";
/* import { SearchBar } from "./Widgets/SearchBar/SearchBar"; */
/* import { MovieMiniCard } from "./Widgets/MovieMiniCard/MovieMiniCard"; */
/* import { SearchBar } from "./Widgets/SearchBars/SearchBar2/SearchBar";
import { MovieMiniCard } from "./Widgets/MovieMiniCardss/MovieMiniCard2/MovieMiniCard"; */

export function App() {
  /*   const [movies, setMovies] = useState<AllTypes.Search[]>([]);
  const [onLoading, seetOnLoading] = useState<boolean>(true); */
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { onLoading, movies, hasSearched } = useFetch(searchQuery);

  return (
    <>
      {/* <SearchBar setMovies={setMovies} />
      <MovieMiniCard movies={movies} /> */}
      {/* <SearchBar setMovies={setMovies} setOnLoading={seetOnLoading} />
      <MovieMiniCard movies={movies} onLoading={onLoading} /> */}

      <SearchBar setSearchQuery={setSearchQuery} />

      {hasSearched && onLoading ? (
        <p>...loading</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.imdbID}>
            <p> {movie.Title} </p>
          </div>
        ))
      )}
    </>
  );
}
