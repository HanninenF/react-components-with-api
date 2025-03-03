import { useState, useEffect } from "react";
import { AllTypes } from "../types/types";
import { API_KEY } from "../keys/apiKey";

export const useFetch = (searchQuery: string) => {
  const [onLoading, setOnLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<AllTypes.Search[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  useEffect(() => {
    if (!searchQuery) return;
    setHasSearched(true);
    const controller = new AbortController();
    const baseUrl: string = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
    const movieUrl: string = baseUrl + "s=" + encodeURIComponent(searchQuery);

    const fetchMovies = async () => {
      try {
        setOnLoading(true);
        const response = await fetch(movieUrl, { signal: controller.signal });
        const data = (await response.json()) as AllTypes.Root;

        console.log(data);

        if (!data.Search) {
          setMovies([]);
        } else {
          setMovies(data.Search);
        }
        setOnLoading(false);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [searchQuery]);
  return { onLoading, movies, hasSearched };
};
