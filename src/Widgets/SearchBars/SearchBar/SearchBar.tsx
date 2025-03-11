import React, { useEffect, useState } from "react";
import { API_KEY } from "../../../keys/apiKey";
import "./SearchBar.scss";
import { AllTypes } from "../../../types/types";

type SearchBarProps = {
  setMovies: React.Dispatch<React.SetStateAction<AllTypes.Search[] | null>>;
};

export const SearchBar = ({ setMovies: setMovies }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Förhindra tom sökning
    setSearchQuery(inputValue); // Uppdaterar sökningen och triggar useEffect
    setInputValue("");
  };

  useEffect(() => {
    //apiAnrop
    const baseUrl: string = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
    const movieUrl: string = baseUrl + "s=" + encodeURIComponent(searchQuery);

    const fetchData = async () => {
      const result = await fetch(movieUrl);
      const data = (await result.json()) as AllTypes.Root;
      console.log(data);
      data.Search?.length > 0 && setMovies(data.Search);
    };
    fetchData();
    /* return () => {}; */
  }, [searchQuery, setMovies]);
  return (
    <>
      <select name="" id="">
        <option value="">All</option>
      </select>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchField">
          <input
            name="searchField"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <button></button>
      </form>
    </>
  );
};
