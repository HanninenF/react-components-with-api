import { useEffect, useState } from "react";
import "./SearchBar.scss";
import { API_KEY } from "../../keys/apiKey";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    const baseUrl: string = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
    const movieUrl = baseUrl + "s=" + encodeURIComponent(searchQuery);
    const fetchData = async () => {
      const result = await fetch(movieUrl);
      const data = await result.json();
      console.log(data);
    };
    fetchData();

    console.log("searchQuery", searchQuery);
  }, [searchQuery]);

  return (
    <>
      <div className="searchBarContainer">
        <form className="searchBar" onSubmit={handleSubmit}>
          <select className="movieCategory" name="MovieCategory" id="">
            <option value="All"></option>
          </select>
          <label className="searchBarInputLabel" htmlFor="">
            <input
              className="searchBarInput"
              type="text"
              name="SearchBarInput"
              onChange={handleChange}
              value={inputValue}
            />
          </label>
          <button className="searchBarButton">🔎</button>
        </form>
      </div>
    </>
  );
};
