import React, { useEffect, useState } from "react";
import { API_KEY } from "../../keys/apiKey";
import "./SearchBar.scss";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [name, setName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(() => e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // Förhindra tom sökning
    setSearchQuery(inputValue); // Uppdaterar sökningen och triggar useEffect
  };

  useEffect(() => {
    //apiAnrop
    const baseUrl: string = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
    const movieUrl: string = baseUrl + "s=" + encodeURIComponent(searchQuery);

    const fetchData = async () => {
      const result = await fetch(movieUrl);
      const data = await result.json();
      console.log(data);
      setName(data.Search[0].Title);
    };
    fetchData();
    /* return () => {}; */
  }, [searchQuery]);
  return (
    <>
      <select name="" id="">
        <option value="">All</option>
      </select>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchField">
          <input name="searchField" type="text" onChange={handleChange} />
        </label>
        <button></button>
      </form>
      <p>{name}</p>
    </>
  );
};
