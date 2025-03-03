import { useEffect, useState } from "react";
import "./SearchBar.scss";
import { API_KEY } from "../../../keys/apiKey";
import { AllTypes } from "../../../types/types";

type SearchBarProps = {
  setMovies: React.Dispatch<React.SetStateAction<AllTypes.Search[]>>;
  setOnLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchBar = ({ setMovies, setOnLoading }: SearchBarProps) => {
  const [searchBarInputValue, setSearchBarInputValue] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchBarInput = e.target;
    setSearchBarInputValue(searchBarInput.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchBarInputValue);
    setSearchBarInputValue("");
    setOnLoading(true);
  };

  useEffect(() => {
    let ignore = false;
    const baseUrl: string = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
    const movieUrl: string = baseUrl + "s=" + encodeURIComponent(searchQuery);
    const fetchMovies = async () => {
      const result = await fetch(movieUrl);
      const data = (await result.json()) as AllTypes.Root;
      console.log(data);

      if (!ignore) {
        if (!data.Search || !Array.isArray(data.Search)) {
          setMovies([]);
        } else {
          setMovies(data.Search);
        }
        setOnLoading(false);
      }
    };
    fetchMovies();

    console.log("searchQuery", searchQuery);
    return () => {
      ignore = true;
    };
  }, [searchQuery, setMovies]);

  return (
    <>
      <div className="searchBar__container">
        <form className="searchBar__form" onSubmit={handleSearchSubmit}>
          <select
            className="searchBar__movieGenreSelect"
            name="searchBarMovieGenre"
            id=""
          >
            <option value="All">All</option>
          </select>
          <label className="searchBar__inputLabel" htmlFor="searchBar__input">
            <input
              id="searchBar__input"
              className="searchBar__input"
              type="text"
              name="searchBarInput"
              onChange={handleInputChange}
              value={searchBarInputValue}
              placeholder="search"
            />
          </label>
          <button className="searchBar__button">🔎</button>
        </form>
      </div>
    </>
  );
};
