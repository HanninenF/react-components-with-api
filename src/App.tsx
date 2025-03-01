import { useState } from "react";
import { AllTypes } from "./types/types";
import { SearchBar } from "./Widgets/SearchBar/SearchBar";
import { MovieMiniCard } from "./Widgets/MovieMiniCard/MovieMiniCard";

export function App() {
  const [movies, setMovies] = useState<AllTypes.Search[] | null>(null);

  return (
    <>
      <SearchBar setMovies={setMovies} />
      <MovieMiniCard movies={movies} />
    </>
  );
}
