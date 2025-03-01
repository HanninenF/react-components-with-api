import { useState } from "react";
import { AllTypes } from "./types/types";
/* import { SearchBar } from "./Widgets/SearchBar/SearchBar"; */
import { MovieMiniCard } from "./Widgets/MovieMiniCard/MovieMiniCard";
import { SearchBar } from "./Widgets/SearchBar2/SearchBar";

export function App() {
  const [movies, setMovies] = useState<AllTypes.Search[] | null>(null);

  return (
    <>
      {/* <SearchBar setMovies={setMovies} />
      <MovieMiniCard movies={movies} /> */}
      <SearchBar />
    </>
  );
}
